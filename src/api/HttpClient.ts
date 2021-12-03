type Options = {
  [key: string]: string;
};

type Params = {
  baseUrl?: string;
  headers?: Options;
};

/**
 * Create an instance of HttpClient for doing backend call with fetch api
 * @param {Params} options HttpClient options
 */
export default class HttpClient {
  private baseUrl: string;
  private headers: Options;

  constructor(options: Params = {}) {
    this.baseUrl = options.baseUrl || '';
    this.headers = options.headers || {};
  }

  /**
   * Method for adding headers for futur request
   * @param {string} key
   * @param {string} value
   * @returns {HttpClient} return the object for chaining
   */
  setHeader(key: string, value: string): HttpClient {
    this.headers[key] = value;
    return this;
  }

  /**
   * Use fetch api on the given endpoint and with the given options
   * @param {string} endpoint
   * @param {Options} options
   * @returns {Promise}
   */
  private async fetchJSON<T>(endpoint: string, options: Options = {}): Promise<T> {
    console.log(options)
    const res = await fetch(this.baseUrl + endpoint, {
      ...options,
      headers: this.headers,
    });

    if (!res.ok) throw new Error(res.statusText);

    return res.json();
  }

  /**
   * Use GET method at the given endpoint
   * @param {string} endpoint
   * @param {Options} options
   * @returns {Promise}
   */
  get<T>(endpoint: string, options: Options = {}): Promise<T> {
    return this.fetchJSON(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  post<T>(endpoint: string, body?: Options, options: Options = {}): Promise<T> {
    return this.fetchJSON(
      endpoint, 
      {
        ...options, 
        body: body !== undefined ? JSON.stringify(body) : '', 
        method: 'POST' 
      }
    )
  }

  put<T>(endpoint: string, body: Options | null, options: Options = {}): Promise<T> {
    return this.fetchJSON(
      endpoint, 
      {
        ...options, 
        body: JSON.stringify(body), 
        method: 'PUT' 
      }
    )
  }
}
