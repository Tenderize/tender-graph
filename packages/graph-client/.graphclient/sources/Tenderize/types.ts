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
  Timestamp: any;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type LiquidityPosition = {
  id: Scalars['ID'];
  user: User;
  pool: SwapPool;
  shares: Scalars['BigInt'];
  netDeposits: Scalars['BigInt'];
};

export type LiquidityPosition_filter = {
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
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SwapPool_filter>;
  shares?: InputMaybe<Scalars['BigInt']>;
  shares_not?: InputMaybe<Scalars['BigInt']>;
  shares_gt?: InputMaybe<Scalars['BigInt']>;
  shares_lt?: InputMaybe<Scalars['BigInt']>;
  shares_gte?: InputMaybe<Scalars['BigInt']>;
  shares_lte?: InputMaybe<Scalars['BigInt']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDeposits?: InputMaybe<Scalars['BigInt']>;
  netDeposits_not?: InputMaybe<Scalars['BigInt']>;
  netDeposits_gt?: InputMaybe<Scalars['BigInt']>;
  netDeposits_lt?: InputMaybe<Scalars['BigInt']>;
  netDeposits_gte?: InputMaybe<Scalars['BigInt']>;
  netDeposits_lte?: InputMaybe<Scalars['BigInt']>;
  netDeposits_in?: InputMaybe<Array<Scalars['BigInt']>>;
  netDeposits_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityPosition_filter>>>;
};

export type LiquidityPosition_orderBy =
  | 'id'
  | 'user'
  | 'user__id'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__asset'
  | 'pool__lpToken'
  | 'pool__totalSupply'
  | 'pool__liabilities'
  | 'pool__unlocking'
  | 'pool__volume'
  | 'pool__volumeUSD'
  | 'pool__fees'
  | 'pool__feesUSD'
  | 'pool__lpRewards'
  | 'pool__lpRewardsUSD'
  | 'pool__treasuryCut'
  | 'pool__treasuryCutUSD'
  | 'shares'
  | 'netDeposits';

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
  swapPool?: Maybe<SwapPool>;
  swapPools: Array<SwapPool>;
  swapPoolDay?: Maybe<SwapPoolDay>;
  swapPoolDays: Array<SwapPoolDay>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  swapEvent?: Maybe<SwapEvent>;
  swapEvents: Array<SwapEvent>;
  swapDepositEvent?: Maybe<SwapDepositEvent>;
  swapDepositEvents: Array<SwapDepositEvent>;
  swapWithdrawEvent?: Maybe<SwapWithdrawEvent>;
  swapWithdrawEvents: Array<SwapWithdrawEvent>;
  swapLPTokenTransferEvent?: Maybe<SwapLPTokenTransferEvent>;
  swapLPTokenTransferEvents: Array<SwapLPTokenTransferEvent>;
  swapUnlockBuyEvent?: Maybe<SwapUnlockBuyEvent>;
  swapUnlockBuyEvents: Array<SwapUnlockBuyEvent>;
  swapUnlockRedeemedEvent?: Maybe<SwapUnlockRedeemedEvent>;
  swapUnlockRedeemedEvents: Array<SwapUnlockRedeemedEvent>;
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


