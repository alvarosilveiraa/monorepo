import {RouteFCType, RouteType, SpringViewStyleType} from '~/app/typings';

export type RouterType = {
  route: RouteType | null;
  routes: RouteType[];
  onRoute?: (route: RouteType) => void;
  useTransition?: boolean;
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

export type RouterTransitionRenderType = (styles?: SpringViewStyleType, item?: RouteType) => void;
