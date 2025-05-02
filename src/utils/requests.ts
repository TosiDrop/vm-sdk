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

  async get<T>(params: string, options?: {
    address?: string,
    staking_address?: string,
    // future parameters can be added here
  }): Promise<T> {
    if (!this.apiToken) {
      throw new Error('API token is not set. Use setApiToken() to set your token.');
    }

    try {
      const queryParams = new URLSearchParams({
        action: params,
        ...(options?.address ? { address: options.address } : {}),
        ...(options?.staking_address ? { staking_address: options.staking_address } : {}),
      });

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
