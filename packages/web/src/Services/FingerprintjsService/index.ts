import {
  IService,
} from '../../core/domain/services';
import type {
  TokenType,
} from '../../core/domain/token';

import FingerprintJS from '@fingerprintjs/fingerprintjs-pro';

import { keyFingerprintJsServiceName } from './constants';

// FingerprintJsService
class FingerprintJsService implements IService {
  name = keyFingerprintJsServiceName;
  apiKey: string;
  browserToken: string;
  environment: string | null;

  private fingerprintjsService: Promise<any> | null;

  constructor(apiKey: string, token: TokenType) {
    this.apiKey = apiKey;
    this.browserToken = token.bayonetID;
    this.environment = token.environment;

    this.fingerprintjsService = null;
  }

  setup = (): void => {
    this.fingerprintjsService = FingerprintJS.load({
      apiKey: this.apiKey,
      endpoint: <string><unknown>process.env.FINGERPRINTJS_DOMAIN,
    });
  };

  analyze = (): void => {
    if (this.fingerprintjsService) {
      const tag: any = {
        browserToken: this.browserToken,
      };
      if (this.environment) {
        tag.environment = this.environment;
      }

      this.fingerprintjsService
      .then(fp => fp.get({
        tag,
      }));
    }
  }

  // eslint-disable-next-line
  afterAnalyze = (...args: any[]): void => {}
}

export default FingerprintJsService;
