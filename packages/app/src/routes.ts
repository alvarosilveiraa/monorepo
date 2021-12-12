// import {getRouteTitle} from './contexts';
import {CubePage} from './pages';
import {RouteType} from './typings';

export const routes: RouteType[] = [
  {
    name: 'Cube',
    path: '/',
    // title: getRouteTitle('Cube'),
    Component: CubePage,
  },
  {
    name: 'Redirect',
    path: '/*',
    redirect: '/',
  },
];
