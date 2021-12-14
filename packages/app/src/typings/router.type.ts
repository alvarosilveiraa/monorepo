import {FC} from 'react';
import {AnimationEnum} from './';

export type RouteFCType = {
  Function: FC<any>;
  props?: any;
};

export type RouteType = {
  name: string;
  path: string;
  title?: string;
  component?: RouteFCType;
  Component?: FC<any>;
  layouts?: RouteFCType[];
  Layouts?: FC<any>[];
  layout?: RouteFCType;
  Layout?: FC<any>;
  redirect?: string;
  animation?: AnimationEnum;
  prevRoute?: RouteType | null;
};
