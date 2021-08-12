const ROOT_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/';

export const notes = {
  getAll: () => 'notes',
  post: () => 'notes',
  patch: (id: string | number) => `notes/${id}`,
  delete: (id: string | number) => `notes/${id}`,
};

export const auth = {
  singup: `${ROOT_URL}auth/singup`,
  logIn: `${ROOT_URL}auth/login`,
};

export default ROOT_URL;
