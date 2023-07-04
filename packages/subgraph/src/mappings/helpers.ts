import { BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export let BI_ZERO = BigInt.fromI32(0)
export let BI_ONE = BigInt.fromI32(1)
export let BD_ZERO = BigDecimal.fromString('0')
export let BD_ONE = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

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