export type QueryswapPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapPoolDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapPoolDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPoolDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapDepositEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapDepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapDepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapDepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapWithdrawEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapWithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapWithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapWithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapLPTokenTransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapLPTokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapLPTokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapLPTokenTransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockBuyEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockBuyEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapUnlockBuyEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockBuyEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryswapUnlockRedeemedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapUnlockRedeemedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockRedeemedEvent_filter>;
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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type Stake = {
  id: Scalars['ID'];
  user: User;
  asset: Asset;
  tenderizer: Tenderizer;
  shares: Scalars['BigDecimal'];
  netDeposits: Scalars['BigDecimal'];
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
  netDeposits?: InputMaybe<Scalars['BigDecimal']>;
  netDeposits_not?: InputMaybe<Scalars['BigDecimal']>;
  netDeposits_gt?: InputMaybe<Scalars['BigDecimal']>;
  netDeposits_lt?: InputMaybe<Scalars['BigDecimal']>;
  netDeposits_gte?: InputMaybe<Scalars['BigDecimal']>;
  netDeposits_lte?: InputMaybe<Scalars['BigDecimal']>;
  netDeposits_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  netDeposits_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay'
  | 'shares'
  | 'netDeposits';

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
  swapPool?: Maybe<SwapPool>;
  swapPools: Array<SwapPool>;
  swapPoolDay?: Maybe<SwapPoolDay>;
  swapPoolDays: Array<SwapPoolDay>;
  liquidityPosition?: Maybe<LiquidityPosition>;
  liquidityPositions: Array<LiquidityPosition>;
  swapEvent?: Maybe<SwapEvent>;
  swapEvents: Array<SwapEvent>;
  swapDepositEvent?: Maybe<SwapDepositEvent>;
  swapDepositEvents: Array<SwapDepositEvent>;
  swapWithdrawEvent?: Maybe<SwapWithdrawEvent>;
  swapWithdrawEvents: Array<SwapWithdrawEvent>;
  swapLPTokenTransferEvent?: Maybe<SwapLPTokenTransferEvent>;
  swapLPTokenTransferEvents: Array<SwapLPTokenTransferEvent>;
  swapUnlockBuyEvent?: Maybe<SwapUnlockBuyEvent>;
  swapUnlockBuyEvents: Array<SwapUnlockBuyEvent>;
  swapUnlockRedeemedEvent?: Maybe<SwapUnlockRedeemedEvent>;
  swapUnlockRedeemedEvents: Array<SwapUnlockRedeemedEvent>;
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


export type SubscriptionswapPoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapPool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolDayArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapPoolDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapPoolDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPoolDay_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapDepositEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapDepositEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapDepositEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapDepositEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapWithdrawEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapWithdrawEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapWithdrawEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapWithdrawEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapLPTokenTransferEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapLPTokenTransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapLPTokenTransferEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapLPTokenTransferEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockBuyEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockBuyEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapUnlockBuyEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockBuyEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockRedeemedEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionswapUnlockRedeemedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapUnlockRedeemedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapUnlockRedeemedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type SwapDepositEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  account: Scalars['String'];
  amount: Scalars['BigInt'];
  sharesMinted: Scalars['BigInt'];
  SwapPool: SwapPool;
};

export type SwapDepositEvent_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharesMinted?: InputMaybe<Scalars['BigInt']>;
  sharesMinted_not?: InputMaybe<Scalars['BigInt']>;
  sharesMinted_gt?: InputMaybe<Scalars['BigInt']>;
  sharesMinted_lt?: InputMaybe<Scalars['BigInt']>;
  sharesMinted_gte?: InputMaybe<Scalars['BigInt']>;
  sharesMinted_lte?: InputMaybe<Scalars['BigInt']>;
  sharesMinted_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharesMinted_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SwapPool?: InputMaybe<Scalars['String']>;
  SwapPool_not?: InputMaybe<Scalars['String']>;
  SwapPool_gt?: InputMaybe<Scalars['String']>;
  SwapPool_lt?: InputMaybe<Scalars['String']>;
  SwapPool_gte?: InputMaybe<Scalars['String']>;
  SwapPool_lte?: InputMaybe<Scalars['String']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapDepositEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapDepositEvent_filter>>>;
};

export type SwapDepositEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'amount'
  | 'sharesMinted'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  account: Scalars['String'];
  amount: Scalars['BigInt'];
  fee: Scalars['BigInt'];
  SwapPool: SwapPool;
};

export type SwapEvent_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SwapPool?: InputMaybe<Scalars['String']>;
  SwapPool_not?: InputMaybe<Scalars['String']>;
  SwapPool_gt?: InputMaybe<Scalars['String']>;
  SwapPool_lt?: InputMaybe<Scalars['String']>;
  SwapPool_gte?: InputMaybe<Scalars['String']>;
  SwapPool_lte?: InputMaybe<Scalars['String']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapEvent_filter>>>;
};

export type SwapEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'amount'
  | 'fee'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapLPTokenTransferEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  from: Scalars['String'];
  to: Scalars['String'];
  amount: Scalars['BigInt'];
  SwapPool: SwapPool;
};

