import axios from 'axios';
import { VM_URL } from '../config';

// Global API token that can be set once
let apiToken: string = '';

export const setApiToken = (token: string): void => {
  apiToken = token;
};

export class GET_FROM_VM {
  private apiToken: string;

  constructor(public baseUrl: string = VM_URL) {

    this.apiToken = apiToken;
  }

  async get<T>(action: string, options?: Record<string, any>): Promise<T> {
    if (!this.apiToken) {
      throw new Error('API token is not set. Use setApiToken() to set your token.');
    }

    try {
      const queryParams = new URLSearchParams({
        action: action,
      });

      if (options) {
        Object.entries(options).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            if (typeof value === 'boolean') {
              queryParams.append(key, value.toString());
            } else {
              queryParams.append(key, String(value));
            }
          }
        });
      }

      const url = `${this.baseUrl}/api.php?${queryParams.toString()}`;
      const response = await axios.get<T>(url, {
        headers: { 'X-API-Token': this.apiToken },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Failed to fetch data from VM.');
    }
  }
}
