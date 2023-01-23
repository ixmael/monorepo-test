import {
  IBayonet,
} from './core/domain/services';

import {
  BackwardTokenType,
} from 'core/domain/token';

import type {
  ApiGetTokenType,
  ApiParamsType,
} from 'core/domain/api';
import type {
  ServicesType,
  SetupServicesType,
} from 'core/domain/services';

import api from 'Api';
import validateExaminerSetupType from 'Utils/validation/validateExaminerSetupType';
import Services from 'Services';
import {
  loadToken,
  storeToken,
} from 'Utils/cache';

import {
  keyJsKey,
} from './constants';

const analysis = (): IBayonet => {
  // External services
  const thirdServices: ServicesType = Services();

  const analyze = (params: any): void => {
    // Validate if the params are correct
    if (validateExaminerSetupType(params)) {
      const storedToken = loadToken();

      if (!storedToken) {
        // Generate token from the backend
        api.getToken({
          apiKey: params[keyJsKey],
        } as ApiParamsType).then((apiGet: ApiGetTokenType) => {
          const {
            token,
            services,
          } = apiGet;

          // Store the token
          storeToken(token);

          // Prepare the services
          thirdServices.setup({
            apiKey: services.fingerprintjs.apiKey,
            token: token,
          } as SetupServicesType);

          // Run the analysis
          thirdServices.analyze();

          // Backward token
          const backwardToken: BackwardTokenType = {
            ...token,
            bayonet_fingerprint_token: token.bayonetID,
            status: 'success',
          } as BackwardTokenType;

          // Call to the callback user
          params.onAnalyzedCallback(backwardToken);
        });
      } else {
        api.refreshToken({
          apiKey: params[keyJsKey],
        } as ApiParamsType, storedToken);

        // Backward token
        const backwardToken: BackwardTokenType = {
          ...storedToken,
          bayonet_fingerprint_token: storedToken.bayonetID,
          status: 'success',
        } as BackwardTokenType;

        // Call to the callback user
        params.onAnalyzedCallback({
            ...backwardToken,
        });
      }
    }
  };

  return {
    analyze,
    // Backward compatibility
    init: (args: any): void => {
      analyze({
        jsKey: args.js_key,
        onAnalyzedCallback: window[args.callback_function],
      });
    },
    // Backward compatibility
    // eslint-disable-next-line
    track: (): void => {},
  };
};

export default analysis;