export type SwapLPTokenTransferEvent_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SwapPool?: InputMaybe<Scalars['String']>;
  SwapPool_not?: InputMaybe<Scalars['String']>;
  SwapPool_gt?: InputMaybe<Scalars['String']>;
  SwapPool_lt?: InputMaybe<Scalars['String']>;
  SwapPool_gte?: InputMaybe<Scalars['String']>;
  SwapPool_lte?: InputMaybe<Scalars['String']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapLPTokenTransferEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapLPTokenTransferEvent_filter>>>;
};

export type SwapLPTokenTransferEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'from'
  | 'to'
  | 'amount'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapPool = {
  id: Scalars['ID'];
  createdAtTimestamp: Scalars['Int'];
  asset: Scalars['String'];
  lpToken: Scalars['String'];
  totalSupply: Scalars['BigInt'];
  liabilities: Scalars['BigInt'];
  unlocking: Scalars['BigInt'];
  volume: Scalars['BigInt'];
  volumeUSD: Scalars['BigDecimal'];
  fees: Scalars['BigInt'];
  feesUSD: Scalars['BigDecimal'];
  lpRewards: Scalars['BigInt'];
  lpRewardsUSD: Scalars['BigDecimal'];
  treasuryCut: Scalars['BigInt'];
  treasuryCutUSD: Scalars['BigDecimal'];
  poolDays: Array<SwapPoolDay>;
};


export type SwapPoolpoolDaysArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SwapPoolDay_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<SwapPoolDay_filter>;
};

export type SwapPoolDay = {
  id: Scalars['ID'];
  date: Scalars['Int'];
  pool: SwapPool;
  totalSupply: Scalars['BigInt'];
  liabilities: Scalars['BigInt'];
  unlocking: Scalars['BigInt'];
  volume: Scalars['BigInt'];
  volumeUSD: Scalars['BigDecimal'];
  fees: Scalars['BigInt'];
  feesUSD: Scalars['BigDecimal'];
  lpRewards: Scalars['BigInt'];
  lpRewardsUSD: Scalars['BigDecimal'];
  treasuryCut: Scalars['BigInt'];
  treasuryCutUSD: Scalars['BigDecimal'];
};

export type SwapPoolDay_filter = {
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
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<SwapPool_filter>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liabilities?: InputMaybe<Scalars['BigInt']>;
  liabilities_not?: InputMaybe<Scalars['BigInt']>;
  liabilities_gt?: InputMaybe<Scalars['BigInt']>;
  liabilities_lt?: InputMaybe<Scalars['BigInt']>;
  liabilities_gte?: InputMaybe<Scalars['BigInt']>;
  liabilities_lte?: InputMaybe<Scalars['BigInt']>;
  liabilities_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liabilities_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unlocking?: InputMaybe<Scalars['BigInt']>;
  unlocking_not?: InputMaybe<Scalars['BigInt']>;
  unlocking_gt?: InputMaybe<Scalars['BigInt']>;
  unlocking_lt?: InputMaybe<Scalars['BigInt']>;
  unlocking_gte?: InputMaybe<Scalars['BigInt']>;
  unlocking_lte?: InputMaybe<Scalars['BigInt']>;
  unlocking_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unlocking_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lpRewards?: InputMaybe<Scalars['BigInt']>;
  lpRewards_not?: InputMaybe<Scalars['BigInt']>;
  lpRewards_gt?: InputMaybe<Scalars['BigInt']>;
  lpRewards_lt?: InputMaybe<Scalars['BigInt']>;
  lpRewards_gte?: InputMaybe<Scalars['BigInt']>;
  lpRewards_lte?: InputMaybe<Scalars['BigInt']>;
  lpRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpRewardsUSD?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lpRewardsUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  treasuryCut?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_not?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_gt?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_lt?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_gte?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_lte?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  treasuryCut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  treasuryCutUSD?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  treasuryCutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapPoolDay_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapPoolDay_filter>>>;
};

