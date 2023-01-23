import type { TokenType } from './token';

import type { ServicesConfigurationType } from './services';

// ApiGetTokenResponseType is the backend token generated by get token
export type ApiGetTokenResponseType = {
  // The bayonet ID generated
  bayonet_id: string;
  // The environment of the token
  environment?: string;
  // The configuration services
  services: ApiServicesResponseType;
};

// ApiServicesResponseType represents the external services parameters
export type ApiServicesResponseType = {
  fingerprintjs: {
    apikey: String;
  };
};

// ApiGetTokenType represents the token and the services fetched from backend
export type ApiGetTokenType = {
  token: TokenType;
  services: ServicesConfigurationType;
};

// ApiParamsType represents the parameters to initialize the fingerprint service
export type ApiParamsType = {
  apiKey: string;
};

// IApi is the interface that any API have to implements
export interface IApi {
  getToken(apiParams: ApiParamsType): Promise<ApiGetTokenType>;
  refreshToken(apiParams: ApiParamsType, token: TokenType): void;
}
