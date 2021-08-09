import UserForm from '../../models/UserForm';

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export type LoginServiceFunction = (user: Pick<UserForm, 'username' | 'password'>) => Promise<LoginResponse>;

async function login(user: Pick<UserForm, 'username' | 'password'>) {
  const body = JSON.stringify(user);
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  const response = await fetch('http://localhost:8080/api/auth/login', requestOptions);
  const json: LoginResponse = await response.json();
  return json;
}

export default login;
