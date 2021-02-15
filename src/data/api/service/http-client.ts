import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';

import LocalStorageService from './local-storage';
declare module 'axios' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    });

    this._initializeResponseInterceptor();
    this._initializeRequestInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };

  private _handleRequest = (config: AxiosRequestConfig) => {
    const accessToken = LocalStorageService.getAccessToken();
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: AxiosError) => Promise.reject(error);
}

export default HttpClient;
