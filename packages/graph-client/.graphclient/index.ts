// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { TenderizeTypes } from './sources/Tenderize/types';
import * as importedModule$0 from "./sources/Tenderize/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type Asset = {
  id: Scalars['ID'];
  tvl: Scalars['BigDecimal'];
  tenderizerCount: Scalars['Int'];
  assetDays: Array<AssetDay>;
};


export type AssetassetDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDay_filter>;
};

export type AssetDay = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  asset: Asset;
  tvl: Scalars['BigDecimal'];
  rewards: Scalars['BigDecimal'];
};

export type AssetDay_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tvl?: InputMaybe<Scalars['BigDecimal']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewards?: InputMaybe<Scalars['BigDecimal']>;
  rewards_not?: InputMaybe<Scalars['BigDecimal']>;
  rewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  rewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  rewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  rewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  rewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AssetDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AssetDay_filter>>>;
};

export type AssetDay_orderBy =
  | 'id'
  | 'date'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tvl'
  | 'rewards';

export type Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tenderizerCount?: InputMaybe<Scalars['Int']>;
  tenderizerCount_not?: InputMaybe<Scalars['Int']>;
  tenderizerCount_gt?: InputMaybe<Scalars['Int']>;
  tenderizerCount_lt?: InputMaybe<Scalars['Int']>;
  tenderizerCount_gte?: InputMaybe<Scalars['Int']>;
  tenderizerCount_lte?: InputMaybe<Scalars['Int']>;
  tenderizerCount_in?: InputMaybe<Array<Scalars['Int']>>;
  tenderizerCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetDays_?: InputMaybe<AssetDay_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Asset_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Asset_filter>>>;
};

export type Asset_orderBy =
  | 'id'
  | 'tvl'
  | 'tenderizerCount'
  | 'assetDays';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type DepositEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  assetsIn: Scalars['BigDecimal'];
  tTokenOut: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type DepositEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetsIn?: InputMaybe<Scalars['BigDecimal']>;
  assetsIn_not?: InputMaybe<Scalars['BigDecimal']>;
  assetsIn_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetsIn_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetsIn_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetsIn_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetsIn_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetsIn_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tTokenOut?: InputMaybe<Scalars['BigDecimal']>;
  tTokenOut_not?: InputMaybe<Scalars['BigDecimal']>;
  tTokenOut_gt?: InputMaybe<Scalars['BigDecimal']>;
  tTokenOut_lt?: InputMaybe<Scalars['BigDecimal']>;
  tTokenOut_gte?: InputMaybe<Scalars['BigDecimal']>;
  tTokenOut_lte?: InputMaybe<Scalars['BigDecimal']>;
  tTokenOut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tTokenOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DepositEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DepositEvent_filter>>>;
};

export type DepositEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'assetsIn'
  | 'tTokenOut'
  | 'shares'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  tenderizer?: Maybe<Tenderizer>;
  tenderizers: Array<Tenderizer>;
  user?: Maybe<User>;
  users: Array<User>;
  stake?: Maybe<Stake>;
  stakes: Array<Stake>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  assetDay?: Maybe<AssetDay>;
  assetDays: Array<AssetDay>;
  tenderizerDay?: Maybe<TenderizerDay>;
  tenderizerDays: Array<TenderizerDay>;
  depositEvent?: Maybe<DepositEvent>;
  depositEvents: Array<DepositEvent>;
  unlockEvent?: Maybe<UnlockEvent>;
  unlockEvents: Array<UnlockEvent>;
  withdrawEvent?: Maybe<WithdrawEvent>;
  withdrawEvents: Array<WithdrawEvent>;
  rebaseEvent?: Maybe<RebaseEvent>;
  rebaseEvents: Array<RebaseEvent>;
  tokenTransferEvent?: Maybe<TokenTransferEvent>;
  tokenTransferEvents: Array<TokenTransferEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QueryassetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Asset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Asset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tenderizer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tenderizer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerystakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Unlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unlock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryassetDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizerDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytenderizerDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TenderizerDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TenderizerDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryunlockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnlockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryrebaseEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebaseEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebaseEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenTransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type RebaseEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  oldStake: Scalars['BigDecimal'];
  newStake: Scalars['BigDecimal'];
  asset: Asset;
  tenderizer: Tenderizer;
};

export type RebaseEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  oldStake?: InputMaybe<Scalars['BigDecimal']>;
  oldStake_not?: InputMaybe<Scalars['BigDecimal']>;
  oldStake_gt?: InputMaybe<Scalars['BigDecimal']>;
  oldStake_lt?: InputMaybe<Scalars['BigDecimal']>;
  oldStake_gte?: InputMaybe<Scalars['BigDecimal']>;
  oldStake_lte?: InputMaybe<Scalars['BigDecimal']>;
  oldStake_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  oldStake_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newStake?: InputMaybe<Scalars['BigDecimal']>;
  newStake_not?: InputMaybe<Scalars['BigDecimal']>;
  newStake_gt?: InputMaybe<Scalars['BigDecimal']>;
  newStake_lt?: InputMaybe<Scalars['BigDecimal']>;
  newStake_gte?: InputMaybe<Scalars['BigDecimal']>;
  newStake_lte?: InputMaybe<Scalars['BigDecimal']>;
  newStake_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  newStake_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RebaseEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RebaseEvent_filter>>>;
};

export type RebaseEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'oldStake'
  | 'newStake'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay';

export type Stake = {
  id: Scalars['ID'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
  shares: Scalars['BigDecimal'];
};

export type Stake_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Stake_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Stake_filter>>>;
};

export type Stake_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay'
  | 'shares';

