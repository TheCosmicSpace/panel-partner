import HttpClient from './http-client';
const baseURL = process.env.VUE_APP_API_AUTH || '';
class AuthService extends HttpClient {
  private static classInstance?: AuthService;

  private constructor() {
    super(baseURL);
  }

  public static getInstance() {
    if (!this.classInstance) this.classInstance = new AuthService();
    return this.classInstance;
  }

  public authUser = (login: string, password: string) => {
    return this.instance.post('/users/login', {
      login: login,
      password: password,
      service: 'eda'
    });
  };

  public refreshUserToken = (refresh: string) => {
    return this.instance.post('/auth/refresh', {
      refresh,
      service: 'eda'
    });
  };
}

export default AuthService;
