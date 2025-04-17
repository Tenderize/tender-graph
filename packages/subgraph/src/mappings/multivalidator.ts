import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import {
  MultiValidatorDeposit as DepositEntity,
  MultiValidator,
  MultiValidatorUnstake as UnstakeEntity,
  User,
  MultiValidatorWithdraw as WithdrawEntity,
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
  let entity = new DepositEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.shares = event.params.shares
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleUnstake(event: Unstake): void {
  let entity = new UnstakeEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender
  entity.unstakeID = event.params.unstakeID
  entity.timestamp = event.block.timestamp
  entity.save()
  // Track unstake NFTs per user
  let userId = event.params.sender.toHex()
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.save()
  }

  let unstake = new UnstakeEntity(event.params.unstakeID.toString())
  unstake.user = user.id
  unstake.lst = event.address.toHex()
  unstake.claimed = false
  unstake.save()
}

export function handleWithdraw(event: Withdraw): void {
  let entity = new WithdrawEntity(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
  entity.sender = event.params.sender
  entity.unstakeID = event.params.unstakeID
  entity.amount = event.params.amount
  entity.timestamp = event.block.timestamp
  entity.save()
  let unstake = UnstakeEntity.load(event.params.unstakeID.toString())
  if (unstake) {
    unstake.claimed = true
    unstake.save()
  }
}