export type SwapPoolDay_orderBy =
  | 'id'
  | 'date'
  | 'pool'
  | 'pool__id'
  | 'pool__createdAtTimestamp'
  | 'pool__asset'
  | 'pool__lpToken'
  | 'pool__totalSupply'
  | 'pool__liabilities'
  | 'pool__unlocking'
  | 'pool__volume'
  | 'pool__volumeUSD'
  | 'pool__fees'
  | 'pool__feesUSD'
  | 'pool__lpRewards'
  | 'pool__lpRewardsUSD'
  | 'pool__treasuryCut'
  | 'pool__treasuryCutUSD'
  | 'totalSupply'
  | 'liabilities'
  | 'unlocking'
  | 'volume'
  | 'volumeUSD'
  | 'fees'
  | 'feesUSD'
  | 'lpRewards'
  | 'lpRewardsUSD'
  | 'treasuryCut'
  | 'treasuryCutUSD';

export type SwapPool_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  createdAtTimestamp?: InputMaybe<Scalars['Int']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['Int']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['Int']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['Int']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['Int']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['Int']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  lpToken?: InputMaybe<Scalars['String']>;
  lpToken_not?: InputMaybe<Scalars['String']>;
  lpToken_gt?: InputMaybe<Scalars['String']>;
  lpToken_lt?: InputMaybe<Scalars['String']>;
  lpToken_gte?: InputMaybe<Scalars['String']>;
  lpToken_lte?: InputMaybe<Scalars['String']>;
  lpToken_in?: InputMaybe<Array<Scalars['String']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  lpToken_contains?: InputMaybe<Scalars['String']>;
  lpToken_contains_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_contains?: InputMaybe<Scalars['String']>;
  lpToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  lpToken_starts_with?: InputMaybe<Scalars['String']>;
  lpToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_starts_with?: InputMaybe<Scalars['String']>;
  lpToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_ends_with?: InputMaybe<Scalars['String']>;
  lpToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  lpToken_not_ends_with?: InputMaybe<Scalars['String']>;
  lpToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  totalSupply?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liabilities?: InputMaybe<Scalars['BigInt']>;
  liabilities_not?: InputMaybe<Scalars['BigInt']>;
  liabilities_gt?: InputMaybe<Scalars['BigInt']>;
  liabilities_lt?: InputMaybe<Scalars['BigInt']>;
  liabilities_gte?: InputMaybe<Scalars['BigInt']>;
  liabilities_lte?: InputMaybe<Scalars['BigInt']>;
  liabilities_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liabilities_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unlocking?: InputMaybe<Scalars['BigInt']>;
  unlocking_not?: InputMaybe<Scalars['BigInt']>;
  unlocking_gt?: InputMaybe<Scalars['BigInt']>;
  unlocking_lt?: InputMaybe<Scalars['BigInt']>;
  unlocking_gte?: InputMaybe<Scalars['BigInt']>;
  unlocking_lte?: InputMaybe<Scalars['BigInt']>;
  unlocking_in?: InputMaybe<Array<Scalars['BigInt']>>;
  unlocking_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['BigInt']>;
  volume_not?: InputMaybe<Scalars['BigInt']>;
  volume_gt?: InputMaybe<Scalars['BigInt']>;
  volume_lt?: InputMaybe<Scalars['BigInt']>;
  volume_gte?: InputMaybe<Scalars['BigInt']>;
  volume_lte?: InputMaybe<Scalars['BigInt']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees?: InputMaybe<Scalars['BigInt']>;
  fees_not?: InputMaybe<Scalars['BigInt']>;
  fees_gt?: InputMaybe<Scalars['BigInt']>;
  fees_lt?: InputMaybe<Scalars['BigInt']>;
  fees_gte?: InputMaybe<Scalars['BigInt']>;
  fees_lte?: InputMaybe<Scalars['BigInt']>;
  fees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lpRewards?: InputMaybe<Scalars['BigInt']>;
  lpRewards_not?: InputMaybe<Scalars['BigInt']>;
  lpRewards_gt?: InputMaybe<Scalars['BigInt']>;
  lpRewards_lt?: InputMaybe<Scalars['BigInt']>;
  lpRewards_gte?: InputMaybe<Scalars['BigInt']>;
  lpRewards_lte?: InputMaybe<Scalars['BigInt']>;
  lpRewards_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpRewards_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpRewardsUSD?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  lpRewardsUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  lpRewardsUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  treasuryCut?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_not?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_gt?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_lt?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_gte?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_lte?: InputMaybe<Scalars['BigInt']>;
  treasuryCut_in?: InputMaybe<Array<Scalars['BigInt']>>;
  treasuryCut_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  treasuryCutUSD?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_not?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_gt?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_lt?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_gte?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_lte?: InputMaybe<Scalars['BigDecimal']>;
  treasuryCutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  treasuryCutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  poolDays_?: InputMaybe<SwapPoolDay_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapPool_filter>>>;
};

