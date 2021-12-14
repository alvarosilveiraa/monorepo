import React, {useCallback, useState} from 'react';
import {RouteType} from '~/app/typings';
import {Router} from './router';
import {RouterContext} from './router.context';
import {RouterProviderType} from './router.type';

export const RouterProvider = ({routes = []}: RouterProviderType) => {
  const [route, setRoute] = useState<RouteType | null>(null);

  const onRoute = useCallback(
    (newRoute: RouteType) => {
      if (route?.name !== newRoute.name) {
        setRoute({...newRoute, prevRoute: route});
      }
    },
    [route],
  );

  return (
    <RouterContext.Provider value={{route}}>
      <Router route={route} routes={routes} onRoute={onRoute} />
    </RouterContext.Provider>
  );
};
