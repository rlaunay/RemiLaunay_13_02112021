import HttpClient from './HttpClient';
import { User } from '../Types/Auth'

/**
 * @param {string} baseUrl
 * @param {string} langCode
 */
class ApiClient extends HttpClient {
  constructor(baseUrl: string, langCode: string) {
    super({
      baseUrl,
      headers: {
        lang: langCode,
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Get the user information form the API
   */
  get user() {
    return {
      login: (email: string, password: string) => this.post<{ body: { token: string } }>(`/user/login`, {
        email,
        password
      }),
      getProfil: (token: string) => this.setHeader('Authorization', `Bearer ${token}`).post<{ body: User }>(`/user/profile`),
      update: (token: string | undefined, user: { firstName: string, lastName: string }) => {
        return this.setHeader('Authorization', `Bearer ${token}`).put<{ body: User }>('/user/profile', user)
      }
    };
  }
}

export default new ApiClient(import.meta.env.VITE_API_ENDPOINT_URL, 'en');


// export default async function fetchApi<T = {}>(endpoint: string, opt: RequestInit): Promise<T> {
//   const apiUrl = 'http://localhost:3001/api/v1';
//   if (!apiUrl) throw new Error('No API URL');
//   const response = await fetch(`${apiUrl}${endpoint}`, {
//     ...opt,
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Une erreur est survenue veuillez réessayer ultérieurement');
//   }

//   return data;
// }
