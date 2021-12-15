import React, {useEffect} from 'react';
import {useNavigate} from '~/app/hooks';
import {useRouterLayouts} from './router-layouts.hook';
import {RouterRedirect} from './router.redirect';
import {RouterLayoutsType} from './router.type';

export const RouterLayouts = ({activeRoute, route, layouts = [], onRoute}: RouterLayoutsType) => {
  useRouterLayouts({route, onRoute});
  const navigate = useNavigate();

  useEffect(() => {
    if (route?.redirect && activeRoute?.prevRoute?.redirect && activeRoute?.prevRoute?.prevRoute) {
      const {location} = activeRoute?.prevRoute?.prevRoute;

      if (location) {
        navigate(-1);
      }
    }
  }, [activeRoute, route, navigate]);

  if (route?.redirect) {
    if (activeRoute?.prevRoute?.redirect && activeRoute?.prevRoute?.prevRoute) {
      return null;
    }

    return <RouterRedirect path={route.redirect} />;
  }

  const Layout = layouts.reduce((prev, next) => {
    const PrevComponent = prev?.Function;

    const prevProps = prev?.props;

    const NextComponent = next?.Function;

    const nextProps = next?.props;

    const Function = () => {
      if (!PrevComponent) {
        return <NextComponent {...nextProps} route={route} />;
      }

      return (
        <NextComponent {...nextProps} route={route}>
          <PrevComponent {...prevProps} route={route} />
        </NextComponent>
      );
    };

    return {
      Function,
      props: prevProps,
    };
  });

  return <Layout.Function {...Layout.props} route={route} />;
};
