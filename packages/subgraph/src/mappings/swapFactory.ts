import { SwapDeployed as SwapDeployedEvent } from '../types/SwapFactory/SwapFactory'
import { SwapPool as SwapPoolSource, SwapPoolToken } from '../types/templates'
import { LPToken, SwapPool } from '../types/schema'
import { BD_ZERO, BI_ZERO } from './helpers'
import { TenderSwap } from '../types/templates/SwapPool/TenderSwap'

export function handleNewSwapPool(event: SwapDeployedEvent): void {
  SwapPoolSource.create(event.params.swap)
  let lpTokenAddr = TenderSwap.bind(event.params.swap).lpToken()
  let pool = new SwapPool(event.params.swap.toHex())
  pool.asset = event.params.underlying.toHex()
  pool.createdAtTimestamp = event.block.timestamp.toI32()
  pool.lpToken = lpTokenAddr.toHex()
  pool.totalSupply = BI_ZERO
  pool.liabilities = BI_ZERO
  pool.unlocking = BI_ZERO
  pool.volume = BI_ZERO
  pool.volumeUSD = BD_ZERO
  pool.fees = BI_ZERO
  pool.feesUSD = BD_ZERO
  pool.lpRewards = BI_ZERO
  pool.lpRewardsUSD = BD_ZERO
  pool.treasuryCut = BI_ZERO
  pool.treasuryCutUSD = BD_ZERO

  pool.save()

  let lpToken = new LPToken(lpTokenAddr.toHex())
  lpToken.pool = pool.id
  lpToken.save()

  SwapPoolToken.create(lpTokenAddr)
}
