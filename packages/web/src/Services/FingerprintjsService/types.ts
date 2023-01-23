import { IService } from '../types';
import type { SetupServicesType } from '../types';
declare class FingerprintJsService implements IService {
    name: string;
    browserToken: string;
    params: SetupServicesType;
    bayonetID: string;
    private fingerprintjsService;
    constructor(params: SetupServicesType);
    setup: () => void;
    analyze: () => void;
    afterAnalyze: (...args: any[]) => void;
}
export default FingerprintJsService;
