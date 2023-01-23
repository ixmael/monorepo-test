export type Token = {
  bayonetID: String;
  environment: String;
};

export interface IFingerprintService {
  analyze(): Promise<Token>;
};
