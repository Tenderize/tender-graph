import { SwapPool, SwapPoolDay } from '../types/schema'
import { Deposit as DepositEmitted, Withdraw as WithdrawEmitted, Swap as SwapEmitted, UnlockBought as UnlockBoughtEmitted, UnlockRedeemed as UnlockRedeemedEmitted } from '../types/templates/SwapPool/TenderSwap'
import { Address, BigInt } from '@graphprotocol/graph-ts';
import { BI_ZERO, BD_ZERO, getUsdPrice, calculateDayID, TEN_18, convertToDecimal } from './helpers';

const initiatePoolDay = (pool: SwapPool, dayID: BigInt): SwapPoolDay => {
    const poolDay = new SwapPoolDay(pool.id.concat('-').concat(dayID.toString()))

    poolDay.date = dayID.toI32()
    poolDay.pool = pool.id

    poolDay.totalSupply = pool.totalSupply
    poolDay.liabilities = pool.liabilities
    poolDay.unlocking = pool.unlocking

    poolDay.volume = BI_ZERO
    poolDay.volumeUSD = BD_ZERO
    poolDay.fees = BI_ZERO
    poolDay.feesUSD = BD_ZERO
    poolDay.lpRewards = BI_ZERO
    poolDay.lpRewardsUSD = BD_ZERO
    poolDay.treasuryCut = BI_ZERO
    poolDay.treasuryCutUSD = BD_ZERO

    return poolDay
}


export function handleSwap(event: SwapEmitted): void {
    let pool = SwapPool.load(event.address.toHex())
    if (pool == null) return;

    const usdPrice = getUsdPrice(Address.fromString(pool.asset))

    const amountInUSD = usdPrice.times(convertToDecimal(event.params.amountIn))
    const feeInUSD = usdPrice.times(convertToDecimal(event.params.fee))

    pool.unlocking = pool.unlocking.plus(event.params.amountIn)
    pool.volume = pool.volume.plus(event.params.amountIn)
    pool.volumeUSD = pool.volumeUSD.plus(amountInUSD)
    pool.fees = pool.fees.plus(event.params.fee)
    pool.feesUSD = pool.feesUSD.plus(feeInUSD)

    let dayID = calculateDayID(event.block.timestamp)
    let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
    if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
    poolDay.volume = poolDay.volume.plus(event.params.amountIn)
    poolDay.volumeUSD = poolDay.volumeUSD.plus(amountInUSD)
    poolDay.fees = poolDay.fees.plus(event.params.fee)
    poolDay.feesUSD = poolDay.feesUSD.plus(feeInUSD)

    poolDay.save()
    pool.save()
}

export function handleSwapUnlockBought(event: UnlockBoughtEmitted): void {
    let pool = SwapPool.load(event.address.toHex())
    if (pool == null) return;

    const usdPrice = getUsdPrice(Address.fromString(pool.asset))
    const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees))
    const treasuryCut = event.params.amount.minus(event.params.lpFees).minus(event.params.reward)
    const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut))

    pool.unlocking = pool.unlocking.minus(event.params.amount)
    pool.lpRewards = pool.lpRewards.plus(event.params.lpFees)
    pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD)
    pool.treasuryCut = pool.treasuryCut.plus(treasuryCut)
    pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD)
    let dayID = calculateDayID(event.block.timestamp)
    let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
    if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
    poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees)
    poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD)
    poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut)
    poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD)

    poolDay.save()
    pool.save()
}

export function handleSwapUnlockRedeemed(event: UnlockRedeemedEmitted): void {
    let pool = SwapPool.load(event.address.toHex())
    if (pool == null) return;

    const usdPrice = getUsdPrice(Address.fromString(pool.asset))
    const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees))

    const treasuryCut = event.params.amount.minus(event.params.lpFees).minus(event.params.reward)
    const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut))

    pool.unlocking = pool.unlocking.minus(event.params.amount)
    pool.lpRewards = pool.lpRewards.plus(event.params.lpFees)
    pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD)
    pool.treasuryCut = pool.treasuryCut.plus(treasuryCut)
    pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD)

    let dayID = calculateDayID(event.block.timestamp)
    let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
    if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);
    poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees)
    poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD)
    poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut)
    poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD)

    poolDay.save()
    pool.save()
}

export function handleSwapDeposit(event: DepositEmitted): void {
    let pool = SwapPool.load(event.address.toHex())
    if (pool == null) return;

    pool.totalSupply = pool.totalSupply.plus(event.params.lpSharesMinted)
    pool.liabilities = pool.liabilities.plus(event.params.amount)

    let dayID = calculateDayID(event.block.timestamp)
    let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
    if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);

    poolDay.save()
    pool.save()
}

export function handleSwapWithdraw(event: WithdrawEmitted): void {
    let pool = SwapPool.load(event.address.toHex())
    if (pool == null) return;

    pool.totalSupply = pool.totalSupply.minus(event.params.lpSharesBurnt)
    pool.liabilities = pool.liabilities.minus(event.params.amount)

    let dayID = calculateDayID(event.block.timestamp)
    let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
    if (poolDay == null) poolDay = initiatePoolDay(pool, dayID);

    poolDay.save()
    pool.save()
}