import {useCallback, useEffect, useState} from 'react';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import * as services from '~/app/services';
import {UsersServiceEnum, UsersServiceType} from '~/app/typings';
import {UseServiceType} from './use-service.type';

export const useService = ({service, skip}: UseServiceType) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState<any | null>(null);

  const {config, data, headers, request, status} = response || {};

  const execute = useCallback(
    async (args: AxiosRequestConfig = {}) => {
      if (service && service !== UsersServiceEnum.BaseUrl) {
        setLoading(true);

        const config: AxiosRequestConfig = {
          baseURL: services.baseURL,
          ...(services as UsersServiceType)[service],
          ...args,
        };

        await axios(config).then(setResponse).catch(setError);

        setLoading(false);
      }
    },
    [service],
  );

  useEffect(() => {
    if (!skip) {
      execute();
    }
  }, [skip, execute]);

  return {
    config,
    data,
    headers,
    request,
    status,
    loading,
    error,
    execute,
  };
};
