import UserForm from '../../models/UserForm';

async function login(user: Pick<UserForm, 'username' | 'password'>) {
  const body = JSON.stringify(user);
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  };
  const response = await fetch('/api/login', requestOptions);
  const json = await response.json();
  return json;
}

export default login;
