const TOKEN_KEY = 'token';
const EXPIRES_KEY = 'expires in';

function setToken(token: string, expiresIn: number) {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(EXPIRES_KEY, expiresIn.toString());
}

function getToken(): null | [string, number] {
  const token = sessionStorage.getItem(TOKEN_KEY);
  const expiresIn = sessionStorage.getItem(EXPIRES_KEY);
  if (token === null || expiresIn === null) {
    return null;
  }
  return [token, parseInt(expiresIn, 10)];
}

export default {
  setToken,
  getToken,
};
