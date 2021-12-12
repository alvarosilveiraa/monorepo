import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {RouteType} from '~/app/typings';
import {RouterLayouts} from './router-layouts';
import {useRouter} from './router.hook';
import {RouterType} from './router.type';

export const Router = ({routes, onRoute}: RouterType) => {
  const {getRouteLayouts} = useRouter();

  const renderRoute = (route: RouteType, prevRoute?: RouteType) => {
    const {path, name} = route;

    const NewRoutes: JSX.Element[] = [];

    NewRoutes.push(
      <Route
        key={`route-${name}`}
        path={path}
        element={
          <RouterLayouts
            route={route}
            layouts={getRouteLayouts(route, prevRoute)}
            onRoute={onRoute}
          />
        }
      />,
    );

    return NewRoutes;
  };

  return (
    <NativeRouter>
      <Routes>{routes.map(route => renderRoute(route))}</Routes>
    </NativeRouter>
  );
};