export type Subscription = {
  asset?: Maybe<Asset>;
  assets: Array<Asset>;
  tenderizer?: Maybe<Tenderizer>;
  tenderizers: Array<Tenderizer>;
  user?: Maybe<User>;
  users: Array<User>;
  stake?: Maybe<Stake>;
  stakes: Array<Stake>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  assetDay?: Maybe<AssetDay>;
  assetDays: Array<AssetDay>;
  tenderizerDay?: Maybe<TenderizerDay>;
  tenderizerDays: Array<TenderizerDay>;
  depositEvent?: Maybe<DepositEvent>;
  depositEvents: Array<DepositEvent>;
  unlockEvent?: Maybe<UnlockEvent>;
  unlockEvents: Array<UnlockEvent>;
  withdrawEvent?: Maybe<WithdrawEvent>;
  withdrawEvents: Array<WithdrawEvent>;
  rebaseEvent?: Maybe<RebaseEvent>;
  rebaseEvents: Array<RebaseEvent>;
  tokenTransferEvent?: Maybe<TokenTransferEvent>;
  tokenTransferEvents: Array<TokenTransferEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionassetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Asset_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Asset_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Tenderizer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tenderizer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionstakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Unlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unlock_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionassetDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AssetDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AssetDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizerDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontenderizerDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TenderizerDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TenderizerDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionunlockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnlockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionrebaseEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebaseEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebaseEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenTransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Tenderizer = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  validator: Scalars['String'];
  asset: Asset;
  tvl: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
  apr: Scalars['BigDecimal'];
  stakes: Array<Stake>;
  tenderizerDays: Array<TenderizerDay>;
  lastUpdateDay: Scalars['BigInt'];
  depositEvents: Array<DepositEvent>;
  unlockEvents: Array<UnlockEvent>;
  withdrawEvents: Array<WithdrawEvent>;
  rebaseEvents: Array<RebaseEvent>;
  tokenTransferEvents: Array<TokenTransferEvent>;
};


export type TenderizerstakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
};


export type TenderizertenderizerDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TenderizerDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TenderizerDay_filter>;
};


export type TenderizerdepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DepositEvent_filter>;
};


export type TenderizerunlockEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UnlockEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<UnlockEvent_filter>;
};


export type TenderizerwithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WithdrawEvent_filter>;
};


export type TenderizerrebaseEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RebaseEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RebaseEvent_filter>;
};


export type TenderizertokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenTransferEvent_filter>;
};

export type TenderizerDay = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  tenderizer: Tenderizer;
  shares: Scalars['BigDecimal'];
  tvl: Scalars['BigDecimal'];
  startStake: Scalars['BigDecimal'];
  apr: Scalars['BigDecimal'];
  rewards: Scalars['BigDecimal'];
};

export type TenderizerDay_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  date?: InputMaybe<Scalars['Int']>;
  date_not?: InputMaybe<Scalars['Int']>;
  date_gt?: InputMaybe<Scalars['Int']>;
  date_lt?: InputMaybe<Scalars['Int']>;
  date_gte?: InputMaybe<Scalars['Int']>;
  date_lte?: InputMaybe<Scalars['Int']>;
  date_in?: InputMaybe<Array<Scalars['Int']>>;
  date_not_in?: InputMaybe<Array<Scalars['Int']>>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvl?: InputMaybe<Scalars['BigDecimal']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  startStake?: InputMaybe<Scalars['BigDecimal']>;
  startStake_not?: InputMaybe<Scalars['BigDecimal']>;
  startStake_gt?: InputMaybe<Scalars['BigDecimal']>;
  startStake_lt?: InputMaybe<Scalars['BigDecimal']>;
  startStake_gte?: InputMaybe<Scalars['BigDecimal']>;
  startStake_lte?: InputMaybe<Scalars['BigDecimal']>;
  startStake_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  startStake_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewards?: InputMaybe<Scalars['BigDecimal']>;
  rewards_not?: InputMaybe<Scalars['BigDecimal']>;
  rewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  rewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  rewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  rewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  rewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TenderizerDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TenderizerDay_filter>>>;
};

export type TenderizerDay_orderBy =
  | 'id'
  | 'date'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay'
  | 'shares'
  | 'tvl'
  | 'startStake'
  | 'apr'
  | 'rewards';

export type Tenderizer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  validator?: InputMaybe<Scalars['String']>;
  validator_not?: InputMaybe<Scalars['String']>;
  validator_gt?: InputMaybe<Scalars['String']>;
  validator_lt?: InputMaybe<Scalars['String']>;
  validator_gte?: InputMaybe<Scalars['String']>;
  validator_lte?: InputMaybe<Scalars['String']>;
  validator_in?: InputMaybe<Array<Scalars['String']>>;
  validator_not_in?: InputMaybe<Array<Scalars['String']>>;
  validator_contains?: InputMaybe<Scalars['String']>;
  validator_contains_nocase?: InputMaybe<Scalars['String']>;
  validator_not_contains?: InputMaybe<Scalars['String']>;
  validator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  validator_starts_with?: InputMaybe<Scalars['String']>;
  validator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validator_not_starts_with?: InputMaybe<Scalars['String']>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validator_ends_with?: InputMaybe<Scalars['String']>;
  validator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  validator_not_ends_with?: InputMaybe<Scalars['String']>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tvl?: InputMaybe<Scalars['BigDecimal']>;
  tvl_not?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lt?: InputMaybe<Scalars['BigDecimal']>;
  tvl_gte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_lte?: InputMaybe<Scalars['BigDecimal']>;
  tvl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tvl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  stakes_?: InputMaybe<Stake_filter>;
  tenderizerDays_?: InputMaybe<TenderizerDay_filter>;
  lastUpdateDay?: InputMaybe<Scalars['BigInt']>;
  lastUpdateDay_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdateDay_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdateDay_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdateDay_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdateDay_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdateDay_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdateDay_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  depositEvents_?: InputMaybe<DepositEvent_filter>;
  unlockEvents_?: InputMaybe<UnlockEvent_filter>;
  withdrawEvents_?: InputMaybe<WithdrawEvent_filter>;
  rebaseEvents_?: InputMaybe<RebaseEvent_filter>;
  tokenTransferEvents_?: InputMaybe<TokenTransferEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tenderizer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Tenderizer_filter>>>;
};

