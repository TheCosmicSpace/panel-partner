import { Auth } from './../model';

class LocalStorageService {
  private static classInstance?: LocalStorageService;

  public static getInstance() {
    if (!this.classInstance) this.classInstance = new LocalStorageService();
    return this.classInstance;
  }

  public static setToken(userData: Auth) {
    localStorage.setItem('access_token', userData.token);
    localStorage.setItem('refresh_token', userData.refresh_token.value);
    localStorage.setItem('user_uuid', userData.user_uuid);
  }

  public static getAccessToken() {
    return localStorage.getItem('access_token');
  }

  public static getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  public static getUserID() {
    return localStorage.getItem('user_uuid');
  }

  public static clearToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_uuid');
  }
}

export default LocalStorageService;
