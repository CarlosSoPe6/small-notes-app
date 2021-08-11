import { auth } from '../../config/apiURLs';
import UserForm from '../../models/UserForm';

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
  const json = await response.json();
  return json;
}

export default singup;
