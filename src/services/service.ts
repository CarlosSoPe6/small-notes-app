class Service {
  private headers: HeadersInit;

  constructor(public baseUrl: string) {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  get(resource: string) {
    const uri = `${this.baseUrl}${resource}`;
    const reqInit = { method: 'GET' };
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
    const reqInit = { method: 'DELETE' };
    return fetch(uri, reqInit);
  }
}

const apiUrl = process.env.API_URL || 'http://localhost:8080/';

const service = new Service(apiUrl);

export default service;
