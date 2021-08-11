import apiCalls from '../config/apiURLs';
import LoginService, { LoginServiceFunction } from './auth/login';

class APIService {
  private headers: HeadersInit;

  private expiresIn?: Date;

  private lastLogin?: Date;

  constructor(
    public baseUrl: string,
    public authenticationService: LoginServiceFunction,
  ) {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  private setAuthorization(token: string) {
    this.headers = { ...this.headers, Authorization: `bearer ${token}` };
  }

  initService(token: string) {
    this.setAuthorization(token);
  }

  get(resource: string) {
    const uri = `${this.baseUrl}${resource}`;
    const reqInit = { method: 'GET', headers: this.headers };
    return fetch(uri, reqInit);
  }

  private internalRequestWithBody(resource: string, body: string | object, method: 'POST' | 'PUT' | 'PATCH') {
    const uri = `${this.baseUrl}${resource}`;
    const finalBody = typeof body === 'string' ? body : JSON.stringify(body);
    const reqInit: RequestInit = { method, body: finalBody, headers: this.headers };
    return fetch(uri, reqInit);
  }

  post(resource: string, body: string | object) {
    return this.internalRequestWithBody(resource, body, 'POST');
  }

  patch(resource: string, body: string | object) {
    return this.internalRequestWithBody(resource, body, 'PATCH');
  }

  put(resource: string, body: string | object) {
    return this.internalRequestWithBody(resource, body, 'PUT');
  }

  delete(resource: string) {
    const uri = `${this.baseUrl}${resource}`;
    const reqInit: RequestInit = { method: 'DELETE', headers: this.headers };
    return fetch(uri, reqInit);
  }
}

const apiUrl = apiCalls;

const apiService = new APIService(apiUrl, LoginService);

export default apiService;
