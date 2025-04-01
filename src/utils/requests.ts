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

  async get<T>(params: string): Promise<T> {
    if (!this.apiToken) {
      throw new Error('API token is not set. Use setApiToken() to set your token.');
    }

    try {
      const response = await axios.get<T>(`${this.baseUrl}/api.php?action=${params}`, {
        headers: { 'X-API-Token': this.apiToken },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
