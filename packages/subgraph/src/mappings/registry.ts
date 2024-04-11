import { Asset, Tenderizer } from '../types/schema'
import { NewTenderizer } from '../types/Registry/Registry'
import { ERC20 } from '../types/Registry/ERC20'
import { BigInt } from '@graphprotocol/graph-ts'
import { BD_ZERO } from './helpers'
import { Tenderizer as TenderizerContract } from '../types/templates'

export function handleNewTenderizer(event: NewTenderizer): void {
  let asset = Asset.load(event.params.asset.toHex())
  if (asset == null) {
    asset = new Asset(event.params.asset.toHex())
    asset.tvl = BD_ZERO
    asset.tenderizerCount = 0
  }

  asset.tenderizerCount = asset.tenderizerCount + 1
  asset.save()

  TenderizerContract.create(event.params.tenderizer)
  let tenderizer = new Tenderizer(event.params.tenderizer.toHex())
  tenderizer.asset = asset.id
  tenderizer.name = ERC20.bind(event.params.tenderizer).name()
  tenderizer.symbol = ERC20.bind(event.params.tenderizer).symbol()
  tenderizer.validator = event.params.validator.toHex()
  tenderizer.tvl = BD_ZERO
  tenderizer.shares = BD_ZERO
  tenderizer.apr = BD_ZERO
  tenderizer.apy = BD_ZERO
  tenderizer.lastUpdateDay = BigInt.fromI32(event.block.timestamp.toI32() / 86400)
  tenderizer.createdAt = event.block.timestamp.toI32()
  tenderizer.save()
}