export type Tenderizer_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'validator'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tvl'
  | 'shares'
  | 'apr'
  | 'stakes'
  | 'tenderizerDays'
  | 'lastUpdateDay'
  | 'depositEvents'
  | 'unlockEvents'
  | 'withdrawEvents'
  | 'rebaseEvents'
  | 'tokenTransferEvents';

export type TokenTransferEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  amount: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
  from: User;
  to: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type TokenTransferEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  from?: InputMaybe<Scalars['String']>;
  from_not?: InputMaybe<Scalars['String']>;
  from_gt?: InputMaybe<Scalars['String']>;
  from_lt?: InputMaybe<Scalars['String']>;
  from_gte?: InputMaybe<Scalars['String']>;
  from_lte?: InputMaybe<Scalars['String']>;
  from_in?: InputMaybe<Array<Scalars['String']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']>>;
  from_contains?: InputMaybe<Scalars['String']>;
  from_contains_nocase?: InputMaybe<Scalars['String']>;
  from_not_contains?: InputMaybe<Scalars['String']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']>;
  from_starts_with?: InputMaybe<Scalars['String']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_starts_with?: InputMaybe<Scalars['String']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  from_ends_with?: InputMaybe<Scalars['String']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_not_ends_with?: InputMaybe<Scalars['String']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  from_?: InputMaybe<User_filter>;
  to?: InputMaybe<Scalars['String']>;
  to_not?: InputMaybe<Scalars['String']>;
  to_gt?: InputMaybe<Scalars['String']>;
  to_lt?: InputMaybe<Scalars['String']>;
  to_gte?: InputMaybe<Scalars['String']>;
  to_lte?: InputMaybe<Scalars['String']>;
  to_in?: InputMaybe<Array<Scalars['String']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']>>;
  to_contains?: InputMaybe<Scalars['String']>;
  to_contains_nocase?: InputMaybe<Scalars['String']>;
  to_not_contains?: InputMaybe<Scalars['String']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']>;
  to_starts_with?: InputMaybe<Scalars['String']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_starts_with?: InputMaybe<Scalars['String']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  to_ends_with?: InputMaybe<Scalars['String']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_not_ends_with?: InputMaybe<Scalars['String']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  to_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenTransferEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenTransferEvent_filter>>>;
};

export type TokenTransferEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'amount'
  | 'shares'
  | 'from'
  | 'from__id'
  | 'to'
  | 'to__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay';

export type Unlock = {
  id: Scalars['ID'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
  amount: Scalars['BigDecimal'];
  timestamp: Scalars['Int'];
  maturity: Scalars['Int'];
  redeemed: Scalars['Boolean'];
};

export type UnlockEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  amount: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
  unlock: Unlock;
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type UnlockEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares?: InputMaybe<Scalars['BigDecimal']>;
  shares_not?: InputMaybe<Scalars['BigDecimal']>;
  shares_gt?: InputMaybe<Scalars['BigDecimal']>;
  shares_lt?: InputMaybe<Scalars['BigDecimal']>;
  shares_gte?: InputMaybe<Scalars['BigDecimal']>;
  shares_lte?: InputMaybe<Scalars['BigDecimal']>;
  shares_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unlock?: InputMaybe<Scalars['String']>;
  unlock_not?: InputMaybe<Scalars['String']>;
  unlock_gt?: InputMaybe<Scalars['String']>;
  unlock_lt?: InputMaybe<Scalars['String']>;
  unlock_gte?: InputMaybe<Scalars['String']>;
  unlock_lte?: InputMaybe<Scalars['String']>;
  unlock_in?: InputMaybe<Array<Scalars['String']>>;
  unlock_not_in?: InputMaybe<Array<Scalars['String']>>;
  unlock_contains?: InputMaybe<Scalars['String']>;
  unlock_contains_nocase?: InputMaybe<Scalars['String']>;
  unlock_not_contains?: InputMaybe<Scalars['String']>;
  unlock_not_contains_nocase?: InputMaybe<Scalars['String']>;
  unlock_starts_with?: InputMaybe<Scalars['String']>;
  unlock_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_not_starts_with?: InputMaybe<Scalars['String']>;
  unlock_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_ends_with?: InputMaybe<Scalars['String']>;
  unlock_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_not_ends_with?: InputMaybe<Scalars['String']>;
  unlock_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_?: InputMaybe<Unlock_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UnlockEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<UnlockEvent_filter>>>;
};

export type UnlockEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'amount'
  | 'shares'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay';

export type Unlock_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  maturity?: InputMaybe<Scalars['Int']>;
  maturity_not?: InputMaybe<Scalars['Int']>;
  maturity_gt?: InputMaybe<Scalars['Int']>;
  maturity_lt?: InputMaybe<Scalars['Int']>;
  maturity_gte?: InputMaybe<Scalars['Int']>;
  maturity_lte?: InputMaybe<Scalars['Int']>;
  maturity_in?: InputMaybe<Array<Scalars['Int']>>;
  maturity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  redeemed?: InputMaybe<Scalars['Boolean']>;
  redeemed_not?: InputMaybe<Scalars['Boolean']>;
  redeemed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  redeemed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Unlock_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Unlock_filter>>>;
};

