import React from 'react';
import {useRouterLayouts} from './router-layouts.hook';
import {RouterRedirect} from './router.redirect';
import {RouterLayoutsType} from './router.type';

export const RouterLayouts = ({route, layouts = [], onRoute}: RouterLayoutsType) => {
  useRouterLayouts({route, onRoute});

  if (route?.redirect) {
    return <RouterRedirect path={route.redirect} />;
  }

  const Layout = layouts.reduce((prev, next) => {
    const PrevComponent = prev?.Function;

    const prevProps = prev?.props;

    const NextComponent = next?.Function;

    const nextProps = next?.props;

    const Function = () => {
      if (!PrevComponent) {
        return <NextComponent {...nextProps} />;
      }

      return (
        <NextComponent {...nextProps}>
          <PrevComponent {...prevProps} />
        </NextComponent>
      );
    };

    return {
      Function,
      props: prevProps,
    };
  });

  return <Layout.Function {...Layout.props} />;
};
