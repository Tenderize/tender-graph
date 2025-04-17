import { DeployCall } from '../types/MultiValidatorFactory/MultiValidatorFactory'
import { MultiValidatorLST } from '../types/templates'

export function handleDeployCall(call: DeployCall): void {
  const newLSTAddress = call.outputs.value0
  MultiValidatorLST.create(newLSTAddress)
}
