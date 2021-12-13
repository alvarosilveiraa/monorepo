import {CubePage, SigninPage} from './pages';
import {RouteType} from './typings';

export const routes: RouteType[] = [
  {
    name: 'Signin',
    path: '/signin',
    title: 'Signin',
    Component: SigninPage,
  },
  {
    name: 'Cube',
    path: '/cube',
    title: 'Cube',
    Component: CubePage,
  },
  {
    name: 'Redirect',
    path: '/*',
    redirect: '/signin',
  },
];
