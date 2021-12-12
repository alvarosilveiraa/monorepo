import {RouteFCType, RouteType} from '../../typings';

export const useRouter = () => {
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

  return {
    getRouteLayouts,
  };
};
