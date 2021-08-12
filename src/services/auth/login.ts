import { auth } from '../../config/apiURLs';
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
  const response = await fetch(auth.logIn, requestOptions);
  if (response.status === 201) {
    const json: LoginResponse = await response.json();
    return json;
  }
  const message = await response.text();
  throw new Error(message);
}

export default login;
