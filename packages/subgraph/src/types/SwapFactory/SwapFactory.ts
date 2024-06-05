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

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SwapDeployed extends ethereum.Event {
  get params(): SwapDeployed__Params {
    return new SwapDeployed__Params(this);
  }
}

export class SwapDeployed__Params {
  _event: SwapDeployed;

  constructor(event: SwapDeployed) {
    this._event = event;
  }

  get underlying(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get swap(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get implementation(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SwapUpgraded extends ethereum.Event {
  get params(): SwapUpgraded__Params {
    return new SwapUpgraded__Params(this);
  }
}

export class SwapUpgraded__Params {
  _event: SwapUpgraded;

  constructor(event: SwapUpgraded) {
    this._event = event;
  }

  get underlying(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get swap(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get implementation(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SwapFactory extends ethereum.SmartContract {
  static bind(address: Address): SwapFactory {
    return new SwapFactory("SwapFactory", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployCall extends ethereum.Call {
  get inputs(): DeployCall__Inputs {
    return new DeployCall__Inputs(this);
  }

  get outputs(): DeployCall__Outputs {
    return new DeployCall__Outputs(this);
  }
}

export class DeployCall__Inputs {
  _call: DeployCall;

  constructor(call: DeployCall) {
    this._call = call;
  }

  get cfg(): DeployCallCfgStruct {
    return changetype<DeployCallCfgStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class DeployCall__Outputs {
  _call: DeployCall;

  constructor(call: DeployCall) {
    this._call = call;
  }
}

export class DeployCallCfgStruct extends ethereum.Tuple {
  get UNDERLYING(): Address {
    return this[0].toAddress();
  }

  get BASE_FEE(): BigInt {
    return this[1].toBigInt();
  }

  get K(): BigInt {
    return this[2].toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeCall extends ethereum.Call {
  get inputs(): UpgradeCall__Inputs {
    return new UpgradeCall__Inputs(this);
  }

  get outputs(): UpgradeCall__Outputs {
    return new UpgradeCall__Outputs(this);
  }
}

export class UpgradeCall__Inputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }

  get cfg(): UpgradeCallCfgStruct {
    return changetype<UpgradeCallCfgStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get swapProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpgradeCall__Outputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }
}

export class UpgradeCallCfgStruct extends ethereum.Tuple {
  get UNDERLYING(): Address {
    return this[0].toAddress();
  }

  get BASE_FEE(): BigInt {
    return this[1].toBigInt();
  }

  get K(): BigInt {
    return this[2].toBigInt();
  }
}
