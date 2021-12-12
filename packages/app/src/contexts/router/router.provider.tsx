import React, {useState} from 'react';
import {RouteType} from '../../typings';
import {Router} from './router';
import {RouterContext} from './router.context';
import {RouterProviderType} from './router.type';

export const RouterProvider = ({routes = []}: RouterProviderType) => {
  const [route, setRoute] = useState<RouteType | null>(null);

  return (
    <RouterContext.Provider value={{route}}>
      <Router routes={routes} onRoute={setRoute} />
    </RouterContext.Provider>
  );
};
