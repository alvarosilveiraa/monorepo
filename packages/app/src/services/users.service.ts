import {AxiosRequestConfig} from 'axios';
import {USERS_SERVICES_URL} from '../constants';

export const baseURL = USERS_SERVICES_URL;

export const getUser: AxiosRequestConfig = {
  url: '/user',
};
