import { BigDecimal } from '@graphprotocol/graph-ts'

import { Asset, AssetDay, Tenderizer, TenderizerDay, Stake, Unlock } from '../types/schema'
import {
  Deposit,
  Unlock as UnlockEvent,
  Withdraw,
  Transfer,
  Tenderizer as TenderizerContract,
  Rebase,
} from '../types/templates/Tenderizer/Tenderizer'
import { convertToDecimal, BD_ZERO } from './helpers'

export function handleDeposit(event: Deposit): void {
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

  let stake = Stake.load(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
  if (stake == null) {
    stake = new Stake(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
    stake.asset = asset.id
    stake.tenderizer = tenderizer.id
    stake.user = event.params.receiver.toHex()
    stake.shares = BD_ZERO
  }
  stake.shares = stake.shares.plus(shares)
  stake.save()
}

export function handleUnlock(event: UnlockEvent): void {
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
  let id = event.params.unlockID.toString()
  let unlockID = tenderizer.id.concat('0'.repeat(24 - id.length).concat(id))
  let unlock = new Unlock(unlockID)
  unlock.user = event.params.receiver.toHex()
  unlock.asset = asset.id
  unlock.redeemed = false
  unlock.tenderizer = tenderizer.id
  unlock.amount = convertToDecimal(event.params.assets)
  unlock.maturity = TenderizerContract.bind(event.address).unlockMaturity(event.params.unlockID)
  unlock.save()
}

export function handleWithdraw(event: Withdraw): void {
  let id = event.params.unlockID.toString()
  let unlockID = event.address.toHex().concat('0'.repeat(24 - id.length).concat(id))
  let unlock = Unlock.load(unlockID)
  if (unlock == null) return
  unlock.redeemed = true
  unlock.save()
}

export function handleTransfer(event: Transfer): void {
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
}

export function handleRebase(event: Rebase): void {
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
  tenderizer.apr = BD_ZERO
  let daysElapsed = dayID - tenderizer.lastUpdateDay.toI32()
  tenderizer.apr = tenderizer.apr.plus(tenderizerDay.rewards
    .div(oldStake)
    .times(BigDecimal.fromString((365 / (daysElapsed ? daysElapsed : 1)).toString()))).div(BigDecimal.fromString('2'))

  asset.save()
  assetDay.save()
  tenderizer.save()
  tenderizerDay.save()
}
