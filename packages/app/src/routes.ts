import {DashboardHomePage, DashboardPage, SigninPage} from './pages';
import {AnimationEnum, RouteType} from './typings';

export const routes: RouteType[] = [
  {
    name: 'Signin',
    path: '/signin',
    title: 'Developer UI - Signin',
    Component: SigninPage,
    animation: AnimationEnum.TranslateX,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    title: 'Developer UI - Dashboard',
    Component: DashboardPage,
  },
  {
    name: 'DashboardHome',
    path: '/dashboard/home',
    title: 'Developer UI - Dashboard > Home',
    Component: DashboardHomePage,
    Layout: DashboardPage,
  },
  {
    name: 'Redirect',
    path: '/*',
    redirect: '/signin',
  },
];
