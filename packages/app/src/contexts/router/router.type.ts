import {RouteFCType, RouteType} from '../../typings';

export type RouterType = {
  routes: RouteType[];
  onRoute?: (route: RouteType) => void;
};

export type RouterContextType = {
  route?: RouteType | null;
};

export type RouterProviderType = {
  routes?: RouteType[];
};

export type RouterLayoutsType = {
  route?: RouteType;
  layouts?: RouteFCType[];
  onRoute?: (route: RouteType) => void;
};

export type RouterRedirectType = {
  path: string;
};
