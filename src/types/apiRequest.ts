export type GetHealth = {};

export type GetVersion = {};

export type IsAuthenticated = {};

export type GetPools = {};

export type GetDistributions = {};

export type GetSanitizedAddressInput = string;

export type GetRewardBreakdownInput = string;

export type GetRewardsInput = string;

export type GetSettingsInput = {};

export type GetEstimateFeesInput = number;

export type GetCustomRequestInput = {
  staking_address: string;
  session_id: string;
  selected: string;
  overhead_fee?: number;
  unlocks_special?: boolean;
  xwallet?: boolean;
};

export type GetCheckStatusCustomRequestInput = {
  staking_address: string;
  request_id: number;
  session_id: string;
};

export type GetTreasuryReadInput = {}

export type GetDeliveredRewardsInput = {
  staking_address: string;
  token_id?: string;
}

export type DeliverRewardInput = {
  staking_address: string;
  token_id: string;
  amount: number;
  overcommit: boolean;
  expiry: number;
  return_policy: number;
  unlocks_on?: number;
  project_locked?: boolean;
};

export type GetPendingTxCountInput = {};

export type GetTxInput = {
  txid: string;
};

export type GetStatisticsInput = {};

export type GetWhitelistInput = {};

export type GetBlacklistInput = {};

export type GetSystemInfoInput = {};