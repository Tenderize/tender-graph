import { Asset, AssetDay, Tenderizer, Stake, Unlock } from '../types/schema'
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
    let asset = Asset.load(event.address.toHex())
    if (asset == null) return
    asset.tvl = asset.tvl.plus(convertToDecimal(event.params.tTokenOut))
    asset.save()

    let tenderizer = Tenderizer.load(event.address.toHex())
    if (tenderizer == null) return
    tenderizer.tvl = tenderizer.tvl.plus(convertToDecimal(event.params.tTokenOut))
    let shares = convertToDecimal(TenderizerContract.bind(event.address).convertToShares(event.params.tTokenOut))
    tenderizer.shares = tenderizer.shares.plus(shares)
    tenderizer.save()

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
    let asset = Asset.load(event.address.toHex())
    if (asset == null) return
    asset.tvl = asset.tvl.minus(convertToDecimal(event.params.assets))
    asset.save()

    let tenderizer = Tenderizer.load(event.address.toHex())
    if (tenderizer == null) return
    tenderizer.tvl = tenderizer.tvl.minus(convertToDecimal(event.params.assets))
    let shares = convertToDecimal(TenderizerContract.bind(event.address).convertToShares(event.params.assets))
    tenderizer.shares = tenderizer.shares.minus(shares)
    tenderizer.save()

    let stake = Stake.load(event.params.receiver.toHex().concat('-').concat(event.address.toHex()))
    if (stake == null) return
    stake.shares = stake.shares.minus(shares)

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

    tenderizer.tvl = convertToDecimal(event.params.newStake)

    let oldStake = convertToDecimal(event.params.oldStake)
    let newStake = convertToDecimal(event.params.newStake)
    if (newStake.gt(oldStake)) {
        asset.tvl = asset.tvl.plus(newStake.minus(oldStake))
    } else if (newStake.lt(oldStake)) {
        asset.tvl = asset.tvl.minus(oldStake.minus(newStake))
    }

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

    asset.save()
    assetDay.save()
}