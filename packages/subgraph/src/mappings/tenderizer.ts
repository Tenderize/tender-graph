import { BigDecimal } from '@graphprotocol/graph-ts'

import { Asset, AssetDay, Tenderizer, TenderizerDay, Stake, Unlock, User, DepositEvent, UnlockEvent, WithdrawEvent, RebaseEvent, TokenTransferEvent } from '../types/schema'
import {
  Deposit as EmitDeposit,
  Unlock as EmitUnlock,
  Withdraw as EmitWithdraw,
  Transfer as EmitTransfer,
  Tenderizer as TenderizerContract,
  Rebase as EmitRebase,
} from '../types/templates/Tenderizer/Tenderizer'
import { convertToDecimal, BD_ZERO } from './helpers'

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
  }
  stake.shares = stake.shares.plus(shares)
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
  tenderizer.tvl = tenderizer.tvl.minus(convertToDecimal(event.params.assets))
  let shares = convertToDecimal(TenderizerContract.bind(event.address).convertToShares(event.params.assets))
  tenderizer.shares = tenderizer.shares.minus(shares)
  tenderizer.save()

  let asset = Asset.load(tenderizer.asset)
  if (asset == null) return
  asset.tvl = asset.tvl.minus(convertToDecimal(event.params.assets))
  asset.save()

  let stake = Stake.load(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
  if (stake == null) return
  stake.shares = stake.shares.minus(shares)
  stake.save()

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
  unlock.amount = convertToDecimal(event.params.assets)
  unlock.maturity = TenderizerContract.bind(event.address).unlockMaturity(event.params.unlockID).toI32()
  unlock.save()

  let unlockEvent = new UnlockEvent(event.transaction.hash.toHex())
  unlockEvent.timestamp = event.block.timestamp.toI32()
  unlockEvent.amount = convertToDecimal(event.params.assets)
  unlockEvent.shares = convertToDecimal(TenderizerContract.bind(event.address).convertToShares(event.params.assets))
  unlockEvent.unlock = unlock.id
  unlockEvent.asset = asset.id
  unlockEvent.tenderizer = tenderizer.id
  unlockEvent.user = event.params.receiver.toHex()
  unlockEvent.save()
}

export function handleWithdraw(event: EmitWithdraw): void {
  let id = event.params.unlockID.toString()
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

  let shares = convertToDecimal(TenderizerContract.bind(event.address).convertToShares(event.params.value))

  let fromID = event.params.from.toHex().concat('-').concat(event.address.toHex())
  let from = Stake.load(fromID)
  if (from == null) return
  from.shares = from.shares.minus(shares)
  from.save()

  let toID = event.params.to.toHex().concat('-').concat(event.address.toHex())
  let to = Stake.load(toID)
  if (to == null) {
    to = new Stake(toID)
    to.asset = tenderizer.asset
    to.tenderizer = tenderizer.id
    to.user = event.params.to.toHex()
    to.shares = BD_ZERO
  }
  to.shares = to.shares.plus(shares)
  to.save()

  let transferEvent = new TokenTransferEvent(event.transaction.hash.toHex())
  transferEvent.timestamp = event.block.timestamp.toI32()
  transferEvent.from = event.params.from.toHex()
  transferEvent.to = event.params.to.toHex()
  transferEvent.amount = convertToDecimal(event.params.value)
  transferEvent.shares = shares
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
  if (oldStake.equals(BD_ZERO)) return;
  if (oldStake.equals(newStake)) return;

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
  if (tenderizerDay == null) {
    tenderizerDay = new TenderizerDay(tenderizer.id.concat('-').concat(dayID.toString()))
    tenderizerDay.date = dayID * 86400
    tenderizerDay.tenderizer = tenderizer.id
    tenderizerDay.rewards = BD_ZERO
  }
  tenderizerDay.tvl = tenderizer.tvl
  tenderizerDay.rewards = tenderizerDay.rewards.plus(newStake.minus(oldStake))
  tenderizerDay.shares = BD_ZERO

  // Calculate APR for period
  let lastTenderizerDay = TenderizerDay.load(tenderizer.id.concat('-').concat(tenderizer.lastUpdateDay.toString()))
  let daysElapsed = BigDecimal.fromString('1');
  if (lastTenderizerDay != null) {
    daysElapsed = BigDecimal.fromString((dayID - tenderizer.lastUpdateDay.toI32() / 86400).toString())
    const apr = tenderizerDay.tvl.minus(lastTenderizerDay.tvl).div(lastTenderizerDay.tvl).times(BigDecimal.fromString("365").div(daysElapsed)).times(BigDecimal.fromString("100"))
    tenderizerDay.apr = apr
    tenderizer.apr = apr
  } else {
    const apr = newStake.minus(oldStake).div(oldStake).times(BigDecimal.fromString("365")).times(BigDecimal.fromString("100"))
    tenderizerDay.apr = apr
    tenderizer.apr = apr
  }

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
