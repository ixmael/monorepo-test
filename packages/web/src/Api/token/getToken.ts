import type {
  ApiGetTokenResponseType,
  ApiParamsType,
} from '../../core/domain/api';

import { urls } from '../constants';

const getToken = (params: ApiParamsType): Promise<ApiGetTokenResponseType> => {
  return new Promise<ApiGetTokenResponseType>((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', urls.getToken);
    request.setRequestHeader('Authorization', `Bearer ${params.apiKey}`);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Accept', 'application/json');

    // Process the response
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.responseText) {
          const responseToken = JSON.parse(request.responseText) as ApiGetTokenResponseType;

          resolve(responseToken);
        } else {
          reject(null);
        }
      }
    }

    // Fetch
    request.send(null);
  });
};

export default getToken;
