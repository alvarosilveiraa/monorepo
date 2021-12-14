import React from 'react';
import {Route} from 'react-router-dom';
import {RouteFCType, RouteType} from '~/app/typings';
import {RouterAnimation} from './router-animation';
import {RouterLayouts} from './router-layouts';

export const useRouter = (route: RouteType | null, onRoute?: (route: RouteType) => void) => {
  const getRouteLayouts = ({
    component,
    Component,
    layouts = [],
    Layouts = [],
    layout,
    Layout,
  }: RouteType) => {
    const newLayouts: RouteFCType[] = [];

    if (component) {
      newLayouts.push(component);
    }

    if (Component) {
      newLayouts.push({
        Function: Component,
      });
    }

    if (layouts.length) {
      newLayouts.push(...layouts);
    }

    if (layout) {
      newLayouts.push(layout);
    }

    if (Layouts.length) {
      newLayouts.push(...Layouts.map(Function => ({Function})));
    }

    if (Layout) {
      newLayouts.push({
        Function: Layout,
      });
    }

    return newLayouts;
  };

  const renderRoute = (newRoute: RouteType) => {
    const {path, name} = newRoute;

    return (
      <Route
        key={`route-${name}`}
        path={path}
        element={
          <RouterAnimation route={route}>
            <RouterLayouts route={newRoute} layouts={getRouteLayouts(newRoute)} onRoute={onRoute} />
          </RouterAnimation>
        }
      />
    );
  };

  return {
    renderRoute,
  };
};
