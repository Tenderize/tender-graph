import { DeployCall } from '../types/MultiValidatorFactory/MultiValidatorFactory'
import { MultiValidatorLST } from '../types/templates'
import {MultiValidatorLST as MultiValidatorLSTEntity} from '../types/schema'
export function handleDeployCall(call: DeployCall): void {
  const newLSTAddress = call.outputs.value0
  const lst = new MultiValidatorLSTEntity(newLSTAddress.toHex())
  lst.treeSize = 0
  lst.save()
  MultiValidatorLST.create(newLSTAddress)
}
