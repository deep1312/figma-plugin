import { PluginUIState } from './types';

const API_TOKEN_STORAGE_KEY = 'figma_api_token';

export class PluginAuth {
  private state: PluginUIState = { status: 'unauthenticated' };

  constructor() {
    const token = localStorage.getItem(API_TOKEN_STORAGE_KEY);
    if (token) {
      this.state = { status: 'authenticated' };
    }
  }

  async login(token: string) {
    // Save token securely (localStorage for demo; consider secure options)
    localStorage.setItem(API_TOKEN_STORAGE_KEY, token);
    this.state = { status: 'authenticated' };
    return true;
  }

  logout() {
    localStorage.removeItem(API_TOKEN_STORAGE_KEY);
    this.state = { status: 'unauthenticated' };
  }

  getState() {
    return this.state;
  }

  getToken() {
    return localStorage.getItem(API_TOKEN_STORAGE_KEY);
  }
}
