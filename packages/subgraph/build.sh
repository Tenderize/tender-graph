#!/bin/bash

prepareCmd="yarn prepare:${NETWORK_NAME:-"localhost"}"

echo $prepareCmd
eval $prepareCmd

yarn codegen
yarn build
