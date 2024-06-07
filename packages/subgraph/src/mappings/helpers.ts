import { BigDecimal, BigInt, Address, ByteArray, Bytes, ethereum, log } from '@graphprotocol/graph-ts'
import { UniswapQuoter } from '../types/templates/SwapPool/UniswapQuoter'

export const ADDRESS_ZERO = Address.fromString('0x0000000000000000000000000000000000000000')

export const BD_ZERO = BigDecimal.fromString('0')
export const BI_ZERO = BigInt.fromI32(0)
export const BI_ONE = BigInt.fromI32(1)
export const BD_ONE = BigDecimal.fromString('1')
export const BI_18 = BigInt.fromI32(18)
export const TEN_18 = BigInt.fromU32(10).pow(18)
export const TEN_6 = BigInt.fromU32(10).pow(6)
export const TEN_24 = TEN_18.times(TEN_6) // 18 decimals for normal tokens and 6 decimals for USDC

export const MATIC = Address.fromString('0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0')
export const GRT = Address.fromString('0x9623063377AD1B27544C965cCd7342f7EA7e88C7')
export const LPT = Address.fromString('0x289ba1701C2F088cf0faf8B3705246331cB8A839')

export const QUOTER = Address.fromString('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6')
export const WETH9_ARBITRUM = Address.fromString('0x82aF49447D8a07e3bd95BD0d56f35241523fBab1')
export const USDC_ARBITRUM = Address.fromString('0xaf88d065e77c8cC2239327C5EDb3A432268e5831')
export const USDC_MAINNET = Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')


export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = BI_ZERO; i.lt(decimals as BigInt); i = i.plus(BI_ONE)) {
    bd = bd.times(BigDecimal.fromString('10'))
  }
  return bd
}

export function convertToDecimal(eth: BigInt): BigDecimal {
  return eth.toBigDecimal().div(exponentToBigDecimal(BI_18))
}

export const calculateDayID = (timestamp: BigInt): BigInt => {
  return timestamp.div(BigInt.fromI32(86400)).times(BigInt.fromI32(86400))
}

export const maticUsd = (): BigDecimal => {
  const quoter = UniswapQuoter.bind(QUOTER)
  const maticUsd = quoter.try_quoteExactInputSingle(
    MATIC,
    USDC_MAINNET,
    3000,
    TEN_18,
    BI_ZERO
  )
  if (maticUsd.reverted) return BD_ZERO

  return maticUsd.value.toBigDecimal().div(TEN_6.toBigDecimal())
}

export const grtUsd = (): BigDecimal => {
  const quoter = UniswapQuoter.bind(QUOTER)
  const grtEth = quoter.try_quoteExactInputSingle(
    GRT,
    WETH9_ARBITRUM,
    3000,
    TEN_18,
    BI_ZERO
  )
  if (grtEth.reverted) return BD_ZERO

  const ethUsdc = quoter.try_quoteExactInputSingle(
    WETH9_ARBITRUM,
    USDC_ARBITRUM,
    500,
    TEN_18,
    BI_ZERO
  )

  return grtEth.value.toBigDecimal().times(ethUsdc.value.toBigDecimal()).div(TEN_24.toBigDecimal())
}

export const lptUsd = (): BigDecimal => {
  const quoter = UniswapQuoter.bind(QUOTER)
  const lptEth = quoter.try_quoteExactInputSingle(
    LPT,
    WETH9_ARBITRUM,
    3000,
    TEN_18,
    BI_ZERO
  )
  if (lptEth.reverted) return BD_ZERO

  const ethUsdc = quoter.try_quoteExactInputSingle(
    WETH9_ARBITRUM,
    USDC_ARBITRUM,
    500,
    TEN_18,
    BI_ZERO
  )

  return lptEth.value.toBigDecimal().times(ethUsdc.value.toBigDecimal()).div(TEN_24.toBigDecimal())
}

export const getUsdPrice = (token: Address): BigDecimal => {
  if (token == MATIC) return maticUsd()
  if (token == GRT) return grtUsd()
  if (token == LPT) return lptUsd()
  return BD_ZERO
}
// Define the return type
class DecodedTokenId {
  tenderizer: string;
  id: BigInt;

  constructor(tenderizer: string, id: BigInt) {
    this.tenderizer = tenderizer;
    this.id = id;
  }
}

export const decodeTokenId = (tokenId: BigInt): DecodedTokenId => {
  let hexId = tokenId.toHexString()
  let address = "0x" + hexId.substring(0, 20)
  let uint96 = BigInt.fromUnsignedBytes(Bytes.fromHexString(hexId.substring(20, 32)))

  // Return the decoded values
  return new DecodedTokenId(address, uint96);
}
