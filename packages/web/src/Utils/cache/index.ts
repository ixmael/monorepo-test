import type {
  TokenType,
} from '../../core/domain/token';

const sessionKey = 'bayonet_analysis';

const isValidToken = (token: any): boolean => {
  let isValid = false;

  if (token.createdAt) {
    const currentDate = (new Date()).getTime();
    // The created token date is not old than 90 days
    if (currentDate - token.createdAt < 7776000000) {
      isValid = true;
    }
  }

  return isValid;
};

export const loadToken = (): TokenType | null => {
  let storedToken: TokenType | null = null;
  const storedTokenStr = localStorage.getItem(sessionKey);
  if (storedTokenStr) {
    const storedTokenToValidate = JSON.parse(storedTokenStr);

    if (isValidToken(storedTokenToValidate)) {
      storedToken = storedTokenToValidate as TokenType;
    }
  }

  return storedToken as TokenType;
};

export const storeToken = (token: TokenType) => {
  localStorage.setItem(sessionKey, JSON.stringify({
    ...token,
    createdAt: (new Date()).getTime(),
  }));
};

export default {};
