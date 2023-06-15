import { Asset, Tenderizer } from '../types/schema'
import { NewTenderizer } from '../types/Registry/Registry'
import { ERC20 } from '../types/Registry/ERC20'
import { BigDecimal } from '@graphprotocol/graph-ts'

export function handleNewTenderizer(event: NewTenderizer): void {
    let asset = Asset.load(event.params.asset.toHex())
    if (asset == null) {
        asset = new Asset(event.params.asset.toHex())
        asset.tvl = BigDecimal.fromString('0')
        asset.tenderizerCount = 0
    }

    asset.tenderizerCount = asset.tenderizerCount + 1
    asset.save()

    let tenderizer = new Tenderizer(event.params.tenderizer.toHex())
    tenderizer.asset = asset.id
    tenderizer.name = ERC20.bind(event.params.tenderizer).name()
    tenderizer.symbol = ERC20.bind(event.params.tenderizer).symbol()
    tenderizer.validator = event.params.validator.toHex()

    tenderizer.tvl = BigDecimal.fromString('0')
    tenderizer.save()
}
