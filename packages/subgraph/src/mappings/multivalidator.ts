import { BigInt, Bytes } from '@graphprotocol/graph-ts'

/// reomve this code once types will be auto genrated by the graph
/// ############################################
class DepositEntity {
  id: string
  sender: Bytes
  amount: BigInt
  shares: BigInt
  timestamp: BigInt

  constructor(id: string) {
    this.id = id
  }

  save(): void {
    // placeholder: The actual save is provided by The Graph runtime
  }

  static load(id: string): DepositEntity | null {
    return null // placeholder
  }
}

class UnstakeEntity {
  id: string
  sender: Bytes
  unstakeID: BigInt
  shares: BigInt
  amount: BigInt
  timestamp: BigInt

  constructor(id: string) {
    this.id = id
  }

  save(): void {}
  static load(id: string): UnstakeEntity | null {
    return null
  }
}

class WithdrawEntity {
  id: string
  sender: Bytes
  unstakeID: BigInt
  amount: BigInt
  timestamp: BigInt

  constructor(id: string) {
    this.id = id
  }

  save(): void {}
  static load(id: string): WithdrawEntity | null {
    return null
  }
}

class Validator {
  id: string
  tToken: Bytes
  target: BigInt
  balance: BigInt

  constructor(id: string) {
    this.id = id
    this.tToken = Bytes.empty()
    this.target = BigInt.zero()
    this.balance = BigInt.zero()
  }

  save(): void {}
  static load(id: string): Validator | null {
    return null
  }
}

class MultiValidatorUnstake {
  id: string
  user: string
  lst: string
  claimed: boolean

  constructor(id: string) {
    this.id = id
    this.claimed = false
  }

  save(): void {}
  static load(id: string): MultiValidatorUnstake | null {
    return null
  }
}

class User {
  id: string

  constructor(id: string) {
    this.id = id
  }

  save(): void {}
  static load(id: string): User | null {
    return null
  }
}

/// TODO: fix types for these events
type ValidatorAdded = any
type ValidatorRemoved = any
type WeightsUpdated = any
type Deposit = any
type Unstake = any
type Withdraw = any
// ############################################

export function handleValidatorAdded(event: ValidatorAdded): void {
  let id = event.params.id.toString()
  let validator = new Validator(id)
  validator.tToken = event.params.tToken
  validator.target = event.params.target
  validator.balance = BigInt.zero()
  validator.save()
}

export function handleValidatorRemoved(event: ValidatorRemoved): void {
  let id = event.params.id.toString()
  let validator = Validator.load(id)
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
    let validator = Validator.load(id)
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
  entity.shares = event.params.shares
  entity.amount = event.params.amount
  entity.timestamp = event.block.timestamp
  entity.save()
  // Track unstake NFTs per user
  let userId = event.params.sender.toHex()
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.save()
  }

  let unstake = new MultiValidatorUnstake(event.params.unstakeID.toString())
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
  let unstake = MultiValidatorUnstake.load(event.params.unstakeID.toString())
  if (unstake) {
    unstake.claimed = true
    unstake.save()
  }
}
