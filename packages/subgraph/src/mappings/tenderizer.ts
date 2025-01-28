import { BigDecimal, BigInt, ethereum } from '@graphprotocol/graph-ts'

import {
  Asset,
  AssetDay,
  Tenderizer,
  TenderizerDay,
  Stake,
  Unlock,
  User,
  DepositEvent,
  UnlockEvent,
  WithdrawEvent,
  RebaseEvent,
  TokenTransferEvent,
} from '../types/schema'
import {
  Deposit as EmitDeposit,
  Unlock as EmitUnlock,
  Withdraw as EmitWithdraw,
  Transfer as EmitTransfer,
  Tenderizer as TenderizerContract,
  Rebase as EmitRebase,
} from '../types/templates/Tenderizer/Tenderizer'
import { convertToDecimal, BD_ZERO, findClosestRebaseEvent } from './helpers'

export function handleDeposit(event: EmitDeposit): void {
  let tenderizer = Tenderizer.load(event.address.toHex())
  if (tenderizer == null) return
  tenderizer.tvl = tenderizer.tvl.plus(convertToDecimal(event.params.tTokenOut))
  let shares = convertToDecimal(TenderizerContract.bind(event.address).convertToShares(event.params.tTokenOut))
  tenderizer.shares = tenderizer.shares.plus(shares)
  tenderizer.save()

  let asset = Asset.load(tenderizer.asset)
  if (asset == null) return
  asset.tvl = asset.tvl.plus(convertToDecimal(event.params.tTokenOut))
  asset.save()

  const receiver = event.params.receiver.toHex()

  let stake = Stake.load(receiver.concat('-').concat(event.address.toHex()))
  if (stake == null) {
    stake = new Stake(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
    stake.asset = asset.id
    stake.tenderizer = tenderizer.id
    stake.user = receiver
    stake.shares = BD_ZERO
    stake.netDeposits = BD_ZERO
  }
  stake.shares = stake.shares.plus(shares)
  stake.netDeposits = stake.netDeposits.plus(convertToDecimal(event.params.assetsIn))
  stake.save()

  let user = User.load(receiver)
  if (user == null) {
    user = new User(receiver)
    user.save()
  }

  let depositEvent = new DepositEvent(event.transaction.hash.toHex())
  depositEvent.timestamp = event.block.timestamp.toI32()
  depositEvent.assetsIn = convertToDecimal(event.params.assetsIn)
  depositEvent.tTokenOut = convertToDecimal(event.params.tTokenOut)
  depositEvent.shares = shares
  depositEvent.asset = asset.id
  depositEvent.tenderizer = tenderizer.id
  depositEvent.user = user.id
  depositEvent.save()
}

export function handleUnlock(event: EmitUnlock): void {
  let tenderizer = Tenderizer.load(event.address.toHex())
  if (tenderizer == null) return

  let stake = Stake.load(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
  if (stake == null) return
  let amount = convertToDecimal(event.params.assets)

  let balanceBefore = stake.shares.times(tenderizer.tvl).div(tenderizer.shares)
  let sharesUnlocked = amount.times(tenderizer.shares).div(tenderizer.tvl)
  if (balanceBefore.minus(stake.netDeposits).lt(amount)) {
    // if rewards less than amount, set net deposits
    // to balance minus what wasnt subtracted from the rewards
    stake.netDeposits = balanceBefore.minus(amount)
  }
  stake.shares = stake.shares.minus(sharesUnlocked)
  stake.save()

  let asset = Asset.load(tenderizer.asset)
  if (asset == null) return
  asset.tvl = asset.tvl.minus(amount)
  asset.save()

  tenderizer.tvl = tenderizer.tvl.minus(amount)
  tenderizer.shares = tenderizer.shares.minus(sharesUnlocked)
  tenderizer.save()

  // Encode id from event with tenderizer address
  // TODO: Turn into helper
  let id = event.params.unlockID.toHex().slice(2)
  let unlockID = tenderizer.id.concat('0'.repeat(24 - id.length).concat(id))
  let unlock = new Unlock(unlockID)
  unlock.user = event.params.receiver.toHex()
  unlock.timestamp = event.block.timestamp.toI32()
  unlock.asset = asset.id
  unlock.redeemed = false
  unlock.tenderizer = tenderizer.id
  unlock.amount = amount
  let unlockMaturityResult = TenderizerContract.bind(event.address).try__unlockMaturity(event.params.unlockID)
  unlockMaturityResult.reverted ? unlock.maturity = 0 : unlock.maturity = unlockMaturityResult.value.toI32()
  unlock.save()

  let unlockEvent = new UnlockEvent(event.transaction.hash.toHex())
  unlockEvent.timestamp = event.block.timestamp.toI32()
  unlockEvent.amount = amount
  unlockEvent.shares = sharesUnlocked
  unlockEvent.unlock = unlock.id
  unlockEvent.asset = asset.id
  unlockEvent.tenderizer = tenderizer.id
  unlockEvent.user = event.params.receiver.toHex()
  unlockEvent.save()
}

export function handleWithdraw(event: EmitWithdraw): void {
  let id = event.params.unlockID.toHex().slice(2)
  let unlockID = event.address.toHex().concat('0'.repeat(24 - id.length).concat(id))
  let unlock = Unlock.load(unlockID)
  if (unlock == null) return
  unlock.redeemed = true
  unlock.save()

  let withdrawEvent = new WithdrawEvent(event.transaction.hash.toHex())
  withdrawEvent.timestamp = event.block.timestamp.toI32()
  withdrawEvent.assetsOut = convertToDecimal(event.params.assets)
  withdrawEvent.unlock = unlock.id
  withdrawEvent.asset = unlock.asset
  withdrawEvent.tenderizer = unlock.tenderizer
  withdrawEvent.user = unlock.user
  withdrawEvent.save()
}

export function handleTransfer(event: EmitTransfer): void {
  let tenderizer = Tenderizer.load(event.address.toHex())
  if (tenderizer == null) return

  let fromID = event.params.from.toHex().concat('-').concat(event.address.toHex())
  let from = Stake.load(fromID)
  if (from == null) return

  let amount = convertToDecimal(event.params.value)
  let balanceBefore = from.shares.times(tenderizer.tvl).div(tenderizer.shares)
  let sharestransferred = amount.times(tenderizer.shares).div(tenderizer.tvl)
  if (balanceBefore.minus(from.netDeposits).lt(amount)) {
    // if rewards less than amount, set net deposits
    // to balance minus what wasnt subtracted from the rewards
    from.netDeposits = balanceBefore.minus(amount)
  }
  from.shares = from.shares.minus(sharestransferred)
  from.save()

  let toID = event.params.to.toHex().concat('-').concat(event.address.toHex())
  let to = Stake.load(toID)
  if (User.load(event.params.to.toHex()) == null) {
    let user = new User(event.params.to.toHex())
    user.save()
  }
  if (to == null) {
    to = new Stake(toID)
    to.asset = tenderizer.asset
    to.tenderizer = tenderizer.id
    to.user = event.params.to.toHex()
    to.shares = BD_ZERO
    to.netDeposits = BD_ZERO
  }
  to.shares = to.shares.plus(sharestransferred)
  to.netDeposits = to.netDeposits.plus(amount)

  to.save()

  let transferEvent = new TokenTransferEvent(event.transaction.hash.toHex())
  transferEvent.timestamp = event.block.timestamp.toI32()
  transferEvent.from = event.params.from.toHex()
  transferEvent.to = event.params.to.toHex()
  transferEvent.amount = convertToDecimal(event.params.value)
  transferEvent.shares = sharestransferred
  transferEvent.asset = tenderizer.asset
  transferEvent.tenderizer = tenderizer.id
  transferEvent.save()
}

export function handleRebase(event: EmitRebase): void {
  let tenderizer = Tenderizer.load(event.address.toHex())
  if (tenderizer == null) return

  let asset = Asset.load(tenderizer.asset)
  if (asset == null) return

  let oldStake = convertToDecimal(event.params.oldStake)
  let newStake = convertToDecimal(event.params.newStake)
  // if old stake equals zero, return to avoid division by zero
  if (oldStake.equals(BD_ZERO)) return
  if (oldStake.equals(newStake)) return

  asset.tvl = asset.tvl.plus(newStake.minus(oldStake))
  tenderizer.tvl = newStake

  let dayID = event.block.timestamp.toI32() / 86400

  let assetDay = AssetDay.load(asset.id.concat('-').concat(dayID.toString()))

  if (assetDay == null) {
    assetDay = new AssetDay(asset.id.concat('-').concat(dayID.toString()))
    assetDay.date = dayID * 86400
    assetDay.asset = asset.id
    assetDay.rewards = BD_ZERO
  }
  assetDay.tvl = asset.tvl
  assetDay.rewards = assetDay.rewards.plus(newStake.minus(oldStake))

  let tenderizerDay = TenderizerDay.load(tenderizer.id.concat('-').concat(dayID.toString()))
  const days = tenderizer.tenderizerDays.load()

  let lastTenderizerDay: TenderizerDay | null
  if (tenderizerDay == null) {
    tenderizerDay = new TenderizerDay(tenderizer.id.concat('-').concat(dayID.toString()))
    tenderizerDay.date = dayID * 86400
    tenderizerDay.tenderizer = tenderizer.id
    tenderizerDay.rewards = BD_ZERO
    tenderizerDay.startStake = oldStake
    lastTenderizerDay = days.length ? days[days.length - 1] : null
  } else {
    lastTenderizerDay = days.length > 1 ? days[days.length - 2] : null
  }
  tenderizerDay.tvl = tenderizer.tvl
  tenderizerDay.rewards = tenderizerDay.rewards.plus(newStake.minus(oldStake))
  tenderizerDay.shares = tenderizer.shares

  // Assuming BigDecimal is already defined and available in your environment
  let daysElapsed = BigDecimal.fromString('1')

  if (lastTenderizerDay != null) {
    daysElapsed = BigDecimal.fromString((dayID - lastTenderizerDay.date / 86400).toString())
    const apr = tenderizerDay.rewards.div(tenderizerDay.startStake).times(BigDecimal.fromString('365').div(daysElapsed))
    tenderizerDay.apr = apr
    tenderizer.apr = apr
  } else {
    const createdDay = tenderizer.createdAt / 86400
    const now = event.block.timestamp.toI32() / 86400
    daysElapsed = BigDecimal.fromString((now === createdDay ? 1 : now - createdDay).toString())
    const apr = newStake.minus(oldStake).div(oldStake).times(BigDecimal.fromString('365').div(daysElapsed))
    tenderizerDay.apr = apr
    tenderizer.apr = apr
  }

  // Convert APR to APY using daysElapsed as the compounding frequency
  let periodsPerYear = 365 / parseFloat(daysElapsed.toString()) // Calculate the number of periods per year
  let apy = BigDecimal.fromString(
    (Math.pow(1 + parseFloat(tenderizer.apr.toString()) / periodsPerYear, periodsPerYear) - 1).toString()
  )
  tenderizerDay.apy = apy
  tenderizer.apy = apy

  asset.save()
  assetDay.save()
  tenderizer.save()
  tenderizerDay.save()

  let rebaseEvent = new RebaseEvent(event.transaction.hash.toHex())
  rebaseEvent.timestamp = event.block.timestamp.toI32()
  rebaseEvent.oldStake = oldStake
  rebaseEvent.newStake = newStake
  rebaseEvent.asset = asset.id
  rebaseEvent.tenderizer = tenderizer.id
  rebaseEvent.save()
}
