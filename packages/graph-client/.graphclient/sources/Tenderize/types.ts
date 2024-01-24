// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace TenderizeTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  tvl: Scalars['BigDecimal'];
  rewards: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
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
  | 'tvl'
  | 'rewards'
  | 'shares';

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

  export type QuerySdk = {
      /** null **/
  asset: InContextSdkMethod<Query['asset'], QueryassetArgs, MeshContext>,
  /** null **/
  assets: InContextSdkMethod<Query['assets'], QueryassetsArgs, MeshContext>,
  /** null **/
  tenderizer: InContextSdkMethod<Query['tenderizer'], QuerytenderizerArgs, MeshContext>,
  /** null **/
  tenderizers: InContextSdkMethod<Query['tenderizers'], QuerytenderizersArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  stake: InContextSdkMethod<Query['stake'], QuerystakeArgs, MeshContext>,
  /** null **/
  stakes: InContextSdkMethod<Query['stakes'], QuerystakesArgs, MeshContext>,
  /** null **/
  unlock: InContextSdkMethod<Query['unlock'], QueryunlockArgs, MeshContext>,
  /** null **/
  unlocks: InContextSdkMethod<Query['unlocks'], QueryunlocksArgs, MeshContext>,
  /** null **/
  assetDay: InContextSdkMethod<Query['assetDay'], QueryassetDayArgs, MeshContext>,
  /** null **/
  assetDays: InContextSdkMethod<Query['assetDays'], QueryassetDaysArgs, MeshContext>,
  /** null **/
  tenderizerDay: InContextSdkMethod<Query['tenderizerDay'], QuerytenderizerDayArgs, MeshContext>,
  /** null **/
  tenderizerDays: InContextSdkMethod<Query['tenderizerDays'], QuerytenderizerDaysArgs, MeshContext>,
  /** null **/
  depositEvent: InContextSdkMethod<Query['depositEvent'], QuerydepositEventArgs, MeshContext>,
  /** null **/
  depositEvents: InContextSdkMethod<Query['depositEvents'], QuerydepositEventsArgs, MeshContext>,
  /** null **/
  unlockEvent: InContextSdkMethod<Query['unlockEvent'], QueryunlockEventArgs, MeshContext>,
  /** null **/
  unlockEvents: InContextSdkMethod<Query['unlockEvents'], QueryunlockEventsArgs, MeshContext>,
  /** null **/
  withdrawEvent: InContextSdkMethod<Query['withdrawEvent'], QuerywithdrawEventArgs, MeshContext>,
  /** null **/
  withdrawEvents: InContextSdkMethod<Query['withdrawEvents'], QuerywithdrawEventsArgs, MeshContext>,
  /** null **/
  rebaseEvent: InContextSdkMethod<Query['rebaseEvent'], QueryrebaseEventArgs, MeshContext>,
  /** null **/
  rebaseEvents: InContextSdkMethod<Query['rebaseEvents'], QueryrebaseEventsArgs, MeshContext>,
  /** null **/
  tokenTransferEvent: InContextSdkMethod<Query['tokenTransferEvent'], QuerytokenTransferEventArgs, MeshContext>,
  /** null **/
  tokenTransferEvents: InContextSdkMethod<Query['tokenTransferEvents'], QuerytokenTransferEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  asset: InContextSdkMethod<Subscription['asset'], SubscriptionassetArgs, MeshContext>,
  /** null **/
  assets: InContextSdkMethod<Subscription['assets'], SubscriptionassetsArgs, MeshContext>,
  /** null **/
  tenderizer: InContextSdkMethod<Subscription['tenderizer'], SubscriptiontenderizerArgs, MeshContext>,
  /** null **/
  tenderizers: InContextSdkMethod<Subscription['tenderizers'], SubscriptiontenderizersArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  stake: InContextSdkMethod<Subscription['stake'], SubscriptionstakeArgs, MeshContext>,
  /** null **/
  stakes: InContextSdkMethod<Subscription['stakes'], SubscriptionstakesArgs, MeshContext>,
  /** null **/
  unlock: InContextSdkMethod<Subscription['unlock'], SubscriptionunlockArgs, MeshContext>,
  /** null **/
  unlocks: InContextSdkMethod<Subscription['unlocks'], SubscriptionunlocksArgs, MeshContext>,
  /** null **/
  assetDay: InContextSdkMethod<Subscription['assetDay'], SubscriptionassetDayArgs, MeshContext>,
  /** null **/
  assetDays: InContextSdkMethod<Subscription['assetDays'], SubscriptionassetDaysArgs, MeshContext>,
  /** null **/
  tenderizerDay: InContextSdkMethod<Subscription['tenderizerDay'], SubscriptiontenderizerDayArgs, MeshContext>,
  /** null **/
  tenderizerDays: InContextSdkMethod<Subscription['tenderizerDays'], SubscriptiontenderizerDaysArgs, MeshContext>,
  /** null **/
  depositEvent: InContextSdkMethod<Subscription['depositEvent'], SubscriptiondepositEventArgs, MeshContext>,
  /** null **/
  depositEvents: InContextSdkMethod<Subscription['depositEvents'], SubscriptiondepositEventsArgs, MeshContext>,
  /** null **/
  unlockEvent: InContextSdkMethod<Subscription['unlockEvent'], SubscriptionunlockEventArgs, MeshContext>,
  /** null **/
  unlockEvents: InContextSdkMethod<Subscription['unlockEvents'], SubscriptionunlockEventsArgs, MeshContext>,
  /** null **/
  withdrawEvent: InContextSdkMethod<Subscription['withdrawEvent'], SubscriptionwithdrawEventArgs, MeshContext>,
  /** null **/
  withdrawEvents: InContextSdkMethod<Subscription['withdrawEvents'], SubscriptionwithdrawEventsArgs, MeshContext>,
  /** null **/
  rebaseEvent: InContextSdkMethod<Subscription['rebaseEvent'], SubscriptionrebaseEventArgs, MeshContext>,
  /** null **/
  rebaseEvents: InContextSdkMethod<Subscription['rebaseEvents'], SubscriptionrebaseEventsArgs, MeshContext>,
  /** null **/
  tokenTransferEvent: InContextSdkMethod<Subscription['tokenTransferEvent'], SubscriptiontokenTransferEventArgs, MeshContext>,
  /** null **/
  tokenTransferEvents: InContextSdkMethod<Subscription['tokenTransferEvents'], SubscriptiontokenTransferEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["Tenderize"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      ["subgraph"]: Scalars['ID']
    };
}
