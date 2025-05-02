export interface GetVersion {
  version: string;
}

export interface GetHealth {
  health: string;
  details: any[];
}

export interface IsAuthenticated {
  authenticated: boolean;
}

interface Token {
  id: string;
  enabled: string;
  name: string;
  ticker: string;
  logo: string;
  decimals: string;
  visible: string;
  info: string;
  value: string;
  registered_by: string | null;
  last_claim: string | null;
  cached_logo?: string;
}

export interface GetTokens {
  [tokenId: string]: Token;
}

interface Pool {
  id: string;
  ticker: string;
  name: string;
  enabled: string;
  logo: string;
  last_delegator_refresh: string;
  loading_addr: string;
  description: string | null;
  visible: string;
  delegator_count: string;
  cached_logo: string;
}

export interface GetPools {
  [key: string]: Pool;
}

export interface GetDistributions {
  id: string;
  token_id: string;
  amount: string;
  pool_id: string;
  enabled: string;
  min_age: string;
  min_stake: string;
  target: string;
  model: string;
  expiry: string;
  last_results: string;
  promise: string;
  return_policy: string;
  stake_cap: string;
  filter: string;
  unlocks_in: string;
  last_status: string;
  last_time: string;
  project_locked: string;
}

export interface GetSanitizedAddress {
  address: string;
}

export interface GetRewardBreakdown {
  rewards: any[];
  promises: any[];
  vending_address: string;
  withdrawal_fee: string;
};

interface Assets {
  [key: string]: number;
}

export interface GetRewards {
  total_rewards?: number;
  consolidated_promises?: Assets;
  consolidated_rewards?: Assets;
  nfts?: any[];
  assets?: Assets;
  min_balance?: number;
  vending_address?: string;
  withdrawal_fee?: string;
  withdraw_all_tokens_deposit?: number;
  project_locked_rewards?: {
    consolidated_promises: Assets;
    consolidated_rewards: Assets;
    nfts: any[];
    assets: Assets;
  };
}

export interface VmPoolInfo {
  delegated_pool_name: string;
  delegated_pool_description: string;
  total_balance: string;
  delegated_pool_ticker: string;
  delegated_pool_logo: string;
  isWhitelisted: boolean;
}

export interface ClaimableToken {
  assetId: string;
  ticker: string;
  logo: string;
  decimals: number;
  amount: number;
  premium: boolean;
  native: boolean;
  price: string;
  total: string;
  selected?: boolean;
}