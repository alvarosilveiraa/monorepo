import {AxiosRequestConfig} from 'axios';

export enum UsersServiceEnum {
  BaseUrl = 'baseURL',
  GetUser = 'getUser',
}

export type UsersServiceType = {
  baseURL: string;
  getUser: AxiosRequestConfig;
};
