import type { ServicesConfigurationType } from './services';

// Backward compatibility
export type BackwardTokenType = {
  bayonetID: string;
  environment?: string;
  bayonet_fingerprint_token: string;
  status: string;
};

export type TokenType = {
  bayonetID: string;
  environment: string | null;
};

export type ApiGetTokenResponseType = {
  bayonetID: string;
  environment?: string;
  services: ServicesConfigurationType;
};
