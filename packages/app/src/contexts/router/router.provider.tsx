import React, {useState} from 'react';
import {RouteType} from '~/app/typings';
import {Router} from './router';
import {RouterContext} from './router.context';
import {RouterProviderType} from './router.type';

export const RouterProvider = ({routes = [], transition}: RouterProviderType) => {
  const [route, setRoute] = useState<RouteType | null>(null);

  return (
    <RouterContext.Provider value={{route}}>
      <Router route={route} routes={routes} onRoute={setRoute} transition={transition} />
    </RouterContext.Provider>
  );
};
