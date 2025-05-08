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

export interface GetSettings {
  withdrawal_fee: number;
  tokens_fee: number;
  epoch: number;
  switching_epoch: boolean;
  frontend_version: string;
  backend_version: string;
  min_balance: number;
  confirmations_required: number;
  max_assets_in_request: number;
}

export interface GetEstimateFees {
  withdrawal_fee: string;
  tokens_fee: number;
  fee: number;
  deposit: number;
}

export interface GetCustomRequest {
  request_id: string;
  deposit: number;
  overhead_fee: number;
  withdrawal_address: string;
  is_whitelisted: boolean;
}

export interface GetTokenRequest {
  token_id: string;
  logo: string;
  ticker: string;
  name: string;
  balance: string;
  decimals: string;
}

export interface GetDeliveredRewards {
  id: string;
  staking_address: string;
  epoch: string;
  token: string;
  amount: string;
  withdrawal_request: string;
  expiry_return_pool_id: string | null;
  expiry: string;
  return_policy: string;
  delivered_on: string;
}

export interface GetPendingTxCount {
  pending_tx_count: number;
}

export interface GetTx {
  tx: string;
  slot: string;
  info: string;
}

export interface GetStatistics {
  pool_id: string;
  withdrawals: string;
  collected_fees: string;
}

export interface GetWhitelist {
  [key: string]: string[];
}

export interface GetBlacklist {
  [key: string]: string[];
}

export interface GetSystemInfo {
  backend_up: boolean;
  ntds_up: boolean;
  pending_tx: number;
  pending_rewards: number;
  pending_promises: number;
  tracked_stake: number;
  tracked_delegators: number;
  delivered_rewards: number;
  pending_withdrawals: number;
  processed_withdrawals: number;
  failed_withdrawals: number;
  uptime: string;
  uptime_ntds: string;
  xwallet_size: number;
  epoch: number;
}