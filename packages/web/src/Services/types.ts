import { TokenResponseType } from "Api/types";

export type ServicesType = {
  setup: (params: SetupServicesType, environment: string | null) => void,
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
  keyApi: string;
  token: string;
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
  afterAnalyzedCallback?: (token: TokenResponseType) => void;

  /**
   * Executes after the analysis by the service
   */
  afterAnalyze: (...args: any[]) => void;
}