export type SwapPool_orderBy =
  | 'id'
  | 'createdAtTimestamp'
  | 'asset'
  | 'lpToken'
  | 'totalSupply'
  | 'liabilities'
  | 'unlocking'
  | 'volume'
  | 'volumeUSD'
  | 'fees'
  | 'feesUSD'
  | 'lpRewards'
  | 'lpRewardsUSD'
  | 'treasuryCut'
  | 'treasuryCutUSD'
  | 'poolDays';

export type SwapUnlockBuyEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  account: Scalars['String'];
  unlock: Unlock;
  asset: Scalars['String'];
  amount: Scalars['BigInt'];
  reward: Scalars['BigInt'];
  lpFee: Scalars['BigInt'];
  SwapPool: SwapPool;
};

export type SwapUnlockBuyEvent_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reward?: InputMaybe<Scalars['BigInt']>;
  reward_not?: InputMaybe<Scalars['BigInt']>;
  reward_gt?: InputMaybe<Scalars['BigInt']>;
  reward_lt?: InputMaybe<Scalars['BigInt']>;
  reward_gte?: InputMaybe<Scalars['BigInt']>;
  reward_lte?: InputMaybe<Scalars['BigInt']>;
  reward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee?: InputMaybe<Scalars['BigInt']>;
  lpFee_not?: InputMaybe<Scalars['BigInt']>;
  lpFee_gt?: InputMaybe<Scalars['BigInt']>;
  lpFee_lt?: InputMaybe<Scalars['BigInt']>;
  lpFee_gte?: InputMaybe<Scalars['BigInt']>;
  lpFee_lte?: InputMaybe<Scalars['BigInt']>;
  lpFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SwapPool?: InputMaybe<Scalars['String']>;
  SwapPool_not?: InputMaybe<Scalars['String']>;
  SwapPool_gt?: InputMaybe<Scalars['String']>;
  SwapPool_lt?: InputMaybe<Scalars['String']>;
  SwapPool_gte?: InputMaybe<Scalars['String']>;
  SwapPool_lte?: InputMaybe<Scalars['String']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapUnlockBuyEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapUnlockBuyEvent_filter>>>;
};

export type SwapUnlockBuyEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'asset'
  | 'amount'
  | 'reward'
  | 'lpFee'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapUnlockRedeemedEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  account: Scalars['String'];
  unlock: Unlock;
  asset: Scalars['String'];
  amount: Scalars['BigInt'];
  reward: Scalars['BigInt'];
  lpFee: Scalars['BigInt'];
  SwapPool: SwapPool;
};

export type SwapUnlockRedeemedEvent_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
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
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reward?: InputMaybe<Scalars['BigInt']>;
  reward_not?: InputMaybe<Scalars['BigInt']>;
  reward_gt?: InputMaybe<Scalars['BigInt']>;
  reward_lt?: InputMaybe<Scalars['BigInt']>;
  reward_gte?: InputMaybe<Scalars['BigInt']>;
  reward_lte?: InputMaybe<Scalars['BigInt']>;
  reward_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reward_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee?: InputMaybe<Scalars['BigInt']>;
  lpFee_not?: InputMaybe<Scalars['BigInt']>;
  lpFee_gt?: InputMaybe<Scalars['BigInt']>;
  lpFee_lt?: InputMaybe<Scalars['BigInt']>;
  lpFee_gte?: InputMaybe<Scalars['BigInt']>;
  lpFee_lte?: InputMaybe<Scalars['BigInt']>;
  lpFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SwapPool?: InputMaybe<Scalars['String']>;
  SwapPool_not?: InputMaybe<Scalars['String']>;
  SwapPool_gt?: InputMaybe<Scalars['String']>;
  SwapPool_lt?: InputMaybe<Scalars['String']>;
  SwapPool_gte?: InputMaybe<Scalars['String']>;
  SwapPool_lte?: InputMaybe<Scalars['String']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapUnlockRedeemedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapUnlockRedeemedEvent_filter>>>;
};

export type SwapUnlockRedeemedEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'unlock'
  | 'unlock__id'
  | 'unlock__amount'
  | 'unlock__timestamp'
  | 'unlock__maturity'
  | 'unlock__redeemed'
  | 'asset'
  | 'amount'
  | 'reward'
  | 'lpFee'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type SwapWithdrawEvent = {
  id: Scalars['ID'];
  timestamp: Scalars['Int'];
  blockNumber: Scalars['BigInt'];
  account: Scalars['String'];
  amount: Scalars['BigInt'];
  sharesBurnt: Scalars['BigInt'];
  SwapPool: SwapPool;
};

export type SwapWithdrawEvent_filter = {
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
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  account?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharesBurnt?: InputMaybe<Scalars['BigInt']>;
  sharesBurnt_not?: InputMaybe<Scalars['BigInt']>;
  sharesBurnt_gt?: InputMaybe<Scalars['BigInt']>;
  sharesBurnt_lt?: InputMaybe<Scalars['BigInt']>;
  sharesBurnt_gte?: InputMaybe<Scalars['BigInt']>;
  sharesBurnt_lte?: InputMaybe<Scalars['BigInt']>;
  sharesBurnt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sharesBurnt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  SwapPool?: InputMaybe<Scalars['String']>;
  SwapPool_not?: InputMaybe<Scalars['String']>;
  SwapPool_gt?: InputMaybe<Scalars['String']>;
  SwapPool_lt?: InputMaybe<Scalars['String']>;
  SwapPool_gte?: InputMaybe<Scalars['String']>;
  SwapPool_lte?: InputMaybe<Scalars['String']>;
  SwapPool_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_not_in?: InputMaybe<Array<Scalars['String']>>;
  SwapPool_contains?: InputMaybe<Scalars['String']>;
  SwapPool_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains?: InputMaybe<Scalars['String']>;
  SwapPool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with?: InputMaybe<Scalars['String']>;
  SwapPool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  SwapPool_?: InputMaybe<SwapPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SwapWithdrawEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<SwapWithdrawEvent_filter>>>;
};

export type SwapWithdrawEvent_orderBy =
  | 'id'
  | 'timestamp'
  | 'blockNumber'
  | 'account'
  | 'amount'
  | 'sharesBurnt'
  | 'SwapPool'
  | 'SwapPool__id'
  | 'SwapPool__createdAtTimestamp'
  | 'SwapPool__asset'
  | 'SwapPool__lpToken'
  | 'SwapPool__totalSupply'
  | 'SwapPool__liabilities'
  | 'SwapPool__unlocking'
  | 'SwapPool__volume'
  | 'SwapPool__volumeUSD'
  | 'SwapPool__fees'
  | 'SwapPool__feesUSD'
  | 'SwapPool__lpRewards'
  | 'SwapPool__lpRewardsUSD'
  | 'SwapPool__treasuryCut'
  | 'SwapPool__treasuryCutUSD';

