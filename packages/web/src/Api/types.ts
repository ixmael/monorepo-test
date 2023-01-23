import { ICallbackFunc } from 'types';

export type ApiSetupType = {
  jsKey: string,
  afterSetup: (params: any) => void;
};

export type FingerprintResponseType = {
  bayonet_id: string | null;
  status: string;
  reasonCode: number;
  reasonMessage: string;
};

export type TokenResponseType = {
  token: string;
};

export type getTokenParams = {
  keyApi: string;
}

export type saveAnalysisParams = {
  keyApi: string;
  // result: ServiceResultType;
  token: string;
  callback: ICallbackFunc;
}

export type ApiParamsType = {
  keyApi: string;
};
export interface IApi {
  getToken(apiParams: ApiParamsType): Promise<TokenResponseType>;
  refreshToken(apiParams: ApiParamsType, token: string): void;
}
