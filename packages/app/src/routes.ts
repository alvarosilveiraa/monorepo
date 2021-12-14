import {CubePage, HomePage, SigninPage} from './pages';
import {AnimationEnum, RouteType} from './typings';

export const routes: RouteType[] = [
  {
    name: 'Signin',
    path: '/signin',
    title: 'Signin',
    Component: SigninPage,
    animation: AnimationEnum.TranslateX,
  },
  {
    name: 'Cube',
    path: '/cube',
    title: 'Cube',
    Component: CubePage,
  },
  {
    name: 'CubeHome',
    path: '/cube/home',
    title: 'CubeHome',
    Component: HomePage,
    Layout: CubePage,
  },
  {
    name: 'CubeSignin',
    path: '/cube/signin',
    title: 'CubeSignin',
    Component: SigninPage,
    Layout: CubePage,
  },
  {
    name: 'Redirect',
    path: '/*',
    redirect: '/signin',
  },
];
