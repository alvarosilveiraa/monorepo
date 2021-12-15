import {DashboardHomePage, DashboardPage, DashboardTabsPage, SigninPage} from './pages';
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
    name: 'DashboardTabsOne',
    path: '/dashboard/tabs/one',
    title: 'Developer UI - Dashboard > Tabs One',
    Component: DashboardTabsPage,
  },
  {
    name: 'DashboardTabsTwo',
    path: '/dashboard/tabs/two',
    title: 'Developer UI - Dashboard > Tabs Two',
    Component: DashboardTabsPage,
  },
  {
    name: 'DashboardTabsRedirect',
    path: '/dashboard/tabs/*',
    redirect: '/dashboard/tabs/one',
  },
  {
    name: 'DashboardHome',
    path: '/dashboard/home',
    title: 'Developer UI - Dashboard > Home',
    Component: DashboardHomePage,
    Layout: DashboardPage,
  },
  {
    name: 'HomeRedirect',
    path: '/*',
    redirect: '/signin',
  },
];
