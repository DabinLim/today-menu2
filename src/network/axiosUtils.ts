import {Commons} from '../constants/common';
import qs from 'qs';
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import {get} from 'lodash';
import Config from 'react-native-config';
import {logger} from '../utils';

export interface AxiosRequestParams {
  method: string;
  url: string;
  queryParams?: any;
  requestBody?: any;
  headers?: any;
  authorized?: boolean;
}

export const axiosUtils = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  AXIOS_CONFIG_DEFAULT: {
    timeout: Commons.TIMEOUT_LIMIT,
    paramsSerializer: (params: unknown) =>
      qs.stringify(params, {arrayFormat: 'brackets'}),
    withCredentials: true,
  },
};

export const createAxiosInstance = (axiosConfig: AxiosRequestConfig) => {
  const instance = axios.create(axiosConfig);
  instance.interceptors.request.use(
    async config => {
      const method = get(config, 'method');
      const url = `${get(config, 'baseURL')}${get(config, 'url')}`;
      const authToken = get(config, 'headers.authToken');
      const authorization = get(config, 'headers.Authorization');
      const queryStrings = get(config, 'params');
      const requestBody = get(config, 'data');
      const userAgent = get(config, 'headers.User-Agent');
      const headers = get(config, 'headers');

      logger(`> REQUEST [${method}]: ${url}`);
      if (headers) {
        logger(`> headers: ${JSON.stringify(headers)}`);
      }

      if (queryStrings) {
        logger(`> queryStrings: ${JSON.stringify(queryStrings)}`);
      }
      if (requestBody) {
        logger(`> requestBody: ${JSON.stringify(requestBody)}`);
      }
      if (authToken) {
        logger(`> authToken: ${authToken}`);
      }
      if (authorization) {
        logger(`> Authorization: ${JSON.stringify(authorization)}`);
      }
      if (userAgent) {
        logger(`> User-Agent: ${JSON.stringify(userAgent)}`);
      }
      logger('>>>>>>>>>>>>>>>');

      return config;
    },
    err => Promise.reject(err),
  );
  instance.interceptors.response.use(
    response => {
      const {config, status, statusText} = response;
      const method = get(config, 'method');
      const url = `${get(config, 'baseURL')}${get(config, 'url')}`;

      logger(`< RESPONSE [${method}]: ${url}`);
      logger(`< RESPONSE [${status}]: ${statusText ?? ''}`);
      logger('<<<<<<<<<<<<<<<');
      return response;
    },
    err => {
      const method = get(err, 'config.method');
      const url = `${get(err, 'config.baseURL')}${get(err, 'config.url')}`;
      logger(`< ERROR [${method}]: ${url}`);
      logger(`< ERROR: ${JSON.stringify(get(err, 'response.data'))}`);
      logger(`< ERROR: ${err.toJSON().message}`);
      logger(`< ERROR: ${err}`);
      return Promise.reject(err);
    },
  );

  return instance;
};

export const request = async (
  instance: AxiosInstance,
  method: string,
  url: string,
  queryParams: unknown,
  requestBody: unknown,
  headers?: AxiosRequestHeaders,
): Promise<AxiosResponse | null> => {
  switch (method) {
    case axiosUtils.GET:
      return await instance.get(url, {params: queryParams, headers});
    case axiosUtils.POST:
      return await instance.post(url, requestBody, {
        params: queryParams,
        headers,
      });
    case axiosUtils.PUT:
      return await instance.put(url, requestBody, {
        params: queryParams,
        headers,
      });
    case axiosUtils.DELETE:
      return await instance.delete(url);
    default:
      return null;
  }
};

export class AppAxiosInstance {
  private readonly baseURL: string;

  private readonly type;

  private instance: any;

  constructor(type: 'todayMenu') {
    this.type = type;
    switch (type) {
      case 'todayMenu':
        this.baseURL = Config.REACT_APP_ROOT_URL;
        break;
      default:
        this.baseURL = Config.REACT_APP_ROOT_URL;
    }
  }

  public readonly createInstance = (): AxiosInstance => {
    const {baseURL} = this;
    const axiosConfig = {
      ...axiosUtils.AXIOS_CONFIG_DEFAULT,
      baseURL,
    };
    return createAxiosInstance(axiosConfig);
  };

  public readonly getInstance = (): AxiosInstance => {
    this.instance = this.createInstance();
    return this.instance;
  };
}

export const todayMenuAxios = new AppAxiosInstance('todayMenu');
