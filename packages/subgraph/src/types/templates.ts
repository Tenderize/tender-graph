// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Tenderizer extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Tenderizer", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "Tenderizer",
      [address.toHex()],
      context
    );
  }
}

export class SwapPool extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("SwapPool", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "SwapPool",
      [address.toHex()],
      context
    );
  }
}

export class SwapPoolToken extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("SwapPoolToken", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "SwapPoolToken",
      [address.toHex()],
      context
    );
  }
}
