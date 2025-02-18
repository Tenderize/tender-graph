import { Unlock, User } from '../types/schema'
import { Transfer as UnlockTransferEvent } from '../types/Unlocks/Unlocks'
import { ADDRESS_ZERO, decodeTokenId } from './helpers'

export function handleUnlockTransfer(event: UnlockTransferEvent): void {
  if (event.params.from === ADDRESS_ZERO) return

  const decoded = decodeTokenId(event.params.id)
  const idAsString = decoded.id.toString()
  let unlockID = decoded.tenderizer.concat('0'.repeat(24 - idAsString.length).concat(idAsString))

  let u = Unlock.load(unlockID)
  if (u == null) return
  let receiver = event.params.to.toHex()
  let user = User.load(receiver)
  if (user == null) {
    user = new User(receiver)
    user.save()
  }

  u.user = receiver
  u.save()
}
