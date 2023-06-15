import { Asset, Tenderizer, Stake, Unlock } from '../types/schema'
import {
  Deposit,
  Unlock as UnlockEvent,
  Withdraw,
  Transfer,
  Tenderizer as TenderizerContract,
} from '../types/templates/Tenderizer/Tenderizer'
import { convertToDecimal, BD_ZERO } from './helpers'
export function handleDeposit(event: Deposit): void {
  let asset = Asset.load(event.address.toHex())
  if (asset == null) return
  asset.tvl = asset.tvl.plus(convertToDecimal(event.params.tTokenOut))
  asset.save()

  let tenderizer = Tenderizer.load(event.address.toHex())
  if (tenderizer == null) return
  tenderizer.tvl = tenderizer.tvl.plus(convertToDecimal(event.params.tTokenOut))
  tenderizer.save()

  let stake = Stake.load(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
  if (stake == null) {
    stake = new Stake(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
    stake.asset = asset.id
    stake.tenderizer = tenderizer.id
    stake.user = event.params.receiver.toHex()
    stake.balance = BD_ZERO
    stake.shares = BD_ZERO
  }
  stake.balance = stake.balance.plus(convertToDecimal(event.params.tTokenOut))
  // TODO: Update shares
  stake.shares = stake.shares
  stake.save()
}

export function handleUnlock(event: UnlockEvent): void {
  let asset = Asset.load(event.address.toHex())
  if (asset == null) return
  asset.tvl = asset.tvl.minus(convertToDecimal(event.params.assets))
  asset.save()

  let tenderizer = Tenderizer.load(event.address.toHex())
  if (tenderizer == null) return
  tenderizer.tvl = tenderizer.tvl.minus(convertToDecimal(event.params.assets))
  tenderizer.save()

  let stake = Stake.load(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
  if (stake == null) return
  stake.balance = stake.balance.minus(convertToDecimal(event.params.assets))
  // TODO: Update shares
  stake.shares = stake.shares

  // Encode id from event with tenderizer address
  // TODO: Turn into helper
  let id = event.params.unlockID.toString()
  let unlockID = tenderizer.id.concat('0'.repeat(24 - id.length).concat(id))
  let unlock = new Unlock(unlockID)
  unlock.user = event.params.receiver.toHex()
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

  let fromID = event.params.from.toHex().concat('-').concat(event.address.toHex())
  let from = Stake.load(fromID)
  if (from == null) return
  from.balance = from.balance.minus(convertToDecimal(event.params.value))
  from.save()

  let toID = event.params.to.toHex().concat('-').concat(event.address.toHex())
  let to = Stake.load(toID)
  if (to == null) {
    to = new Stake(toID)
    to.asset = tenderizer.asset
    to.tenderizer = tenderizer.id
    to.user = event.params.to.toHex()
    to.balance = BD_ZERO
    to.shares = BD_ZERO
  }
  to.balance = to.balance.plus(convertToDecimal(event.params.value))
  to.save()
}
// No need to keep track of balances, just shares
