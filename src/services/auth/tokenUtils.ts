const TOKEN_KEY = 'token';

function setToken(token: string) {
  sessionStorage.setItem(TOKEN_KEY, token);
}

function getToken() {
  sessionStorage.getItem(TOKEN_KEY);
}

export default {
  setToken,
  getToken,
};
