// @ts-nocheck

import { InContextSdkMethod } from "@graphql-mesh/types";
import { MeshContext } from "@graphql-mesh/runtime";

export namespace TenderizeTenderizeLocalhostTypes {
  export type Maybe<T> = T | null;
  export type InputMaybe<T> = Maybe<T>;
  export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
  };
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
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
  };

  export type Asset = {
    id: Scalars["ID"];
    tvl: Scalars["BigDecimal"];
    tenderizerCount: Scalars["Int"];
    assetDays: Array<AssetDay>;
  };

  export type AssetassetDaysArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<AssetDay_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AssetDay_filter>;
  };

  export type AssetDay = {
    id: Scalars["ID"];
    date: Scalars["Int"];
    asset: Asset;
    tvl: Scalars["BigDecimal"];
    rewards: Scalars["BigDecimal"];
  };

  export type AssetDay_filter = {
    id?: InputMaybe<Scalars["ID"]>;
    id_not?: InputMaybe<Scalars["ID"]>;
    id_gt?: InputMaybe<Scalars["ID"]>;
    id_lt?: InputMaybe<Scalars["ID"]>;
    id_gte?: InputMaybe<Scalars["ID"]>;
    id_lte?: InputMaybe<Scalars["ID"]>;
    id_in?: InputMaybe<Array<Scalars["ID"]>>;
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
    date?: InputMaybe<Scalars["Int"]>;
    date_not?: InputMaybe<Scalars["Int"]>;
    date_gt?: InputMaybe<Scalars["Int"]>;
    date_lt?: InputMaybe<Scalars["Int"]>;
    date_gte?: InputMaybe<Scalars["Int"]>;
    date_lte?: InputMaybe<Scalars["Int"]>;
    date_in?: InputMaybe<Array<Scalars["Int"]>>;
    date_not_in?: InputMaybe<Array<Scalars["Int"]>>;
    asset?: InputMaybe<Scalars["String"]>;
    asset_not?: InputMaybe<Scalars["String"]>;
    asset_gt?: InputMaybe<Scalars["String"]>;
    asset_lt?: InputMaybe<Scalars["String"]>;
    asset_gte?: InputMaybe<Scalars["String"]>;
    asset_lte?: InputMaybe<Scalars["String"]>;
    asset_in?: InputMaybe<Array<Scalars["String"]>>;
    asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
    asset_contains?: InputMaybe<Scalars["String"]>;
    asset_contains_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_contains?: InputMaybe<Scalars["String"]>;
    asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    asset_starts_with?: InputMaybe<Scalars["String"]>;
    asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_starts_with?: InputMaybe<Scalars["String"]>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_ends_with?: InputMaybe<Scalars["String"]>;
    asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_ends_with?: InputMaybe<Scalars["String"]>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_?: InputMaybe<Asset_filter>;
    tvl?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_not?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_gt?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_lt?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_gte?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_lte?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    tvl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    rewards?: InputMaybe<Scalars["BigDecimal"]>;
    rewards_not?: InputMaybe<Scalars["BigDecimal"]>;
    rewards_gt?: InputMaybe<Scalars["BigDecimal"]>;
    rewards_lt?: InputMaybe<Scalars["BigDecimal"]>;
    rewards_gte?: InputMaybe<Scalars["BigDecimal"]>;
    rewards_lte?: InputMaybe<Scalars["BigDecimal"]>;
    rewards_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    rewards_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type AssetDay_orderBy = "id" | "date" | "asset" | "tvl" | "rewards";

  export type Asset_filter = {
    id?: InputMaybe<Scalars["ID"]>;
    id_not?: InputMaybe<Scalars["ID"]>;
    id_gt?: InputMaybe<Scalars["ID"]>;
    id_lt?: InputMaybe<Scalars["ID"]>;
    id_gte?: InputMaybe<Scalars["ID"]>;
    id_lte?: InputMaybe<Scalars["ID"]>;
    id_in?: InputMaybe<Array<Scalars["ID"]>>;
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
    tvl?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_not?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_gt?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_lt?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_gte?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_lte?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    tvl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    tenderizerCount?: InputMaybe<Scalars["Int"]>;
    tenderizerCount_not?: InputMaybe<Scalars["Int"]>;
    tenderizerCount_gt?: InputMaybe<Scalars["Int"]>;
    tenderizerCount_lt?: InputMaybe<Scalars["Int"]>;
    tenderizerCount_gte?: InputMaybe<Scalars["Int"]>;
    tenderizerCount_lte?: InputMaybe<Scalars["Int"]>;
    tenderizerCount_in?: InputMaybe<Array<Scalars["Int"]>>;
    tenderizerCount_not_in?: InputMaybe<Array<Scalars["Int"]>>;
    assetDays_?: InputMaybe<AssetDay_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Asset_orderBy = "id" | "tvl" | "tenderizerCount" | "assetDays";

  export type BlockChangedFilter = {
    number_gte: Scalars["Int"];
  };

  export type Block_height = {
    hash?: InputMaybe<Scalars["Bytes"]>;
    number?: InputMaybe<Scalars["Int"]>;
    number_gte?: InputMaybe<Scalars["Int"]>;
  };

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = "asc" | "desc";

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
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type QueryassetArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryassetsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Asset_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Asset_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytenderizerArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerytenderizersArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Tenderizer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Tenderizer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryuserArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryusersArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<User_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<User_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerystakeArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QuerystakesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Stake_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Stake_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryunlockArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryunlocksArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Unlock_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Unlock_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryassetDayArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type QueryassetDaysArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<AssetDay_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AssetDay_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type Stake = {
    id: Scalars["ID"];
    user: User;
    asset: Asset;
    tenderizer: Tenderizer;
    shares: Scalars["BigDecimal"];
  };

  export type Stake_filter = {
    id?: InputMaybe<Scalars["ID"]>;
    id_not?: InputMaybe<Scalars["ID"]>;
    id_gt?: InputMaybe<Scalars["ID"]>;
    id_lt?: InputMaybe<Scalars["ID"]>;
    id_gte?: InputMaybe<Scalars["ID"]>;
    id_lte?: InputMaybe<Scalars["ID"]>;
    id_in?: InputMaybe<Array<Scalars["ID"]>>;
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
    user?: InputMaybe<Scalars["String"]>;
    user_not?: InputMaybe<Scalars["String"]>;
    user_gt?: InputMaybe<Scalars["String"]>;
    user_lt?: InputMaybe<Scalars["String"]>;
    user_gte?: InputMaybe<Scalars["String"]>;
    user_lte?: InputMaybe<Scalars["String"]>;
    user_in?: InputMaybe<Array<Scalars["String"]>>;
    user_not_in?: InputMaybe<Array<Scalars["String"]>>;
    user_contains?: InputMaybe<Scalars["String"]>;
    user_contains_nocase?: InputMaybe<Scalars["String"]>;
    user_not_contains?: InputMaybe<Scalars["String"]>;
    user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    user_starts_with?: InputMaybe<Scalars["String"]>;
    user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    user_not_starts_with?: InputMaybe<Scalars["String"]>;
    user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    user_ends_with?: InputMaybe<Scalars["String"]>;
    user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    user_not_ends_with?: InputMaybe<Scalars["String"]>;
    user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    user_?: InputMaybe<User_filter>;
    asset?: InputMaybe<Scalars["String"]>;
    asset_not?: InputMaybe<Scalars["String"]>;
    asset_gt?: InputMaybe<Scalars["String"]>;
    asset_lt?: InputMaybe<Scalars["String"]>;
    asset_gte?: InputMaybe<Scalars["String"]>;
    asset_lte?: InputMaybe<Scalars["String"]>;
    asset_in?: InputMaybe<Array<Scalars["String"]>>;
    asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
    asset_contains?: InputMaybe<Scalars["String"]>;
    asset_contains_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_contains?: InputMaybe<Scalars["String"]>;
    asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    asset_starts_with?: InputMaybe<Scalars["String"]>;
    asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_starts_with?: InputMaybe<Scalars["String"]>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_ends_with?: InputMaybe<Scalars["String"]>;
    asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_ends_with?: InputMaybe<Scalars["String"]>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_?: InputMaybe<Asset_filter>;
    tenderizer?: InputMaybe<Scalars["String"]>;
    tenderizer_not?: InputMaybe<Scalars["String"]>;
    tenderizer_gt?: InputMaybe<Scalars["String"]>;
    tenderizer_lt?: InputMaybe<Scalars["String"]>;
    tenderizer_gte?: InputMaybe<Scalars["String"]>;
    tenderizer_lte?: InputMaybe<Scalars["String"]>;
    tenderizer_in?: InputMaybe<Array<Scalars["String"]>>;
    tenderizer_not_in?: InputMaybe<Array<Scalars["String"]>>;
    tenderizer_contains?: InputMaybe<Scalars["String"]>;
    tenderizer_contains_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_not_contains?: InputMaybe<Scalars["String"]>;
    tenderizer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_starts_with?: InputMaybe<Scalars["String"]>;
    tenderizer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_not_starts_with?: InputMaybe<Scalars["String"]>;
    tenderizer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_ends_with?: InputMaybe<Scalars["String"]>;
    tenderizer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_not_ends_with?: InputMaybe<Scalars["String"]>;
    tenderizer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_?: InputMaybe<Tenderizer_filter>;
    shares?: InputMaybe<Scalars["BigDecimal"]>;
    shares_not?: InputMaybe<Scalars["BigDecimal"]>;
    shares_gt?: InputMaybe<Scalars["BigDecimal"]>;
    shares_lt?: InputMaybe<Scalars["BigDecimal"]>;
    shares_gte?: InputMaybe<Scalars["BigDecimal"]>;
    shares_lte?: InputMaybe<Scalars["BigDecimal"]>;
    shares_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    shares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Stake_orderBy = "id" | "user" | "asset" | "tenderizer" | "shares";

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
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
  };

  export type SubscriptionassetArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionassetsArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Asset_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Asset_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontenderizerArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptiontenderizersArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Tenderizer_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Tenderizer_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionuserArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionusersArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<User_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<User_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionstakeArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionstakesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Stake_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Stake_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionunlockArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionunlocksArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Unlock_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Unlock_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionassetDayArgs = {
    id: Scalars["ID"];
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type SubscriptionassetDaysArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<AssetDay_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<AssetDay_filter>;
    block?: InputMaybe<Block_height>;
    subgraphError?: _SubgraphErrorPolicy_;
  };

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>;
  };

  export type Tenderizer = {
    id: Scalars["ID"];
    symbol: Scalars["String"];
    name: Scalars["String"];
    validator: Scalars["String"];
    asset: Asset;
    tvl: Scalars["BigDecimal"];
    shares: Scalars["BigDecimal"];
    stakes: Array<Stake>;
  };

  export type TenderizerstakesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Stake_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Stake_filter>;
  };

  export type Tenderizer_filter = {
    id?: InputMaybe<Scalars["ID"]>;
    id_not?: InputMaybe<Scalars["ID"]>;
    id_gt?: InputMaybe<Scalars["ID"]>;
    id_lt?: InputMaybe<Scalars["ID"]>;
    id_gte?: InputMaybe<Scalars["ID"]>;
    id_lte?: InputMaybe<Scalars["ID"]>;
    id_in?: InputMaybe<Array<Scalars["ID"]>>;
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
    symbol?: InputMaybe<Scalars["String"]>;
    symbol_not?: InputMaybe<Scalars["String"]>;
    symbol_gt?: InputMaybe<Scalars["String"]>;
    symbol_lt?: InputMaybe<Scalars["String"]>;
    symbol_gte?: InputMaybe<Scalars["String"]>;
    symbol_lte?: InputMaybe<Scalars["String"]>;
    symbol_in?: InputMaybe<Array<Scalars["String"]>>;
    symbol_not_in?: InputMaybe<Array<Scalars["String"]>>;
    symbol_contains?: InputMaybe<Scalars["String"]>;
    symbol_contains_nocase?: InputMaybe<Scalars["String"]>;
    symbol_not_contains?: InputMaybe<Scalars["String"]>;
    symbol_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    symbol_starts_with?: InputMaybe<Scalars["String"]>;
    symbol_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    symbol_not_starts_with?: InputMaybe<Scalars["String"]>;
    symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    symbol_ends_with?: InputMaybe<Scalars["String"]>;
    symbol_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    symbol_not_ends_with?: InputMaybe<Scalars["String"]>;
    symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    name_not?: InputMaybe<Scalars["String"]>;
    name_gt?: InputMaybe<Scalars["String"]>;
    name_lt?: InputMaybe<Scalars["String"]>;
    name_gte?: InputMaybe<Scalars["String"]>;
    name_lte?: InputMaybe<Scalars["String"]>;
    name_in?: InputMaybe<Array<Scalars["String"]>>;
    name_not_in?: InputMaybe<Array<Scalars["String"]>>;
    name_contains?: InputMaybe<Scalars["String"]>;
    name_contains_nocase?: InputMaybe<Scalars["String"]>;
    name_not_contains?: InputMaybe<Scalars["String"]>;
    name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    name_starts_with?: InputMaybe<Scalars["String"]>;
    name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    name_not_starts_with?: InputMaybe<Scalars["String"]>;
    name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    name_ends_with?: InputMaybe<Scalars["String"]>;
    name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    name_not_ends_with?: InputMaybe<Scalars["String"]>;
    name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    validator?: InputMaybe<Scalars["String"]>;
    validator_not?: InputMaybe<Scalars["String"]>;
    validator_gt?: InputMaybe<Scalars["String"]>;
    validator_lt?: InputMaybe<Scalars["String"]>;
    validator_gte?: InputMaybe<Scalars["String"]>;
    validator_lte?: InputMaybe<Scalars["String"]>;
    validator_in?: InputMaybe<Array<Scalars["String"]>>;
    validator_not_in?: InputMaybe<Array<Scalars["String"]>>;
    validator_contains?: InputMaybe<Scalars["String"]>;
    validator_contains_nocase?: InputMaybe<Scalars["String"]>;
    validator_not_contains?: InputMaybe<Scalars["String"]>;
    validator_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    validator_starts_with?: InputMaybe<Scalars["String"]>;
    validator_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    validator_not_starts_with?: InputMaybe<Scalars["String"]>;
    validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    validator_ends_with?: InputMaybe<Scalars["String"]>;
    validator_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    validator_not_ends_with?: InputMaybe<Scalars["String"]>;
    validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset?: InputMaybe<Scalars["String"]>;
    asset_not?: InputMaybe<Scalars["String"]>;
    asset_gt?: InputMaybe<Scalars["String"]>;
    asset_lt?: InputMaybe<Scalars["String"]>;
    asset_gte?: InputMaybe<Scalars["String"]>;
    asset_lte?: InputMaybe<Scalars["String"]>;
    asset_in?: InputMaybe<Array<Scalars["String"]>>;
    asset_not_in?: InputMaybe<Array<Scalars["String"]>>;
    asset_contains?: InputMaybe<Scalars["String"]>;
    asset_contains_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_contains?: InputMaybe<Scalars["String"]>;
    asset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    asset_starts_with?: InputMaybe<Scalars["String"]>;
    asset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_starts_with?: InputMaybe<Scalars["String"]>;
    asset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_ends_with?: InputMaybe<Scalars["String"]>;
    asset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_not_ends_with?: InputMaybe<Scalars["String"]>;
    asset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    asset_?: InputMaybe<Asset_filter>;
    tvl?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_not?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_gt?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_lt?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_gte?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_lte?: InputMaybe<Scalars["BigDecimal"]>;
    tvl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    tvl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    shares?: InputMaybe<Scalars["BigDecimal"]>;
    shares_not?: InputMaybe<Scalars["BigDecimal"]>;
    shares_gt?: InputMaybe<Scalars["BigDecimal"]>;
    shares_lt?: InputMaybe<Scalars["BigDecimal"]>;
    shares_gte?: InputMaybe<Scalars["BigDecimal"]>;
    shares_lte?: InputMaybe<Scalars["BigDecimal"]>;
    shares_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    shares_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    stakes_?: InputMaybe<Stake_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Tenderizer_orderBy =
    | "id"
    | "symbol"
    | "name"
    | "validator"
    | "asset"
    | "tvl"
    | "shares"
    | "stakes";

  export type Unlock = {
    id: Scalars["ID"];
    user: User;
    tenderizer: Tenderizer;
    amount: Scalars["BigDecimal"];
    maturity: Scalars["BigInt"];
    redeemed: Scalars["Boolean"];
  };

  export type Unlock_filter = {
    id?: InputMaybe<Scalars["ID"]>;
    id_not?: InputMaybe<Scalars["ID"]>;
    id_gt?: InputMaybe<Scalars["ID"]>;
    id_lt?: InputMaybe<Scalars["ID"]>;
    id_gte?: InputMaybe<Scalars["ID"]>;
    id_lte?: InputMaybe<Scalars["ID"]>;
    id_in?: InputMaybe<Array<Scalars["ID"]>>;
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
    user?: InputMaybe<Scalars["String"]>;
    user_not?: InputMaybe<Scalars["String"]>;
    user_gt?: InputMaybe<Scalars["String"]>;
    user_lt?: InputMaybe<Scalars["String"]>;
    user_gte?: InputMaybe<Scalars["String"]>;
    user_lte?: InputMaybe<Scalars["String"]>;
    user_in?: InputMaybe<Array<Scalars["String"]>>;
    user_not_in?: InputMaybe<Array<Scalars["String"]>>;
    user_contains?: InputMaybe<Scalars["String"]>;
    user_contains_nocase?: InputMaybe<Scalars["String"]>;
    user_not_contains?: InputMaybe<Scalars["String"]>;
    user_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    user_starts_with?: InputMaybe<Scalars["String"]>;
    user_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    user_not_starts_with?: InputMaybe<Scalars["String"]>;
    user_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    user_ends_with?: InputMaybe<Scalars["String"]>;
    user_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    user_not_ends_with?: InputMaybe<Scalars["String"]>;
    user_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    user_?: InputMaybe<User_filter>;
    tenderizer?: InputMaybe<Scalars["String"]>;
    tenderizer_not?: InputMaybe<Scalars["String"]>;
    tenderizer_gt?: InputMaybe<Scalars["String"]>;
    tenderizer_lt?: InputMaybe<Scalars["String"]>;
    tenderizer_gte?: InputMaybe<Scalars["String"]>;
    tenderizer_lte?: InputMaybe<Scalars["String"]>;
    tenderizer_in?: InputMaybe<Array<Scalars["String"]>>;
    tenderizer_not_in?: InputMaybe<Array<Scalars["String"]>>;
    tenderizer_contains?: InputMaybe<Scalars["String"]>;
    tenderizer_contains_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_not_contains?: InputMaybe<Scalars["String"]>;
    tenderizer_not_contains_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_starts_with?: InputMaybe<Scalars["String"]>;
    tenderizer_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_not_starts_with?: InputMaybe<Scalars["String"]>;
    tenderizer_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_ends_with?: InputMaybe<Scalars["String"]>;
    tenderizer_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_not_ends_with?: InputMaybe<Scalars["String"]>;
    tenderizer_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
    tenderizer_?: InputMaybe<Tenderizer_filter>;
    amount?: InputMaybe<Scalars["BigDecimal"]>;
    amount_not?: InputMaybe<Scalars["BigDecimal"]>;
    amount_gt?: InputMaybe<Scalars["BigDecimal"]>;
    amount_lt?: InputMaybe<Scalars["BigDecimal"]>;
    amount_gte?: InputMaybe<Scalars["BigDecimal"]>;
    amount_lte?: InputMaybe<Scalars["BigDecimal"]>;
    amount_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
    maturity?: InputMaybe<Scalars["BigInt"]>;
    maturity_not?: InputMaybe<Scalars["BigInt"]>;
    maturity_gt?: InputMaybe<Scalars["BigInt"]>;
    maturity_lt?: InputMaybe<Scalars["BigInt"]>;
    maturity_gte?: InputMaybe<Scalars["BigInt"]>;
    maturity_lte?: InputMaybe<Scalars["BigInt"]>;
    maturity_in?: InputMaybe<Array<Scalars["BigInt"]>>;
    maturity_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
    redeemed?: InputMaybe<Scalars["Boolean"]>;
    redeemed_not?: InputMaybe<Scalars["Boolean"]>;
    redeemed_in?: InputMaybe<Array<Scalars["Boolean"]>>;
    redeemed_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type Unlock_orderBy =
    | "id"
    | "user"
    | "tenderizer"
    | "amount"
    | "maturity"
    | "redeemed";

  export type User = {
    id: Scalars["ID"];
    stakes?: Maybe<Array<Stake>>;
  };

  export type UserstakesArgs = {
    skip?: InputMaybe<Scalars["Int"]>;
    first?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Stake_orderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Stake_filter>;
  };

  export type User_filter = {
    id?: InputMaybe<Scalars["ID"]>;
    id_not?: InputMaybe<Scalars["ID"]>;
    id_gt?: InputMaybe<Scalars["ID"]>;
    id_lt?: InputMaybe<Scalars["ID"]>;
    id_gte?: InputMaybe<Scalars["ID"]>;
    id_lte?: InputMaybe<Scalars["ID"]>;
    id_in?: InputMaybe<Array<Scalars["ID"]>>;
    id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
    stakes_?: InputMaybe<Stake_filter>;
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
  };

  export type User_orderBy = "id" | "stakes";

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars["Bytes"]>;
    /** The block number */
    number: Scalars["Int"];
    /** Integer representation of the timestamp stored in blocks for the chain */
    timestamp?: Maybe<Scalars["Int"]>;
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
    deployment: Scalars["String"];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars["Boolean"];
  };

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | "allow"
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | "deny";

  export type QuerySdk = {
    /** null **/
    asset: InContextSdkMethod<Query["asset"], QueryassetArgs, MeshContext>;
    /** null **/
    assets: InContextSdkMethod<Query["assets"], QueryassetsArgs, MeshContext>;
    /** null **/
    tenderizer: InContextSdkMethod<
      Query["tenderizer"],
      QuerytenderizerArgs,
      MeshContext
    >;
    /** null **/
    tenderizers: InContextSdkMethod<
      Query["tenderizers"],
      QuerytenderizersArgs,
      MeshContext
    >;
    /** null **/
    user: InContextSdkMethod<Query["user"], QueryuserArgs, MeshContext>;
    /** null **/
    users: InContextSdkMethod<Query["users"], QueryusersArgs, MeshContext>;
    /** null **/
    stake: InContextSdkMethod<Query["stake"], QuerystakeArgs, MeshContext>;
    /** null **/
    stakes: InContextSdkMethod<Query["stakes"], QuerystakesArgs, MeshContext>;
    /** null **/
    unlock: InContextSdkMethod<Query["unlock"], QueryunlockArgs, MeshContext>;
    /** null **/
    unlocks: InContextSdkMethod<
      Query["unlocks"],
      QueryunlocksArgs,
      MeshContext
    >;
    /** null **/
    assetDay: InContextSdkMethod<
      Query["assetDay"],
      QueryassetDayArgs,
      MeshContext
    >;
    /** null **/
    assetDays: InContextSdkMethod<
      Query["assetDays"],
      QueryassetDaysArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<Query["_meta"], Query_metaArgs, MeshContext>;
  };

  export type MutationSdk = {};

  export type SubscriptionSdk = {
    /** null **/
    asset: InContextSdkMethod<
      Subscription["asset"],
      SubscriptionassetArgs,
      MeshContext
    >;
    /** null **/
    assets: InContextSdkMethod<
      Subscription["assets"],
      SubscriptionassetsArgs,
      MeshContext
    >;
    /** null **/
    tenderizer: InContextSdkMethod<
      Subscription["tenderizer"],
      SubscriptiontenderizerArgs,
      MeshContext
    >;
    /** null **/
    tenderizers: InContextSdkMethod<
      Subscription["tenderizers"],
      SubscriptiontenderizersArgs,
      MeshContext
    >;
    /** null **/
    user: InContextSdkMethod<
      Subscription["user"],
      SubscriptionuserArgs,
      MeshContext
    >;
    /** null **/
    users: InContextSdkMethod<
      Subscription["users"],
      SubscriptionusersArgs,
      MeshContext
    >;
    /** null **/
    stake: InContextSdkMethod<
      Subscription["stake"],
      SubscriptionstakeArgs,
      MeshContext
    >;
    /** null **/
    stakes: InContextSdkMethod<
      Subscription["stakes"],
      SubscriptionstakesArgs,
      MeshContext
    >;
    /** null **/
    unlock: InContextSdkMethod<
      Subscription["unlock"],
      SubscriptionunlockArgs,
      MeshContext
    >;
    /** null **/
    unlocks: InContextSdkMethod<
      Subscription["unlocks"],
      SubscriptionunlocksArgs,
      MeshContext
    >;
    /** null **/
    assetDay: InContextSdkMethod<
      Subscription["assetDay"],
      SubscriptionassetDayArgs,
      MeshContext
    >;
    /** null **/
    assetDays: InContextSdkMethod<
      Subscription["assetDays"],
      SubscriptionassetDaysArgs,
      MeshContext
    >;
    /** Access to subgraph metadata **/
    _meta: InContextSdkMethod<
      Subscription["_meta"],
      Subscription_metaArgs,
      MeshContext
    >;
  };

  export type Context = {
    ["tenderize/tenderize-localhost"]: {
      Query: QuerySdk;
      Mutation: MutationSdk;
      Subscription: SubscriptionSdk;
    };
  };
}
