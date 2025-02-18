import {
  SwapPool,
  SwapPoolDay,
  LiquidityPosition,
  User,
  SwapWithdrawEvent,
  SwapDepositEvent,
  SwapEvent,
  SwapUnlockBuyEvent,
  SwapLPTokenTransferEvent,
  LPToken,
} from '../types/schema'
import {
  Deposit as DepositEmitted,
  Withdraw as WithdrawEmitted,
  Swap as SwapEmitted,
  UnlockBought as UnlockBoughtEmitted,
  UnlockRedeemed as UnlockRedeemedEmitted,
} from '../types/templates/SwapPool/TenderSwap'
import { Transfer as SwapTokenTransferEmitted } from '../types/templates/SwapPoolToken/ERC20'
import { Address, BigInt } from '@graphprotocol/graph-ts'
import { BI_ZERO, BD_ZERO, getUsdPrice, calculateDayID, TEN_18, convertToDecimal } from './helpers'
import { log } from '@graphprotocol/graph-ts'

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
  if (pool == null) return

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
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID)
  poolDay.volume = poolDay.volume.plus(event.params.amountIn)
  poolDay.volumeUSD = poolDay.volumeUSD.plus(amountInUSD)
  poolDay.fees = poolDay.fees.plus(event.params.fee)
  poolDay.feesUSD = poolDay.feesUSD.plus(feeInUSD)

  poolDay.save()
  pool.save()

  let swapEvent = new SwapEvent(event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString()))
  swapEvent.timestamp = event.block.timestamp.toI32()
  swapEvent.blockNumber = event.block.number
  swapEvent.account = event.params.caller.toHex()
  swapEvent.amount = event.params.amountIn
  swapEvent.fee = event.params.fee
  swapEvent.SwapPool = pool.id
  swapEvent.save()
}

export function handleSwapUnlockBought(event: UnlockBoughtEmitted): void {
  let pool = SwapPool.load(event.address.toHex())
  if (pool == null) return

  const usdPrice = getUsdPrice(Address.fromString(pool.asset))
  const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees))
  const treasuryCut = event.params.amount.minus(event.params.lpFees).minus(event.params.reward)
  const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut))

  pool.unlocking = pool.unlocking.minus(event.params.amount)
  pool.lpRewards = pool.lpRewards.plus(event.params.lpFees)
  pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD)
  pool.treasuryCut = pool.treasuryCut.plus(treasuryCut)
  pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD)
  pool.liabilities = pool.liabilities.plus(event.params.lpFees)
  let dayID = calculateDayID(event.block.timestamp)
  let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID)
  poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees)
  poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD)
  poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut)
  poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD)
  poolDay.liabilities = poolDay.liabilities.plus(event.params.lpFees)
  poolDay.save()
  pool.save()
}

export function handleSwapUnlockRedeemed(event: UnlockRedeemedEmitted): void {
  let pool = SwapPool.load(event.address.toHex())
  if (pool == null) return

  const usdPrice = getUsdPrice(Address.fromString(pool.asset))
  const lpRewardsInUSD = usdPrice.times(convertToDecimal(event.params.lpFees))

  const treasuryCut = event.params.amount.minus(event.params.lpFees).minus(event.params.reward)
  const treasuryCutInUSD = usdPrice.times(convertToDecimal(treasuryCut))

  pool.unlocking = pool.unlocking.minus(event.params.amount)
  pool.lpRewards = pool.lpRewards.plus(event.params.lpFees)
  pool.lpRewardsUSD = pool.lpRewardsUSD.plus(lpRewardsInUSD)
  pool.treasuryCut = pool.treasuryCut.plus(treasuryCut)
  pool.treasuryCutUSD = pool.treasuryCutUSD.plus(treasuryCutInUSD)
  pool.liabilities = pool.liabilities.plus(event.params.lpFees)
  let dayID = calculateDayID(event.block.timestamp)
  let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID)
  poolDay.lpRewards = poolDay.lpRewards.plus(event.params.lpFees)
  poolDay.lpRewardsUSD = poolDay.lpRewardsUSD.plus(lpRewardsInUSD)
  poolDay.treasuryCut = poolDay.treasuryCut.plus(treasuryCut)
  poolDay.treasuryCutUSD = poolDay.treasuryCutUSD.plus(treasuryCutInUSD)
  poolDay.liabilities = poolDay.liabilities.plus(event.params.lpFees)
  poolDay.save()
  pool.save()
}

