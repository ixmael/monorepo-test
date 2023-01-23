import type {
  ApiParamsType,
} from '../../core/domain/api';

import type {
  TokenType,
} from '../../core/domain/token';

import { urls } from '../constants';

const refreshToken = (params: ApiParamsType, token: TokenType): void => {
  const url = `${urls.refresToken}/${token.bayonetID}`;
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Authorization', `Bearer ${params.apiKey}`);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Accept', 'application/json');

  // Process the response
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.responseText) {
        const taskStatus = JSON.parse(request.responseText); // TaskStatus
        console.log('taskStatus', taskStatus);
      }
    }
  }

  request.send(null);
};

export default refreshToken;
