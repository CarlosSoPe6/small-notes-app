import { auth } from '../../config/apiURLs';
import UserForm from '../../models/UserForm';
import { LoginResponse } from './login';

async function singup(user: UserForm) {
  const body = JSON.stringify(user);
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  const response = await fetch(auth.singup, requestOptions);
  if (response.status === 201) {
    const json: LoginResponse = await response.json();
    return json;
  }
  const message = await response.text();
  throw new Error(message);
}

export default singup;
