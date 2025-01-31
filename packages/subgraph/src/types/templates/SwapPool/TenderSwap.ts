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

export class AdminChanged extends ethereum.Event {
  get params(): AdminChanged__Params {
    return new AdminChanged__Params(this);
  }
}

export class AdminChanged__Params {
  _event: AdminChanged;

  constructor(event: AdminChanged) {
    this._event = event;
  }

  get previousAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAdmin(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class BeaconUpgraded extends ethereum.Event {
  get params(): BeaconUpgraded__Params {
    return new BeaconUpgraded__Params(this);
  }
}

export class BeaconUpgraded__Params {
  _event: BeaconUpgraded;

  constructor(event: BeaconUpgraded) {
    this._event = event;
  }

  get beacon(): Address {
    return this._event.parameters[0].value.toAddress();
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

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lpSharesMinted(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

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

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RelayerRewardsClaimed extends ethereum.Event {
  get params(): RelayerRewardsClaimed__Params {
    return new RelayerRewardsClaimed__Params(this);
  }
}

export class RelayerRewardsClaimed__Params {
  _event: RelayerRewardsClaimed;

  constructor(event: RelayerRewardsClaimed) {
    this._event = event;
  }

  get relayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get rewards(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get asset(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get unlockId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class UnlockBought extends ethereum.Event {
  get params(): UnlockBought__Params {
    return new UnlockBought__Params(this);
  }
}

export class UnlockBought__Params {
  _event: UnlockBought;

  constructor(event: UnlockBought) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lpFees(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class UnlockRedeemed extends ethereum.Event {
  get params(): UnlockRedeemed__Params {
    return new UnlockRedeemed__Params(this);
  }
}

export class UnlockRedeemed__Params {
  _event: UnlockRedeemed;

  constructor(event: UnlockRedeemed) {
    this._event = event;
  }

  get relayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lpFees(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class Upgraded extends ethereum.Event {
  get params(): Upgraded__Params {
    return new Upgraded__Params(this);
  }
}

export class Upgraded__Params {
  _event: Upgraded;

  constructor(event: Upgraded) {
    this._event = event;
  }

  get implementation(): Address {
    return this._event.parameters[0].value.toAddress();
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

  get to(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lpSharesBurnt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TenderSwap__newestUnlockResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get fee(): BigInt {
    return this[2].toBigInt();
  }

  get maturity(): BigInt {
    return this[3].toBigInt();
  }
}

export class TenderSwap__oldestUnlockResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }

  get fee(): BigInt {
    return this[2].toBigInt();
  }

  get maturity(): BigInt {
    return this[3].toBigInt();
  }
}

export class TenderSwap__quoteResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOut(): BigInt {
    return this.value0;
  }

  getFee(): BigInt {
    return this.value1;
  }
}

export class TenderSwap__swapResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getOut(): BigInt {
    return this.value0;
  }

  getFee(): BigInt {
    return this.value1;
  }
}

export class TenderSwap extends ethereum.SmartContract {
  static bind(address: Address): TenderSwap {
    return new TenderSwap("TenderSwap", address);
  }

  BASE_FEE(): BigInt {
    let result = super.call("BASE_FEE", "BASE_FEE():(uint256)", []);

    return result[0].toBigInt();
  }

  try_BASE_FEE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("BASE_FEE", "BASE_FEE():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  K(): BigInt {
    let result = super.call("K", "K():(uint256)", []);

    return result[0].toBigInt();
  }

  try_K(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("K", "K():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_LP_CUT(): BigInt {
    let result = super.call("MIN_LP_CUT", "MIN_LP_CUT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_LP_CUT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_LP_CUT", "MIN_LP_CUT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  RELAYER_CUT(): BigInt {
    let result = super.call("RELAYER_CUT", "RELAYER_CUT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_RELAYER_CUT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("RELAYER_CUT", "RELAYER_CUT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TREASURY_CUT(): BigInt {
    let result = super.call("TREASURY_CUT", "TREASURY_CUT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TREASURY_CUT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("TREASURY_CUT", "TREASURY_CUT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  UNDERLYING(): Address {
    let result = super.call("UNDERLYING", "UNDERLYING():(address)", []);

    return result[0].toAddress();
  }

  try_UNDERLYING(): ethereum.CallResult<Address> {
    let result = super.tryCall("UNDERLYING", "UNDERLYING():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  buyUnlock(): BigInt {
    let result = super.call("buyUnlock", "buyUnlock():(uint256)", []);

    return result[0].toBigInt();
  }

  try_buyUnlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("buyUnlock", "buyUnlock():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimRelayerRewards(): BigInt {
    let result = super.call(
      "claimRelayerRewards",
      "claimRelayerRewards():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_claimRelayerRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimRelayerRewards",
      "claimRelayerRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  claimTreasuryRewards(): BigInt {
    let result = super.call(
      "claimTreasuryRewards",
      "claimTreasuryRewards():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_claimTreasuryRewards(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "claimTreasuryRewards",
      "claimTreasuryRewards():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deposit(amount: BigInt, minLpShares: BigInt): BigInt {
    let result = super.call("deposit", "deposit(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(amount),
      ethereum.Value.fromUnsignedBigInt(minLpShares)
    ]);

    return result[0].toBigInt();
  }

  try_deposit(
    amount: BigInt,
    minLpShares: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "deposit",
      "deposit(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(minLpShares)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  liabilities(): BigInt {
    let result = super.call("liabilities", "liabilities():(uint256)", []);

    return result[0].toBigInt();
  }

  try_liabilities(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("liabilities", "liabilities():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  liquidity(): BigInt {
    let result = super.call("liquidity", "liquidity():(uint256)", []);

    return result[0].toBigInt();
  }

  try_liquidity(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("liquidity", "liquidity():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lpToken(): Address {
    let result = super.call("lpToken", "lpToken():(address)", []);

    return result[0].toAddress();
  }

  try_lpToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("lpToken", "lpToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  newestUnlock(): TenderSwap__newestUnlockResultValue0Struct {
    let result = super.call(
      "newestUnlock",
      "newestUnlock():((uint256,uint128,uint128,uint256))",
      []
    );

    return changetype<TenderSwap__newestUnlockResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_newestUnlock(): ethereum.CallResult<
    TenderSwap__newestUnlockResultValue0Struct
  > {
    let result = super.tryCall(
      "newestUnlock",
      "newestUnlock():((uint256,uint128,uint128,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TenderSwap__newestUnlockResultValue0Struct>(value[0].toTuple())
    );
  }

  oldestUnlock(): TenderSwap__oldestUnlockResultValue0Struct {
    let result = super.call(
      "oldestUnlock",
      "oldestUnlock():((uint256,uint128,uint128,uint256))",
      []
    );

    return changetype<TenderSwap__oldestUnlockResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_oldestUnlock(): ethereum.CallResult<
    TenderSwap__oldestUnlockResultValue0Struct
  > {
    let result = super.tryCall(
      "oldestUnlock",
      "oldestUnlock():((uint256,uint128,uint128,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TenderSwap__oldestUnlockResultValue0Struct>(value[0].toTuple())
    );
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  pendingRelayerRewards(relayer: Address): BigInt {
    let result = super.call(
      "pendingRelayerRewards",
      "pendingRelayerRewards(address):(uint256)",
      [ethereum.Value.fromAddress(relayer)]
    );

    return result[0].toBigInt();
  }

  try_pendingRelayerRewards(relayer: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingRelayerRewards",
      "pendingRelayerRewards(address):(uint256)",
      [ethereum.Value.fromAddress(relayer)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proxiableUUID(): Bytes {
    let result = super.call("proxiableUUID", "proxiableUUID():(bytes32)", []);

    return result[0].toBytes();
  }

  try_proxiableUUID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proxiableUUID",
      "proxiableUUID():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  quote(asset: Address, amount: BigInt): TenderSwap__quoteResult {
    let result = super.call(
      "quote",
      "quote(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return new TenderSwap__quoteResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_quote(
    asset: Address,
    amount: BigInt
  ): ethereum.CallResult<TenderSwap__quoteResult> {
    let result = super.tryCall(
      "quote",
      "quote(address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TenderSwap__quoteResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  swap(asset: Address, amount: BigInt, minOut: BigInt): TenderSwap__swapResult {
    let result = super.call(
      "swap",
      "swap(address,uint256,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(minOut)
      ]
    );

    return new TenderSwap__swapResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_swap(
    asset: Address,
    amount: BigInt,
    minOut: BigInt
  ): ethereum.CallResult<TenderSwap__swapResult> {
    let result = super.tryCall(
      "swap",
      "swap(address,uint256,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(asset),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(minOut)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TenderSwap__swapResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  utilisation(): BigInt {
    let result = super.call("utilisation", "utilisation():(uint256)", []);

    return result[0].toBigInt();
  }

  try_utilisation(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("utilisation", "utilisation():(uint256)", []);
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

  get config(): ConstructorCallConfigStruct {
    return changetype<ConstructorCallConfigStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCallConfigStruct extends ethereum.Tuple {
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

export class BuyUnlockCall extends ethereum.Call {
  get inputs(): BuyUnlockCall__Inputs {
    return new BuyUnlockCall__Inputs(this);
  }

  get outputs(): BuyUnlockCall__Outputs {
    return new BuyUnlockCall__Outputs(this);
  }
}

export class BuyUnlockCall__Inputs {
  _call: BuyUnlockCall;

  constructor(call: BuyUnlockCall) {
    this._call = call;
  }
}

export class BuyUnlockCall__Outputs {
  _call: BuyUnlockCall;

  constructor(call: BuyUnlockCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ClaimRelayerRewardsCall extends ethereum.Call {
  get inputs(): ClaimRelayerRewardsCall__Inputs {
    return new ClaimRelayerRewardsCall__Inputs(this);
  }

  get outputs(): ClaimRelayerRewardsCall__Outputs {
    return new ClaimRelayerRewardsCall__Outputs(this);
  }
}

export class ClaimRelayerRewardsCall__Inputs {
  _call: ClaimRelayerRewardsCall;

  constructor(call: ClaimRelayerRewardsCall) {
    this._call = call;
  }
}

export class ClaimRelayerRewardsCall__Outputs {
  _call: ClaimRelayerRewardsCall;

  constructor(call: ClaimRelayerRewardsCall) {
    this._call = call;
  }

  get relayerReward(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ClaimTreasuryRewardsCall extends ethereum.Call {
  get inputs(): ClaimTreasuryRewardsCall__Inputs {
    return new ClaimTreasuryRewardsCall__Inputs(this);
  }

  get outputs(): ClaimTreasuryRewardsCall__Outputs {
    return new ClaimTreasuryRewardsCall__Outputs(this);
  }
}

export class ClaimTreasuryRewardsCall__Inputs {
  _call: ClaimTreasuryRewardsCall;

  constructor(call: ClaimTreasuryRewardsCall) {
    this._call = call;
  }
}

export class ClaimTreasuryRewardsCall__Outputs {
  _call: ClaimTreasuryRewardsCall;

  constructor(call: ClaimTreasuryRewardsCall) {
    this._call = call;
  }

  get treasuryReward(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minLpShares(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get lpShares(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MulticallCall extends ethereum.Call {
  get inputs(): MulticallCall__Inputs {
    return new MulticallCall__Inputs(this);
  }

  get outputs(): MulticallCall__Outputs {
    return new MulticallCall__Outputs(this);
  }
}

export class MulticallCall__Inputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get _data(): Array<Bytes> {
    return this._call.inputValues[0].value.toBytesArray();
  }
}

export class MulticallCall__Outputs {
  _call: MulticallCall;

  constructor(call: MulticallCall) {
    this._call = call;
  }

  get results(): Array<Bytes> {
    return this._call.outputValues[0].value.toBytesArray();
  }
}

export class RedeemUnlockCall extends ethereum.Call {
  get inputs(): RedeemUnlockCall__Inputs {
    return new RedeemUnlockCall__Inputs(this);
  }

  get outputs(): RedeemUnlockCall__Outputs {
    return new RedeemUnlockCall__Outputs(this);
  }
}

export class RedeemUnlockCall__Inputs {
  _call: RedeemUnlockCall;

  constructor(call: RedeemUnlockCall) {
    this._call = call;
  }
}

export class RedeemUnlockCall__Outputs {
  _call: RedeemUnlockCall;

  constructor(call: RedeemUnlockCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SelfPermitCall extends ethereum.Call {
  get inputs(): SelfPermitCall__Inputs {
    return new SelfPermitCall__Inputs(this);
  }

  get outputs(): SelfPermitCall__Outputs {
    return new SelfPermitCall__Outputs(this);
  }
}

export class SelfPermitCall__Inputs {
  _call: SelfPermitCall;

  constructor(call: SelfPermitCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SelfPermitCall__Outputs {
  _call: SelfPermitCall;

  constructor(call: SelfPermitCall) {
    this._call = call;
  }
}

export class SelfPermitIfNecessaryCall extends ethereum.Call {
  get inputs(): SelfPermitIfNecessaryCall__Inputs {
    return new SelfPermitIfNecessaryCall__Inputs(this);
  }

  get outputs(): SelfPermitIfNecessaryCall__Outputs {
    return new SelfPermitIfNecessaryCall__Outputs(this);
  }
}

export class SelfPermitIfNecessaryCall__Inputs {
  _call: SelfPermitIfNecessaryCall;

  constructor(call: SelfPermitIfNecessaryCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SelfPermitIfNecessaryCall__Outputs {
  _call: SelfPermitIfNecessaryCall;

  constructor(call: SelfPermitIfNecessaryCall) {
    this._call = call;
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get minOut(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get out(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
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

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
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

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxLpSharesBurnt(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
