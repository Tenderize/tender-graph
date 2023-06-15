# Tenderize v2 Subgraph

## Getting Started

### Install

```sh
yarn install
```

### Deploy

1. Set environment variable for the network to deploy subgraph for

   ```sh
   export NETWORK_NAME=<mainnet,arbitrum-one>
   ```

2. Prepare subgraph manifest

   ```sh
   yarn prepare:$NETWORK_NAME
   ```

3. Compile AssemblyScript types from `schema.graphql`

   ```sh
   yarn codegen
   ```

4. Compile the subgraph to WASM

   ```sh
   yarn build
   ```

## Deploy Locally

This requires you to have docker and docker-compose installed.

### 1. Run Graph Node

Spin up a local graph node using the `docker-compose`file. From the root of the repo run the following command:

```sh
docker-compose up
```