export type Tenderizer = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  validator: Scalars['String'];
  asset: Asset;
  createdAt: Scalars['Int'];
  tvl: Scalars['BigDecimal'];
  shares: Scalars['BigDecimal'];
  apr: Scalars['BigDecimal'];
  apy: Scalars['BigDecimal'];
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
  rewards: Scalars['BigDecimal'];
  apr: Scalars['BigDecimal'];
  apy: Scalars['BigDecimal'];
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
  rewards?: InputMaybe<Scalars['BigDecimal']>;
  rewards_not?: InputMaybe<Scalars['BigDecimal']>;
  rewards_gt?: InputMaybe<Scalars['BigDecimal']>;
  rewards_lt?: InputMaybe<Scalars['BigDecimal']>;
  rewards_gte?: InputMaybe<Scalars['BigDecimal']>;
  rewards_lte?: InputMaybe<Scalars['BigDecimal']>;
  rewards_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  rewards_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr?: InputMaybe<Scalars['BigDecimal']>;
  apr_not?: InputMaybe<Scalars['BigDecimal']>;
  apr_gt?: InputMaybe<Scalars['BigDecimal']>;
  apr_lt?: InputMaybe<Scalars['BigDecimal']>;
  apr_gte?: InputMaybe<Scalars['BigDecimal']>;
  apr_lte?: InputMaybe<Scalars['BigDecimal']>;
  apr_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apr_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apy?: InputMaybe<Scalars['BigDecimal']>;
  apy_not?: InputMaybe<Scalars['BigDecimal']>;
  apy_gt?: InputMaybe<Scalars['BigDecimal']>;
  apy_lt?: InputMaybe<Scalars['BigDecimal']>;
  apy_gte?: InputMaybe<Scalars['BigDecimal']>;
  apy_lte?: InputMaybe<Scalars['BigDecimal']>;
  apy_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apy_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay'
  | 'shares'
  | 'tvl'
  | 'startStake'
  | 'rewards'
  | 'apr'
  | 'apy';

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
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
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
  apy?: InputMaybe<Scalars['BigDecimal']>;
  apy_not?: InputMaybe<Scalars['BigDecimal']>;
  apy_gt?: InputMaybe<Scalars['BigDecimal']>;
  apy_lt?: InputMaybe<Scalars['BigDecimal']>;
  apy_gte?: InputMaybe<Scalars['BigDecimal']>;
  apy_lte?: InputMaybe<Scalars['BigDecimal']>;
  apy_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  apy_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
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
  | 'createdAt'
  | 'tvl'
  | 'shares'
  | 'apr'
  | 'apy'
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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay'
  | 'amount'
  | 'timestamp'
  | 'maturity'
  | 'redeemed';

