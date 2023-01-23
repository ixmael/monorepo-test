import type {
  TokenType,
} from './token';

// BayonetSetupType represents the parameters to initialize the Bayonet service
export type BayonetSetupType = {
  jsKey: string;
  onAnalyzedCallback: (params: any) => void,
};

// FingerprintJSSetupType represents the parameters to initialize the FingerprintJS service
export type FingerprintJSSetupType = {
  apiKey: string;
};

// ServicesConfigurationType represents the parameters to initialize the external services
export type ServicesConfigurationType = {
  fingerprintjs: FingerprintJSSetupType;
};

// 
export interface IBayonet {
  // analyze
  analyze: (params: BayonetSetupType) => void;

  init: (args: any) => void;
  track: () => void;
}

export type ServicesType = {
  setup: (params: SetupServicesType) => void,
  analyze: () => void,
  afterAnalyze: (service: string) => (...args: any[]) => void,
};

export type SetupParamsType = {
  apiKey: string;
  token: string;
};

export type ServicesMapType = {
  [k: string]: IService;
};

export type SetupServicesType = {
  apiKey: string;
  token: TokenType;
};

export interface IService {
  browserToken: string;
  analysisID?: string;

  /**
   * Initialize the services with the required params
   */
  setup: () => void;

  /**
   * Execute the analisys of the service
   */
  analyze: () => void;

  /**
   * Is the callback that is executed after the analyze
   */
  afterAnalyzedCallback?: (token: TokenType) => void;

  /**
   * Executes after the analysis by the service
   */
  afterAnalyze: (...args: any[]) => void;
}