export type Unlock_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay'
  | 'amount'
  | 'timestamp'
  | 'maturity'
  | 'redeemed';

export type User = {
  id: Scalars['ID'];
  stakes?: Maybe<Array<Stake>>;
  unlocks?: Maybe<Array<Unlock>>;
};


export type UserstakesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_filter>;
};


export type UserunlocksArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Unlock_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Unlock_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stakes_?: InputMaybe<Stake_filter>;
  unlocks_?: InputMaybe<Unlock_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'stakes'
  | 'unlocks';

export type WithdrawEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  assetsOut: Scalars['BigDecimal'];
  unlock: Unlock;
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
};

export type WithdrawEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['Int']>;
  timestamp_not?: InputMaybe<Scalars['Int']>;
  timestamp_gt?: InputMaybe<Scalars['Int']>;
  timestamp_lt?: InputMaybe<Scalars['Int']>;
  timestamp_gte?: InputMaybe<Scalars['Int']>;
  timestamp_lte?: InputMaybe<Scalars['Int']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
  assetsOut?: InputMaybe<Scalars['BigDecimal']>;
  assetsOut_not?: InputMaybe<Scalars['BigDecimal']>;
  assetsOut_gt?: InputMaybe<Scalars['BigDecimal']>;
  assetsOut_lt?: InputMaybe<Scalars['BigDecimal']>;
  assetsOut_gte?: InputMaybe<Scalars['BigDecimal']>;
  assetsOut_lte?: InputMaybe<Scalars['BigDecimal']>;
  assetsOut_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  assetsOut_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  unlock?: InputMaybe<Scalars['String']>;
  unlock_not?: InputMaybe<Scalars['String']>;
  unlock_gt?: InputMaybe<Scalars['String']>;
  unlock_lt?: InputMaybe<Scalars['String']>;
  unlock_gte?: InputMaybe<Scalars['String']>;
  unlock_lte?: InputMaybe<Scalars['String']>;
  unlock_in?: InputMaybe<Array<Scalars['String']>>;
  unlock_not_in?: InputMaybe<Array<Scalars['String']>>;
  unlock_contains?: InputMaybe<Scalars['String']>;
  unlock_contains_nocase?: InputMaybe<Scalars['String']>;
  unlock_not_contains?: InputMaybe<Scalars['String']>;
  unlock_not_contains_nocase?: InputMaybe<Scalars['String']>;
  unlock_starts_with?: InputMaybe<Scalars['String']>;
  unlock_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_not_starts_with?: InputMaybe<Scalars['String']>;
  unlock_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_ends_with?: InputMaybe<Scalars['String']>;
  unlock_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_not_ends_with?: InputMaybe<Scalars['String']>;
  unlock_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  unlock_?: InputMaybe<Unlock_filter>;
  user?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<Asset_filter>;
  tenderizer?: InputMaybe<Scalars['String']>;
  tenderizer_not?: InputMaybe<Scalars['String']>;
  tenderizer_gt?: InputMaybe<Scalars['String']>;
  tenderizer_lt?: InputMaybe<Scalars['String']>;
  tenderizer_gte?: InputMaybe<Scalars['String']>;
  tenderizer_lte?: InputMaybe<Scalars['String']>;
  tenderizer_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_not_in?: InputMaybe<Array<Scalars['String']>>;
  tenderizer_contains?: InputMaybe<Scalars['String']>;
  tenderizer_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains?: InputMaybe<Scalars['String']>;
  tenderizer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with?: InputMaybe<Scalars['String']>;
  tenderizer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tenderizer_?: InputMaybe<Tenderizer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WithdrawEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WithdrawEvent_filter>>>;
};