export type User = {
  id: Scalars['ID'];
  stakes?: Maybe<Array<Stake>>;
  unlocks?: Maybe<Array<Unlock>>;
  liquidityPositions?: Maybe<Array<LiquidityPosition>>;
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


export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityPosition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LiquidityPosition_filter>;
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
  liquidityPositions_?: InputMaybe<LiquidityPosition_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'stakes'
  | 'unlocks'
  | 'liquidityPositions';

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
  | 'tenderizer__createdAt'
  | 'tenderizer__tvl'
  | 'tenderizer__shares'
  | 'tenderizer__apr'
  | 'tenderizer__apy'
  | 'tenderizer__lastUpdateDay';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
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
  /** null **/
  swapPool: InContextSdkMethod<Query['swapPool'], QueryswapPoolArgs, MeshContext>,
  /** null **/
  swapPools: InContextSdkMethod<Query['swapPools'], QueryswapPoolsArgs, MeshContext>,
  /** null **/
  swapPoolDay: InContextSdkMethod<Query['swapPoolDay'], QueryswapPoolDayArgs, MeshContext>,
  /** null **/
  swapPoolDays: InContextSdkMethod<Query['swapPoolDays'], QueryswapPoolDaysArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Query['liquidityPosition'], QueryliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Query['liquidityPositions'], QueryliquidityPositionsArgs, MeshContext>,
  /** null **/
  swapEvent: InContextSdkMethod<Query['swapEvent'], QueryswapEventArgs, MeshContext>,
  /** null **/
  swapEvents: InContextSdkMethod<Query['swapEvents'], QueryswapEventsArgs, MeshContext>,
  /** null **/
  swapDepositEvent: InContextSdkMethod<Query['swapDepositEvent'], QueryswapDepositEventArgs, MeshContext>,
  /** null **/
  swapDepositEvents: InContextSdkMethod<Query['swapDepositEvents'], QueryswapDepositEventsArgs, MeshContext>,
  /** null **/
  swapWithdrawEvent: InContextSdkMethod<Query['swapWithdrawEvent'], QueryswapWithdrawEventArgs, MeshContext>,
  /** null **/
  swapWithdrawEvents: InContextSdkMethod<Query['swapWithdrawEvents'], QueryswapWithdrawEventsArgs, MeshContext>,
  /** null **/
  swapLPTokenTransferEvent: InContextSdkMethod<Query['swapLPTokenTransferEvent'], QueryswapLPTokenTransferEventArgs, MeshContext>,
  /** null **/
  swapLPTokenTransferEvents: InContextSdkMethod<Query['swapLPTokenTransferEvents'], QueryswapLPTokenTransferEventsArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvent: InContextSdkMethod<Query['swapUnlockBuyEvent'], QueryswapUnlockBuyEventArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvents: InContextSdkMethod<Query['swapUnlockBuyEvents'], QueryswapUnlockBuyEventsArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvent: InContextSdkMethod<Query['swapUnlockRedeemedEvent'], QueryswapUnlockRedeemedEventArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvents: InContextSdkMethod<Query['swapUnlockRedeemedEvents'], QueryswapUnlockRedeemedEventsArgs, MeshContext>,
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
  /** null **/
  swapPool: InContextSdkMethod<Subscription['swapPool'], SubscriptionswapPoolArgs, MeshContext>,
  /** null **/
  swapPools: InContextSdkMethod<Subscription['swapPools'], SubscriptionswapPoolsArgs, MeshContext>,
  /** null **/
  swapPoolDay: InContextSdkMethod<Subscription['swapPoolDay'], SubscriptionswapPoolDayArgs, MeshContext>,
  /** null **/
  swapPoolDays: InContextSdkMethod<Subscription['swapPoolDays'], SubscriptionswapPoolDaysArgs, MeshContext>,
  /** null **/
  liquidityPosition: InContextSdkMethod<Subscription['liquidityPosition'], SubscriptionliquidityPositionArgs, MeshContext>,
  /** null **/
  liquidityPositions: InContextSdkMethod<Subscription['liquidityPositions'], SubscriptionliquidityPositionsArgs, MeshContext>,
  /** null **/
  swapEvent: InContextSdkMethod<Subscription['swapEvent'], SubscriptionswapEventArgs, MeshContext>,
  /** null **/
  swapEvents: InContextSdkMethod<Subscription['swapEvents'], SubscriptionswapEventsArgs, MeshContext>,
  /** null **/
  swapDepositEvent: InContextSdkMethod<Subscription['swapDepositEvent'], SubscriptionswapDepositEventArgs, MeshContext>,
  /** null **/
  swapDepositEvents: InContextSdkMethod<Subscription['swapDepositEvents'], SubscriptionswapDepositEventsArgs, MeshContext>,
  /** null **/
  swapWithdrawEvent: InContextSdkMethod<Subscription['swapWithdrawEvent'], SubscriptionswapWithdrawEventArgs, MeshContext>,
  /** null **/
  swapWithdrawEvents: InContextSdkMethod<Subscription['swapWithdrawEvents'], SubscriptionswapWithdrawEventsArgs, MeshContext>,
  /** null **/
  swapLPTokenTransferEvent: InContextSdkMethod<Subscription['swapLPTokenTransferEvent'], SubscriptionswapLPTokenTransferEventArgs, MeshContext>,
  /** null **/
  swapLPTokenTransferEvents: InContextSdkMethod<Subscription['swapLPTokenTransferEvents'], SubscriptionswapLPTokenTransferEventsArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvent: InContextSdkMethod<Subscription['swapUnlockBuyEvent'], SubscriptionswapUnlockBuyEventArgs, MeshContext>,
  /** null **/
  swapUnlockBuyEvents: InContextSdkMethod<Subscription['swapUnlockBuyEvents'], SubscriptionswapUnlockBuyEventsArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvent: InContextSdkMethod<Subscription['swapUnlockRedeemedEvent'], SubscriptionswapUnlockRedeemedEventArgs, MeshContext>,
  /** null **/
  swapUnlockRedeemedEvents: InContextSdkMethod<Subscription['swapUnlockRedeemedEvents'], SubscriptionswapUnlockRedeemedEventsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["Tenderize"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
