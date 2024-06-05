// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get receiver(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get assetsIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get tTokenOut(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Rebase extends ethereum.Event {
  get params(): Rebase__Params {
    return new Rebase__Params(this);
  }
}

export class Rebase__Params {
  _event: Rebase;

  constructor(event: Rebase) {
    this._event = event;
  }

  get oldStake(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newStake(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Unlock extends ethereum.Event {
  get params(): Unlock__Params {
    return new Unlock__Params(this);
  }
}

export class Unlock__Params {
  _event: Unlock;

  constructor(event: Unlock) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assets(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get unlockID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assets(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get unlockID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Tenderizer extends ethereum.SmartContract {
  static bind(address: Address): Tenderizer {
    return new Tenderizer("Tenderizer", address);
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _previewDeposit(assets: BigInt): BigInt {
    let result = super.call(
      "_previewDeposit",
      "_previewDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );

    return result[0].toBigInt();
  }

  try__previewDeposit(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_previewDeposit",
      "_previewDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _previewWithdraw(unlockID: BigInt): BigInt {
    let result = super.call(
      "_previewWithdraw",
      "_previewWithdraw(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );

    return result[0].toBigInt();
  }

  try__previewWithdraw(unlockID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_previewWithdraw",
      "_previewWithdraw(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  _unlockMaturity(unlockID: BigInt): BigInt {
    let result = super.call(
      "_unlockMaturity",
      "_unlockMaturity(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );

    return result[0].toBigInt();
  }

  try__unlockMaturity(unlockID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "_unlockMaturity",
      "_unlockMaturity(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowance(owner: Address, spender: Address): BigInt {
    let result = super.call(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );

    return result[0].toBigInt();
  }

  try_allowance(owner: Address, spender: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "allowance",
      "allowance(address,address):(uint256)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(spender)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approve(spender: Address, amount: BigInt): boolean {
    let result = super.call("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_approve(spender: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("approve", "approve(address,uint256):(bool)", [
      ethereum.Value.fromAddress(spender),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  asset(): Address {
    let result = super.call("asset", "asset():(address)", []);

    return result[0].toAddress();
  }

  try_asset(): ethereum.CallResult<Address> {
    let result = super.tryCall("asset", "asset():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  convertToAssets(shares: BigInt): BigInt {
    let result = super.call(
      "convertToAssets",
      "convertToAssets(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );

    return result[0].toBigInt();
  }

  try_convertToAssets(shares: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "convertToAssets",
      "convertToAssets(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(shares)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  convertToShares(assets: BigInt): BigInt {
    let result = super.call(
      "convertToShares",
      "convertToShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );

    return result[0].toBigInt();
  }

  try_convertToShares(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "convertToShares",
      "convertToShares(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  deposit(receiver: Address, assets: BigInt): BigInt {
    let result = super.call("deposit", "deposit(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(receiver),
      ethereum.Value.fromUnsignedBigInt(assets)
    ]);

    return result[0].toBigInt();
  }

  try_deposit(receiver: Address, assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deposit",
      "deposit(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(assets)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  nonces(owner: Address): BigInt {
    let result = super.call("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_nonces(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nonces", "nonces(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  previewDeposit(assets: BigInt): BigInt {
    let result = super.call(
      "previewDeposit",
      "previewDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );

    return result[0].toBigInt();
  }

  try_previewDeposit(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "previewDeposit",
      "previewDeposit(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(assets)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  previewWithdraw(unlockID: BigInt): BigInt {
    let result = super.call(
      "previewWithdraw",
      "previewWithdraw(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );

    return result[0].toBigInt();
  }

  try_previewWithdraw(unlockID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "previewWithdraw",
      "previewWithdraw(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  transfer(to: Address, amount: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(to: Address, amount: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferFrom(from: Address, to: Address, amount: BigInt): boolean {
    let result = super.call(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBoolean();
  }

  try_transferFrom(
    from: Address,
    to: Address,
    amount: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferFrom",
      "transferFrom(address,address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  unlock(assets: BigInt): BigInt {
    let result = super.call("unlock", "unlock(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(assets)
    ]);

    return result[0].toBigInt();
  }

  try_unlock(assets: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("unlock", "unlock(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(assets)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unlockMaturity(unlockID: BigInt): BigInt {
    let result = super.call(
      "unlockMaturity",
      "unlockMaturity(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );

    return result[0].toBigInt();
  }

  try_unlockMaturity(unlockID: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "unlockMaturity",
      "unlockMaturity(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(unlockID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  validator(): Address {
    let result = super.call("validator", "validator():(address)", []);

    return result[0].toAddress();
  }

  try_validator(): ethereum.CallResult<Address> {
    let result = super.tryCall("validator", "validator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  withdraw(receiver: Address, unlockID: BigInt): BigInt {
    let result = super.call("withdraw", "withdraw(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(receiver),
      ethereum.Value.fromUnsignedBigInt(unlockID)
    ]);

    return result[0].toBigInt();
  }

  try_withdraw(
    receiver: Address,
    unlockID: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdraw",
      "withdraw(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(receiver),
        ethereum.Value.fromUnsignedBigInt(unlockID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _registry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _unlocks(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class _previewDepositCall extends ethereum.Call {
  get inputs(): _previewDepositCall__Inputs {
    return new _previewDepositCall__Inputs(this);
  }

  get outputs(): _previewDepositCall__Outputs {
    return new _previewDepositCall__Outputs(this);
  }
}

export class _previewDepositCall__Inputs {
  _call: _previewDepositCall;

  constructor(call: _previewDepositCall) {
    this._call = call;
  }

  get assets(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class _previewDepositCall__Outputs {
  _call: _previewDepositCall;

  constructor(call: _previewDepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _previewWithdrawCall extends ethereum.Call {
  get inputs(): _previewWithdrawCall__Inputs {
    return new _previewWithdrawCall__Inputs(this);
  }

  get outputs(): _previewWithdrawCall__Outputs {
    return new _previewWithdrawCall__Outputs(this);
  }
}

export class _previewWithdrawCall__Inputs {
  _call: _previewWithdrawCall;

  constructor(call: _previewWithdrawCall) {
    this._call = call;
  }

  get unlockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class _previewWithdrawCall__Outputs {
  _call: _previewWithdrawCall;

  constructor(call: _previewWithdrawCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class _unlockMaturityCall extends ethereum.Call {
  get inputs(): _unlockMaturityCall__Inputs {
    return new _unlockMaturityCall__Inputs(this);
  }

  get outputs(): _unlockMaturityCall__Outputs {
    return new _unlockMaturityCall__Outputs(this);
  }
}

export class _unlockMaturityCall__Inputs {
  _call: _unlockMaturityCall;

  constructor(call: _unlockMaturityCall) {
    this._call = call;
  }

  get unlockID(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class _unlockMaturityCall__Outputs {
  _call: _unlockMaturityCall;

  constructor(call: _unlockMaturityCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get assets(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class PermitCall extends ethereum.Call {
  get inputs(): PermitCall__Inputs {
    return new PermitCall__Inputs(this);
  }

  get outputs(): PermitCall__Outputs {
    return new PermitCall__Outputs(this);
  }
}

export class PermitCall__Inputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }

  get owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class PermitCall__Outputs {
  _call: PermitCall;

  constructor(call: PermitCall) {
    this._call = call;
  }
}

export class RebaseCall extends ethereum.Call {
  get inputs(): RebaseCall__Inputs {
    return new RebaseCall__Inputs(this);
  }

  get outputs(): RebaseCall__Outputs {
    return new RebaseCall__Outputs(this);
  }
}

export class RebaseCall__Inputs {
  _call: RebaseCall;

  constructor(call: RebaseCall) {
    this._call = call;
  }
}

export class RebaseCall__Outputs {
  _call: RebaseCall;

  constructor(call: RebaseCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class UnlockCall extends ethereum.Call {
  get inputs(): UnlockCall__Inputs {
    return new UnlockCall__Inputs(this);
  }

  get outputs(): UnlockCall__Outputs {
    return new UnlockCall__Outputs(this);
  }
}

export class UnlockCall__Inputs {
  _call: UnlockCall;

  constructor(call: UnlockCall) {
    this._call = call;
  }

  get assets(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnlockCall__Outputs {
  _call: UnlockCall;

  constructor(call: UnlockCall) {
    this._call = call;
  }

  get unlockID(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get unlockID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}