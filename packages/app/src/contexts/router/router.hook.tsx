import React, {useCallback, useState} from 'react';
import {LayoutRectangle} from 'react-native';
import {Route} from 'react-router-dom';
import {useTransition} from '~/app/hooks';
import {RouteFCType, RouteType, SpringStyleType} from '~/app/typings';
import {RouterLayouts} from './router-layouts';

export const useRouter = (route: RouteType | null, onRoute?: (route: RouteType) => void) => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  const getNewLayouts = (
    {component, Component, layouts = [], Layouts = [], layout, Layout}: RouteType,
    type: 'lower' | 'upper' | 'both' = 'both',
    hasComponent = true,
  ) => {
    const newLayouts: RouteFCType[] = [];

    if ((type === 'lower' || type === 'both') && component && hasComponent) {
      newLayouts.push(component);
    }

    if ((type === 'upper' || type === 'both') && Component && hasComponent) {
      newLayouts.push({
        Function: Component,
      });
    }

    if (type === 'lower' || type === 'both') {
      if (layouts.length) {
        newLayouts.push(...layouts);
      }

      if (layout) {
        newLayouts.push(layout);
      }
    }

    if (type === 'upper' || type === 'both') {
      if (Layouts.length) {
        newLayouts.push(...Layouts.map(Function => ({Function})));
      }

      if (Layout) {
        newLayouts.push({
          Function: Layout,
        });
      }
    }

    return newLayouts;
  };

  const getRouteLayouts = (route: RouteType, prevRoute?: RouteType) => {
    const prevLayouts = prevRoute ? getNewLayouts(prevRoute, 'both', false) : [];

    const newLayouts = getNewLayouts(route);

    newLayouts.push(...prevLayouts);

    return newLayouts;
  };

  const renderRoute = (newRoute: RouteType, prevRoute?: RouteType) => {
    const {path, name} = newRoute;

    const NewRoutes: JSX.Element[] = [];

    NewRoutes.push(
      <Route
        key={`route-${name}`}
        path={path}
        element={
          <RouterLayouts
            route={newRoute}
            layouts={getRouteLayouts(newRoute, prevRoute)}
            onRoute={onRoute}
          />
        }
      />,
    );

    return NewRoutes;
  };

  const getPercentage = useCallback((percent = 100, value = 100) => {
    return (percent * value) / 100;
  }, []);

  const getTransitions = useCallback(() => {
    const transitions = useTransition<RouteType | null, SpringStyleType>(route, {
      from: {opacity: 0, translateX: getPercentage(100, layout?.width)},
      enter: {opacity: 1, translateX: getPercentage(0, layout?.width)},
      leave: {opacity: 0, translateX: getPercentage(-50, layout?.width)},
    });

    return transitions;
  }, [route, layout, getPercentage]);

  return {
    layout,
    setLayout,
    renderRoute,
    getTransitions,
  };
};
