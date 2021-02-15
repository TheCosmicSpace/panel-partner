import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

import LocalStorageService from './local-storage';
const authURL = process.env.VUE_APP_API_AUTH || '';
declare module 'axios' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  protected refreshRequest: Promise<AxiosResponse> | null;
  protected refreshToken: string | null;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });
    this.refreshRequest = null;
    this.refreshToken = LocalStorageService.getRefreshToken();

    this._initializeResponseInterceptor();
    this._initializeRequestInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleResponseError
    );
  };

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleRequestError
    );
  };

  // Request handlers
  private _handleRequest = (config: AxiosRequestConfig) => {
    const accessToken = LocalStorageService.getAccessToken();
    if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  };

  protected _handleRequestError = (error: AxiosError) => Promise.reject(error);

  // Response handlers
  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleResponseError = async (error: AxiosError) => {
    /* @ts-ignore */
    const { retry } = error.config;
    if (!this.refreshToken || error.response?.status !== 401 || retry) {
      throw error;
    }

    if (!this.refreshRequest) {
      this.refreshRequest = this.instance.post(`${authURL}/auth/refresh`, {
        refresh: this.refreshToken,
        service: 'eda'
      });
    }
    const data = await this.refreshRequest;
    this.refreshRequest = null;
    LocalStorageService.setToken(data);
    const newConfig = {
      ...error.config,
      retry: true
    };
    return this.instance(newConfig);
  };
}

export default HttpClient;
