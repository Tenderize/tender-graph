import { clearStore, test, assert, newMockEvent } from "matchstick-as/assembly/index";
import { ethereum } from "@graphprotocol/graph-ts";

import { Asset, Tenderizer, Stake, Unlock } from "../src/types/schema";
import {
    Deposit,
    Unlock as UnlockEvent,
    Withdraw,
    Transfer,
    Tenderizer as TenderizerContract,
    Rebase,
} from '../src/types/templates/Tenderizer/Tenderizer'
import { convertToDecimal, BD_ZERO } from '../src/mappings/helpers'

export function runTests(): void {
    test("handleDeposit", () => {

    })
}