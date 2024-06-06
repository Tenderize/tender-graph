
import { Unlock } from "../types/schema";
import { Transfer as UnlockTransferEvent } from "../types/Unlocks/Unlocks";
import { decodeTokenId } from "./helpers";

export function handleUnlockTransfer(event: UnlockTransferEvent): void {

    const decoded = decodeTokenId(event.params.id)
    const idAsString = decoded.id.toString()
    let unlockID = decoded.tenderizer.toHex().concat('0'.repeat(24 - idAsString.length).concat(idAsString))

    let u = Unlock.load(unlockID);
    if (u == null) return;
    u.user = event.params.to.toHex();
    u.save();
}