export type WithdrawEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'assetsOut'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'user'
  | 'user__id'
  | 'asset'
  | 'asset__id'
  | 'asset__tvl'
  | 'asset__tenderizerCount'
  | 'tenderizer'
  | 'tenderizer__id'
  | 'tenderizer__symbol'
  | 'tenderizer__name'
  | 'tenderizer__validator'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__lastUpdateDay';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Asset: ResolverTypeWrapper<Asset>;
  AssetDay: ResolverTypeWrapper<AssetDay>;
  AssetDay_filter: AssetDay_filter;
  AssetDay_orderBy: AssetDay_orderBy;
  Asset_filter: Asset_filter;
  Asset_orderBy: Asset_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  DepositEvent: ResolverTypeWrapper<DepositEvent>;
  DepositEvent_filter: DepositEvent_filter;
  DepositEvent_orderBy: DepositEvent_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  RebaseEvent: ResolverTypeWrapper<RebaseEvent>;
  RebaseEvent_filter: RebaseEvent_filter;
  RebaseEvent_orderBy: RebaseEvent_orderBy;
  Stake: ResolverTypeWrapper<Stake>;
  Stake_filter: Stake_filter;
  Stake_orderBy: Stake_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Tenderizer: ResolverTypeWrapper<Tenderizer>;
  TenderizerDay: ResolverTypeWrapper<TenderizerDay>;
  TenderizerDay_filter: TenderizerDay_filter;
  TenderizerDay_orderBy: TenderizerDay_orderBy;
  Tenderizer_filter: Tenderizer_filter;
  Tenderizer_orderBy: Tenderizer_orderBy;
  TokenTransferEvent: ResolverTypeWrapper<TokenTransferEvent>;
  TokenTransferEvent_filter: TokenTransferEvent_filter;
  TokenTransferEvent_orderBy: TokenTransferEvent_orderBy;
  Unlock: ResolverTypeWrapper<Unlock>;
  UnlockEvent: ResolverTypeWrapper<UnlockEvent>;
  UnlockEvent_filter: UnlockEvent_filter;
  UnlockEvent_orderBy: UnlockEvent_orderBy;
  Unlock_filter: Unlock_filter;
  Unlock_orderBy: Unlock_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  WithdrawEvent: ResolverTypeWrapper<WithdrawEvent>;
  WithdrawEvent_filter: WithdrawEvent_filter;
  WithdrawEvent_orderBy: WithdrawEvent_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Asset: Asset;
  AssetDay: AssetDay;
  AssetDay_filter: AssetDay_filter;
  Asset_filter: Asset_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  DepositEvent: DepositEvent;
  DepositEvent_filter: DepositEvent_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Query: {};
  RebaseEvent: RebaseEvent;
  RebaseEvent_filter: RebaseEvent_filter;
  Stake: Stake;
  Stake_filter: Stake_filter;
  String: Scalars['String'];
  Subscription: {};
  Tenderizer: Tenderizer;
  TenderizerDay: TenderizerDay;
  TenderizerDay_filter: TenderizerDay_filter;
  Tenderizer_filter: Tenderizer_filter;
  TokenTransferEvent: TokenTransferEvent;
  TokenTransferEvent_filter: TokenTransferEvent_filter;
  Unlock: Unlock;
  UnlockEvent: UnlockEvent;
  UnlockEvent_filter: UnlockEvent_filter;
  Unlock_filter: Unlock_filter;
  User: User;
  User_filter: User_filter;
  WithdrawEvent: WithdrawEvent;
  WithdrawEvent_filter: WithdrawEvent_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tenderizerCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetDays?: Resolver<Array<ResolversTypes['AssetDay']>, ParentType, ContextType, RequireFields<AssetassetDaysArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AssetDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AssetDay'] = ResolversParentTypes['AssetDay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  rewards?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type DepositEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DepositEvent'] = ResolversParentTypes['DepositEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetsIn?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tTokenOut?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetArgs, 'id' | 'subgraphError'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizer?: Resolver<Maybe<ResolversTypes['Tenderizer']>, ParentType, ContextType, RequireFields<QuerytenderizerArgs, 'id' | 'subgraphError'>>;
  tenderizers?: Resolver<Array<ResolversTypes['Tenderizer']>, ParentType, ContextType, RequireFields<QuerytenderizersArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stake?: Resolver<Maybe<ResolversTypes['Stake']>, ParentType, ContextType, RequireFields<QuerystakeArgs, 'id' | 'subgraphError'>>;
  stakes?: Resolver<Array<ResolversTypes['Stake']>, ParentType, ContextType, RequireFields<QuerystakesArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlock?: Resolver<Maybe<ResolversTypes['Unlock']>, ParentType, ContextType, RequireFields<QueryunlockArgs, 'id' | 'subgraphError'>>;
  unlocks?: Resolver<Array<ResolversTypes['Unlock']>, ParentType, ContextType, RequireFields<QueryunlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  assetDay?: Resolver<Maybe<ResolversTypes['AssetDay']>, ParentType, ContextType, RequireFields<QueryassetDayArgs, 'id' | 'subgraphError'>>;
  assetDays?: Resolver<Array<ResolversTypes['AssetDay']>, ParentType, ContextType, RequireFields<QueryassetDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizerDay?: Resolver<Maybe<ResolversTypes['TenderizerDay']>, ParentType, ContextType, RequireFields<QuerytenderizerDayArgs, 'id' | 'subgraphError'>>;
  tenderizerDays?: Resolver<Array<ResolversTypes['TenderizerDay']>, ParentType, ContextType, RequireFields<QuerytenderizerDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  depositEvent?: Resolver<Maybe<ResolversTypes['DepositEvent']>, ParentType, ContextType, RequireFields<QuerydepositEventArgs, 'id' | 'subgraphError'>>;
  depositEvents?: Resolver<Array<ResolversTypes['DepositEvent']>, ParentType, ContextType, RequireFields<QuerydepositEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockEvent?: Resolver<Maybe<ResolversTypes['UnlockEvent']>, ParentType, ContextType, RequireFields<QueryunlockEventArgs, 'id' | 'subgraphError'>>;
  unlockEvents?: Resolver<Array<ResolversTypes['UnlockEvent']>, ParentType, ContextType, RequireFields<QueryunlockEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawEvent?: Resolver<Maybe<ResolversTypes['WithdrawEvent']>, ParentType, ContextType, RequireFields<QuerywithdrawEventArgs, 'id' | 'subgraphError'>>;
  withdrawEvents?: Resolver<Array<ResolversTypes['WithdrawEvent']>, ParentType, ContextType, RequireFields<QuerywithdrawEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebaseEvent?: Resolver<Maybe<ResolversTypes['RebaseEvent']>, ParentType, ContextType, RequireFields<QueryrebaseEventArgs, 'id' | 'subgraphError'>>;
  rebaseEvents?: Resolver<Array<ResolversTypes['RebaseEvent']>, ParentType, ContextType, RequireFields<QueryrebaseEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenTransferEvent?: Resolver<Maybe<ResolversTypes['TokenTransferEvent']>, ParentType, ContextType, RequireFields<QuerytokenTransferEventArgs, 'id' | 'subgraphError'>>;
  tokenTransferEvents?: Resolver<Array<ResolversTypes['TokenTransferEvent']>, ParentType, ContextType, RequireFields<QuerytokenTransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RebaseEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RebaseEvent'] = ResolversParentTypes['RebaseEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oldStake?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  newStake?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StakeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Stake'] = ResolversParentTypes['Stake']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  asset?: SubscriptionResolver<Maybe<ResolversTypes['Asset']>, "asset", ParentType, ContextType, RequireFields<SubscriptionassetArgs, 'id' | 'subgraphError'>>;
  assets?: SubscriptionResolver<Array<ResolversTypes['Asset']>, "assets", ParentType, ContextType, RequireFields<SubscriptionassetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizer?: SubscriptionResolver<Maybe<ResolversTypes['Tenderizer']>, "tenderizer", ParentType, ContextType, RequireFields<SubscriptiontenderizerArgs, 'id' | 'subgraphError'>>;
  tenderizers?: SubscriptionResolver<Array<ResolversTypes['Tenderizer']>, "tenderizers", ParentType, ContextType, RequireFields<SubscriptiontenderizersArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stake?: SubscriptionResolver<Maybe<ResolversTypes['Stake']>, "stake", ParentType, ContextType, RequireFields<SubscriptionstakeArgs, 'id' | 'subgraphError'>>;
  stakes?: SubscriptionResolver<Array<ResolversTypes['Stake']>, "stakes", ParentType, ContextType, RequireFields<SubscriptionstakesArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlock?: SubscriptionResolver<Maybe<ResolversTypes['Unlock']>, "unlock", ParentType, ContextType, RequireFields<SubscriptionunlockArgs, 'id' | 'subgraphError'>>;
  unlocks?: SubscriptionResolver<Array<ResolversTypes['Unlock']>, "unlocks", ParentType, ContextType, RequireFields<SubscriptionunlocksArgs, 'skip' | 'first' | 'subgraphError'>>;
  assetDay?: SubscriptionResolver<Maybe<ResolversTypes['AssetDay']>, "assetDay", ParentType, ContextType, RequireFields<SubscriptionassetDayArgs, 'id' | 'subgraphError'>>;
  assetDays?: SubscriptionResolver<Array<ResolversTypes['AssetDay']>, "assetDays", ParentType, ContextType, RequireFields<SubscriptionassetDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  tenderizerDay?: SubscriptionResolver<Maybe<ResolversTypes['TenderizerDay']>, "tenderizerDay", ParentType, ContextType, RequireFields<SubscriptiontenderizerDayArgs, 'id' | 'subgraphError'>>;
  tenderizerDays?: SubscriptionResolver<Array<ResolversTypes['TenderizerDay']>, "tenderizerDays", ParentType, ContextType, RequireFields<SubscriptiontenderizerDaysArgs, 'skip' | 'first' | 'subgraphError'>>;
  depositEvent?: SubscriptionResolver<Maybe<ResolversTypes['DepositEvent']>, "depositEvent", ParentType, ContextType, RequireFields<SubscriptiondepositEventArgs, 'id' | 'subgraphError'>>;
  depositEvents?: SubscriptionResolver<Array<ResolversTypes['DepositEvent']>, "depositEvents", ParentType, ContextType, RequireFields<SubscriptiondepositEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  unlockEvent?: SubscriptionResolver<Maybe<ResolversTypes['UnlockEvent']>, "unlockEvent", ParentType, ContextType, RequireFields<SubscriptionunlockEventArgs, 'id' | 'subgraphError'>>;
  unlockEvents?: SubscriptionResolver<Array<ResolversTypes['UnlockEvent']>, "unlockEvents", ParentType, ContextType, RequireFields<SubscriptionunlockEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  withdrawEvent?: SubscriptionResolver<Maybe<ResolversTypes['WithdrawEvent']>, "withdrawEvent", ParentType, ContextType, RequireFields<SubscriptionwithdrawEventArgs, 'id' | 'subgraphError'>>;
  withdrawEvents?: SubscriptionResolver<Array<ResolversTypes['WithdrawEvent']>, "withdrawEvents", ParentType, ContextType, RequireFields<SubscriptionwithdrawEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rebaseEvent?: SubscriptionResolver<Maybe<ResolversTypes['RebaseEvent']>, "rebaseEvent", ParentType, ContextType, RequireFields<SubscriptionrebaseEventArgs, 'id' | 'subgraphError'>>;
  rebaseEvents?: SubscriptionResolver<Array<ResolversTypes['RebaseEvent']>, "rebaseEvents", ParentType, ContextType, RequireFields<SubscriptionrebaseEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  tokenTransferEvent?: SubscriptionResolver<Maybe<ResolversTypes['TokenTransferEvent']>, "tokenTransferEvent", ParentType, ContextType, RequireFields<SubscriptiontokenTransferEventArgs, 'id' | 'subgraphError'>>;
  tokenTransferEvents?: SubscriptionResolver<Array<ResolversTypes['TokenTransferEvent']>, "tokenTransferEvents", ParentType, ContextType, RequireFields<SubscriptiontokenTransferEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TenderizerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tenderizer'] = ResolversParentTypes['Tenderizer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  stakes?: Resolver<Array<ResolversTypes['Stake']>, ParentType, ContextType, RequireFields<TenderizerstakesArgs, 'skip' | 'first'>>;
  tenderizerDays?: Resolver<Array<ResolversTypes['TenderizerDay']>, ParentType, ContextType, RequireFields<TenderizertenderizerDaysArgs, 'skip' | 'first'>>;
  lastUpdateDay?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositEvents?: Resolver<Array<ResolversTypes['DepositEvent']>, ParentType, ContextType, RequireFields<TenderizerdepositEventsArgs, 'skip' | 'first'>>;
  unlockEvents?: Resolver<Array<ResolversTypes['UnlockEvent']>, ParentType, ContextType, RequireFields<TenderizerunlockEventsArgs, 'skip' | 'first'>>;
  withdrawEvents?: Resolver<Array<ResolversTypes['WithdrawEvent']>, ParentType, ContextType, RequireFields<TenderizerwithdrawEventsArgs, 'skip' | 'first'>>;
  rebaseEvents?: Resolver<Array<ResolversTypes['RebaseEvent']>, ParentType, ContextType, RequireFields<TenderizerrebaseEventsArgs, 'skip' | 'first'>>;
  tokenTransferEvents?: Resolver<Array<ResolversTypes['TokenTransferEvent']>, ParentType, ContextType, RequireFields<TenderizertokenTransferEventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TenderizerDayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TenderizerDay'] = ResolversParentTypes['TenderizerDay']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvl?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  startStake?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  apr?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  rewards?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenTransferEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenTransferEvent'] = ResolversParentTypes['TokenTransferEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnlockResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Unlock'] = ResolversParentTypes['Unlock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  redeemed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UnlockEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UnlockEvent'] = ResolversParentTypes['UnlockEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  unlock?: Resolver<ResolversTypes['Unlock'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stakes?: Resolver<Maybe<Array<ResolversTypes['Stake']>>, ParentType, ContextType, RequireFields<UserstakesArgs, 'skip' | 'first'>>;
  unlocks?: Resolver<Maybe<Array<ResolversTypes['Unlock']>>, ParentType, ContextType, RequireFields<UserunlocksArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawEvent'] = ResolversParentTypes['WithdrawEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  assetsOut?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  unlock?: Resolver<ResolversTypes['Unlock'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  tenderizer?: Resolver<ResolversTypes['Tenderizer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Asset?: AssetResolvers<ContextType>;
  AssetDay?: AssetDayResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  DepositEvent?: DepositEventResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  RebaseEvent?: RebaseEventResolvers<ContextType>;
  Stake?: StakeResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tenderizer?: TenderizerResolvers<ContextType>;
  TenderizerDay?: TenderizerDayResolvers<ContextType>;
  TokenTransferEvent?: TokenTransferEventResolvers<ContextType>;
  Unlock?: UnlockResolvers<ContextType>;
  UnlockEvent?: UnlockEventResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  WithdrawEvent?: WithdrawEventResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = TenderizeTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/Tenderize/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const tenderizeTransforms = [];
const additionalTypeDefs = [] as any[];
const tenderizeHandler = new GraphqlHandler({
              name: "Tenderize",
              config: {"endpoint":"https://api.studio.thegraph.com/query/45970/tenderize-v2-arbitrum/version/latest"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Tenderize"),
              logger: logger.child("Tenderize"),
              importFn,
            });
sources[0] = {
          name: 'Tenderize',
          handler: tenderizeHandler,
          transforms: tenderizeTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetAssetDocument,
        get rawSDL() {
          return printWithCache(GetAssetDocument);
        },
        location: 'GetAssetDocument.graphql'
      },{
        document: GetTenderizersDocument,
        get rawSDL() {
          return printWithCache(GetTenderizersDocument);
        },
        location: 'GetTenderizersDocument.graphql'
      },{
        document: GetTenderizerDocument,
        get rawSDL() {
          return printWithCache(GetTenderizerDocument);
        },
        location: 'GetTenderizerDocument.graphql'
      },{
        document: GetUserDocument,
        get rawSDL() {
          return printWithCache(GetUserDocument);
        },
        location: 'GetUserDocument.graphql'
      },{
        document: GetUserMultichainDocument,
        get rawSDL() {
          return printWithCache(GetUserMultichainDocument);
        },
        location: 'GetUserMultichainDocument.graphql'
      },{
        document: GetBalancesDocument,
        get rawSDL() {
          return printWithCache(GetBalancesDocument);
        },
        location: 'GetBalancesDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type GetAssetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAssetQuery = { asset?: Maybe<(
    Pick<Asset, 'id' | 'tvl'>
    & { assetDays: Array<Pick<AssetDay, 'id' | 'date' | 'tvl' | 'rewards'>> }
  )> };

export type GetTenderizersQueryVariables = Exact<{
  asset?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetTenderizersQuery = { tenderizers: Array<(
    Pick<Tenderizer, 'id' | 'symbol' | 'name' | 'validator' | 'tvl' | 'apr'>
    & { asset: Pick<Asset, 'id'>, tenderizerDays: Array<Pick<TenderizerDay, 'date' | 'id' | 'rewards' | 'apr'>> }
  )> };

export type GetTenderizerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTenderizerQuery = { tenderizer?: Maybe<(
    Pick<Tenderizer, 'id' | 'symbol' | 'name' | 'validator' | 'tvl' | 'apr' | 'shares'>
    & { asset: Pick<Asset, 'id'>, tenderizerDays: Array<Pick<TenderizerDay, 'id' | 'date' | 'tvl' | 'rewards' | 'shares'>> }
  )> };

export type GetUserQueryVariables = Exact<{
  user: Scalars['ID'];
}>;


export type GetUserQuery = { user?: Maybe<{ stakes?: Maybe<Array<(
      Pick<Stake, 'id' | 'shares'>
      & { tenderizer: (
        Pick<Tenderizer, 'id' | 'tvl' | 'shares' | 'validator' | 'symbol' | 'name'>
        & { asset: Pick<Asset, 'id'> }
      ) }
    )>>, unlocks?: Maybe<Array<(
      Pick<Unlock, 'id' | 'amount' | 'maturity' | 'redeemed'>
      & { tenderizer: (
        Pick<Tenderizer, 'id' | 'validator' | 'symbol' | 'name'>
        & { asset: Pick<Asset, 'id'> }
      ) }
    )>> }> };

export type GetUserMultichainQueryVariables = Exact<{
  user: Scalars['ID'];
  subgraphs: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetUserMultichainQuery = { user?: Maybe<{ stakes?: Maybe<Array<(
      Pick<Stake, 'id' | 'shares'>
      & { tenderizer: (
        Pick<Tenderizer, 'id' | 'tvl' | 'shares' | 'validator' | 'symbol' | 'name'>
        & { asset: Pick<Asset, 'id'> }
      ) }
    )>>, unlocks?: Maybe<Array<(
      Pick<Unlock, 'id' | 'amount' | 'maturity' | 'redeemed'>
      & { tenderizer: (
        Pick<Tenderizer, 'id' | 'validator' | 'symbol' | 'name'>
        & { asset: Pick<Asset, 'id'> }
      ) }
    )>> }> };

export type GetBalancesQueryVariables = Exact<{
  user: Scalars['String'];
  asset?: InputMaybe<Scalars['String']>;
}>;


export type GetBalancesQuery = { stakes: Array<(
    Pick<Stake, 'id' | 'shares'>
    & { tenderizer: Pick<Tenderizer, 'id' | 'tvl' | 'shares' | 'validator' | 'symbol' | 'name'> }
  )>, unlocks: Array<(
    Pick<Unlock, 'id' | 'amount' | 'maturity' | 'redeemed'>
    & { tenderizer: Pick<Tenderizer, 'id' | 'validator' | 'symbol' | 'name'> }
  )> };


export const GetAssetDocument = gql`
    query GetAsset($id: ID!) {
  asset(id: $id) {
    id
    tvl
    assetDays {
      id
      date
      tvl
      rewards
    }
  }
}
    ` as unknown as DocumentNode<GetAssetQuery, GetAssetQueryVariables>;
export const GetTenderizersDocument = gql`
    query GetTenderizers($asset: String, $first: Int = 1000, $skip: Int = 0) {
  tenderizers(first: $first, skip: $skip, where: {asset: $asset}) {
    id
    symbol
    name
    validator
    asset {
      id
    }
    tvl
    apr
    tenderizerDays(first: 30, orderBy: date, orderDirection: desc) {
      date
      id
      rewards
      apr
    }
  }
}
    ` as unknown as DocumentNode<GetTenderizersQuery, GetTenderizersQueryVariables>;
export const GetTenderizerDocument = gql`
    query GetTenderizer($id: ID!) {
  tenderizer(id: $id) {
    id
    symbol
    name
    validator
    asset {
      id
    }
    tvl
    apr
    shares
    tenderizerDays {
      id
      date
      tvl
      rewards
      shares
    }
  }
}
    ` as unknown as DocumentNode<GetTenderizerQuery, GetTenderizerQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($user: ID!) {
  user(id: $user) {
    stakes {
      id
      shares
      tenderizer {
        id
        tvl
        shares
        validator
        symbol
        name
        asset {
          id
        }
      }
    }
    unlocks(where: {redeemed: false}) {
      id
      amount
      maturity
      redeemed
      tenderizer {
        id
        validator
        symbol
        name
        asset {
          id
        }
      }
    }
  }
}
    ` as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserMultichainDocument = gql`
    query GetUserMultichain($user: ID!, $subgraphs: [String!]!) {
  user(id: $user) {
    stakes {
      id
      shares
      tenderizer {
        id
        tvl
        shares
        validator
        symbol
        name
        asset {
          id
        }
      }
    }
    unlocks(where: {redeemed: false}) {
      id
      amount
      maturity
      redeemed
      tenderizer {
        id
        validator
        symbol
        name
        asset {
          id
        }
      }
    }
  }
}
    ` as unknown as DocumentNode<GetUserMultichainQuery, GetUserMultichainQueryVariables>;
export const GetBalancesDocument = gql`
    query GetBalances($user: String!, $asset: String) {
  stakes(where: {user: $user, asset: $asset}) {
    id
    shares
    tenderizer {
      id
      tvl
      shares
      validator
      symbol
      name
    }
  }
  unlocks(where: {user: $user, asset: $asset, redeemed: false}) {
    id
    amount
    maturity
    redeemed
    tenderizer {
      id
      validator
      symbol
      name
    }
  }
}
    ` as unknown as DocumentNode<GetBalancesQuery, GetBalancesQueryVariables>;







export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetAsset(variables: GetAssetQueryVariables, options?: C): Promise<GetAssetQuery> {
      return requester<GetAssetQuery, GetAssetQueryVariables>(GetAssetDocument, variables, options) as Promise<GetAssetQuery>;
    },
    GetTenderizers(variables?: GetTenderizersQueryVariables, options?: C): Promise<GetTenderizersQuery> {
      return requester<GetTenderizersQuery, GetTenderizersQueryVariables>(GetTenderizersDocument, variables, options) as Promise<GetTenderizersQuery>;
    },
    GetTenderizer(variables: GetTenderizerQueryVariables, options?: C): Promise<GetTenderizerQuery> {
      return requester<GetTenderizerQuery, GetTenderizerQueryVariables>(GetTenderizerDocument, variables, options) as Promise<GetTenderizerQuery>;
    },
    GetUser(variables: GetUserQueryVariables, options?: C): Promise<GetUserQuery> {
      return requester<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables, options) as Promise<GetUserQuery>;
    },
    GetUserMultichain(variables: GetUserMultichainQueryVariables, options?: C): Promise<GetUserMultichainQuery> {
      return requester<GetUserMultichainQuery, GetUserMultichainQueryVariables>(GetUserMultichainDocument, variables, options) as Promise<GetUserMultichainQuery>;
    },
    GetBalances(variables: GetBalancesQueryVariables, options?: C): Promise<GetBalancesQuery> {
      return requester<GetBalancesQuery, GetBalancesQueryVariables>(GetBalancesDocument, variables, options) as Promise<GetBalancesQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;