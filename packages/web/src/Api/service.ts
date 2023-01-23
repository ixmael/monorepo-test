import {
  IApi,
} from '../core/domain/api';

import type {
  ApiParamsType,
  ApiGetTokenResponseType,
  ApiGetTokenType,
} from '../core/domain/api';

import type {
  TokenType,
} from '../core/domain/token';

import type {
  ServicesConfigurationType,
  FingerprintJSSetupType,
} from '../core/domain/services';

import getToken from './token/getToken';
import refreshToken from './token/refreshToken';

const ApiService = (): IApi => {
  return {
    getToken: (apiParams: ApiParamsType): Promise<ApiGetTokenType> => {
      return getToken(apiParams)
      .then((responseToken: ApiGetTokenResponseType) => {
        // Token generated
        const token: TokenType = {
          bayonetID: responseToken.bayonet_id,
          environment: responseToken.environment || null,
        } as TokenType;

        // Data for services
        const services: ServicesConfigurationType = {
          fingerprintjs: {
            apiKey: responseToken.services.fingerprintjs.apikey || null,
          } as FingerprintJSSetupType,
        } as ServicesConfigurationType;

        return {
          token,
          services,
        } as ApiGetTokenType;
      });
    },
    refreshToken: (apiParams: ApiParamsType, token: TokenType): void => {
      refreshToken(apiParams, token);
    },
  };
};

export default ApiService;
