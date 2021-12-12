import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {RouterRedirect} from './router.redirect';
import {RouterLayoutsType} from './router.type';

export const RouterLayouts = ({route, layouts = [], onRoute}: RouterLayoutsType) => {
  const location = useLocation();

  useEffect(() => {
    if (route && location) {
      if (route.title) {
        document.title = route.title;
      }

      onRoute?.(route);
    }
  }, [route, location]);

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
