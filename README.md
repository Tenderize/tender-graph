# Tenderize v2 Subgraph

## Getting Started

### Install

```sh
yarn install
```

### Build Subgraph

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

### Deploy Locally

This requires you to have docker and docker-compose installed.

#### 1. Run Graph Node

Spin up a local graph node using the `docker-compose`file. From the root of the repo run the following command:

```sh
docker-compose up
```

#### 2. Create Subgraph

```
yarn create:local
```

which is an alias for:

```sh
"graph create tenderize/tenderize-localhost --node http://127.0.0.1:8020"
```

Replace `tenderize/tenderize-localhost` with your preferred subgraph name and `http://127.0.0.1:8020` with the `IP:PORT` your Graph node runs on.