export function handleSwapDeposit(event: DepositEmitted): void {
  let pool = SwapPool.load(event.address.toHex())
  if (pool == null) return

  pool.totalSupply = pool.totalSupply.plus(event.params.lpSharesMinted)
  pool.liabilities = pool.liabilities.plus(event.params.amount)

  let dayID = calculateDayID(event.block.timestamp)
  let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID)

  let from = event.params.from.toHex()
  let user = User.load(from)
  if (user == null) {
    user = new User(from)
    user.save()
  }

  let lp = LiquidityPosition.load(from.concat('-').concat(pool.id))
  if (lp == null) {
    lp = new LiquidityPosition(from.concat('-').concat(pool.id))
    lp.user = from
    lp.pool = pool.id
    lp.shares = BI_ZERO
    lp.netDeposits = BI_ZERO
  }
  lp.shares = lp.shares.plus(event.params.lpSharesMinted)
  lp.netDeposits = lp.netDeposits.plus(event.params.amount)
  lp.save()

  poolDay.save()
  pool.save()

  let depositEvent = new SwapDepositEvent(event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString()))
  depositEvent.timestamp = event.block.timestamp.toI32()
  depositEvent.blockNumber = event.block.number
  depositEvent.account = from
  depositEvent.amount = event.params.amount
  depositEvent.sharesMinted = event.params.lpSharesMinted
  depositEvent.SwapPool = pool.id
  depositEvent.save()
}

export function handleSwapWithdraw(event: WithdrawEmitted): void {
  let pool = SwapPool.load(event.address.toHex())
  if (pool == null) return

  let totalSupply = pool.totalSupply
  pool.totalSupply = pool.totalSupply.minus(event.params.lpSharesBurnt)
  pool.liabilities = pool.liabilities.minus(event.params.amount)
  let user = event.params.to.toHex()
  let lp = LiquidityPosition.load(user.concat('-').concat(pool.id))
  if (lp == null) {
    log.debug('Liquidity Position not found with id: {}', [user.concat('-').concat(pool.id)])
  } else {
    let bal = lp.shares.times(pool.liabilities).div(totalSupply)
    let amount = event.params.amount
    if (bal.minus(lp.netDeposits).lt(amount)) {
      // if rewards less than amount, set net deposits
      // to balance minus what wasnt subtracted from the rewards
      lp.netDeposits = bal.minus(amount)
    }
    lp.shares = lp.shares.minus(event.params.lpSharesBurnt)
    lp.save()
  }

  let dayID = calculateDayID(event.block.timestamp)
  let poolDay = SwapPoolDay.load(pool.id.concat('-').concat(dayID.toString()))
  if (poolDay == null) poolDay = initiatePoolDay(pool, dayID)

  poolDay.save()
  pool.save()

  let withdrawEvent = new SwapWithdrawEvent(
    event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString())
  )
  withdrawEvent.timestamp = event.block.timestamp.toI32()
  withdrawEvent.blockNumber = event.block.number
  withdrawEvent.account = user
  withdrawEvent.amount = event.params.amount
  withdrawEvent.sharesBurnt = event.params.lpSharesBurnt
  withdrawEvent.SwapPool = pool.id
  withdrawEvent.save()
}

export function handleSwapTokenTransfer(event: SwapTokenTransferEmitted): void {
  log.debug('Swap Token Transfer Event: {}', [event.transaction.hash.toHex()])
  // burn
  if (event.params.to.toHex() == '0x0000000000000000000000000000000000000000') return
  // mint
  if (event.params.from.toHex() == '0x0000000000000000000000000000000000000000') return

  let lpToken = LPToken.load(event.address.toHex())
  if (lpToken == null) return

  let pool = SwapPool.load(lpToken.pool)
  if (pool == null) return

  let from = event.params.from.toHex()
  let to = event.params.to.toHex()
  let toUser = User.load(to)
  if (toUser == null) {
    toUser = new User(to)
    toUser.save()
  }

  let lpTo = LiquidityPosition.load(to.concat('-').concat(pool.id))
  if (lpTo == null) {
    lpTo = new LiquidityPosition(to.concat('-').concat(pool.id))
    lpTo.user = to
    lpTo.pool = pool.id
    lpTo.shares = BI_ZERO
    lpTo.netDeposits = BI_ZERO
  }
  lpTo.shares = lpTo.shares.plus(event.params.value)

  let value = event.params.value.times(pool.liabilities).div(pool.totalSupply)
  lpTo.netDeposits = value
  lpTo.save()

  let transfer = new SwapLPTokenTransferEvent(
    event.transaction.hash.toHex().concat('-').concat(event.logIndex.toString())
  )
  transfer.timestamp = event.block.timestamp.toI32()
  transfer.blockNumber = event.block.number
  transfer.from = from
  transfer.to = to
  transfer.value = value
  transfer.shares = event.params.value
  transfer.SwapPool = pool.id
  transfer.save()

  let lp = LiquidityPosition.load(from.concat('-').concat(pool.id))
  if (lp != null) {
    lp.shares = lp.shares.minus(event.params.value)
    let totalSupply = pool.totalSupply
    let bal = lp.shares.times(pool.liabilities).div(totalSupply)
    if (bal.minus(lp.netDeposits).lt(value)) {
      // if rewards less than amount, set net deposits
      // to balance minus what wasnt subtracted from the rewards
      let remainder = value.minus(bal.minus(lp.netDeposits))
      if (remainder.lt(lp.netDeposits)) {
        lp.netDeposits = bal.minus(remainder)
      } else {
        lp.netDeposits = BI_ZERO
      }
    }
    lp.save()
  }
}
