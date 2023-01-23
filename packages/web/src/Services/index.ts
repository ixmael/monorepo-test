
import {
  IService,
} from '../core/domain/services';

import type {
  ServicesType,
  SetupServicesType,
} from '../core/domain/services';

import FingerprintjsService from './FingerprintjsService';
import { keyFingerprintJsServiceName } from './FingerprintjsService/constants';

type ServicesList<Type> = {
  [key: string]: Type;
};

// Services
const services = (): ServicesType => {
  const servicesList: ServicesList<IService> = {};

  return {
    setup: (params: SetupServicesType): void => {
      // Initialize the services
      servicesList[keyFingerprintJsServiceName] = new FingerprintjsService(params.apiKey, params.token);

      // Prepare the services
      const servicesKeys = Object.keys(servicesList);
      for(let i = 0; i < servicesKeys.length; i++) {
        servicesList[servicesKeys[i]].setup();
      }
    },
    analyze: (): void => {
      const servicesKeys = Object.keys(servicesList);
      for(let i = 0; i < servicesKeys.length; i++) {
        servicesList[servicesKeys[i]].analyze();
      }
    },
    afterAnalyze: (service: string) => (...args: any[]): void => {
      servicesList[service].afterAnalyze(...args);
    },
  };
};

export default services;
