import {RouteFCType, RouteType, SpringViewStyleType} from '~/app/typings';

export type RouterTransitionType = 'none' | 'simple';

export type RouterType = {
  route: RouteType | null;
  routes: RouteType[];
  onRoute?: (route: RouteType) => void;
  transition?: RouterTransitionType;
};

export type RouterContextType = {
  route?: RouteType | null;
};

export type RouterProviderType = {
  routes?: RouteType[];
  transition?: RouterTransitionType;
};

export type RouterLayoutsType = {
  route?: RouteType;
  layouts?: RouteFCType[];
  onRoute?: (route: RouteType) => void;
};

export type RouterRedirectType = {
  path: string;
};

export type RouterTransitionRenderType = (styles?: SpringViewStyleType, item?: RouteType) => void;
