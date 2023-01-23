// BayonetSetupType
export type BayonetSetupType = {
  jsKey: string;
  onAnalyzedCallback: (params: any) => void,
};

export interface IBayonet {
  // analyze
  analyze: (params: BayonetSetupType) => void;

  init: (args: any) => void;
  track: () => void;
}

// FingerprintResponseType
export type FingerprintResponseType = {
  bayonet_id: string;
  status: string;
  reasonCode: number;
  reasonMessage: string;
};

// ICallbackFunc
export interface ICallbackFunc {
  (fingerprintResponse: FingerprintResponseType): void;
}
