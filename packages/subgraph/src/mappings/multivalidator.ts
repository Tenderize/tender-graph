import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import {
  MultiValidator,
  MultiValidatorDeposit,
  MultiValidatorUnstake,
  MultiValidatorWithdraw,
  User,
} from '../types/schema'
import {
  Deposit,
  Unstake,
  ValidatorAdded,
  ValidatorRemoved,
  WeightsUpdated,
  Withdraw,
} from '../types/templates/MultiValidatorLST/MultiValidatorLST'

export function handleValidatorAdded(event: ValidatorAdded): void {
  let id = event.params.id.toString()
  let validator = new MultiValidator(id)
  validator.tToken = event.params.tToken
  validator.target = event.params.target
  validator.balance = BigInt.zero()
  validator.save()
}

export function handleValidatorRemoved(event: ValidatorRemoved): void {
  let id = event.params.id.toString()
  let validator = MultiValidator.load(id)
  if (validator) {
    validator.target = BigInt.zero()
    validator.tToken = Bytes.empty()
    validator.balance = BigInt.zero()
    validator.save()
  }
}

export function handleWeightsUpdated(event: WeightsUpdated): void {
  let ids = event.params.ids
  let weights = event.params.weights
  for (let i = 0; i < ids.length; i++) {
    let id = ids[i].toString()
    let validator = MultiValidator.load(id)
    if (validator) {
      validator.target = weights[i]
      validator.save()
    }
  }
}

export function handleDeposit(event: Deposit): void {
  const id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  const deposit = new MultiValidatorDeposit(id)

  deposit.lst = event.address.toHex()
  deposit.sender = event.params.sender
  deposit.user = event.params.sender.toHex() // Assuming the sender is the user
  deposit.amount = event.params.amount
  deposit.shares = event.params.shares
  deposit.timestamp = event.block.timestamp

  deposit.save()
}

export function handleUnstake(event: Unstake): void {
  const id = event.address.toHex() + "." + event.params.unstakeID.toString()

  // Create or load user
  const userId = event.params.sender.toHex()
  let user = User.load(userId)
  if (user === null) {
    user = new User(userId)
    user.save()
  }

  // Create MultiValidatorUnstake entity
  const unstake = new MultiValidatorUnstake(id)
  unstake.user = user.id
  unstake.sender = event.params.sender
  unstake.amount = event.params.amount
  unstake.shares = event.params.shares
  unstake.unstakeID = event.params.unstakeID
  unstake.lst = event.address.toHex()
  unstake.timestamp = event.block.timestamp
  unstake.claimed = false

  unstake.save()
}

export function handleWithdraw(event: Withdraw): void {
  const id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()

  const withdraw = new MultiValidatorWithdraw(id)
  withdraw.lst = event.address.toHex()
  withdraw.sender = event.params.sender
  withdraw.user = event.params.sender.toHex() // Assuming the sender is the user
  withdraw.unstakeID = event.params.unstakeID
  withdraw.amount = event.params.amount
  withdraw.timestamp = event.block.timestamp
  withdraw.save()

  const unstakeId = event.address.toHex() + "." + event.params.unstakeID.toString()
  const unstake = MultiValidatorUnstake.load(unstakeId)

  if (unstake !== null) {
    unstake.claimed = true
    unstake.save()
  }
}
