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
