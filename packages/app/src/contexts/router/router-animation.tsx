import React from 'react';
import {SpringView} from '~/app/components';
import {useAnimation} from '~/app/hooks';

export const RouterAnimation = ({route, children}: any) => {
  if (!route || !route.animation) {
    return children;
  }

  const {renderTransition} = useAnimation(route.animation, route);

  return renderTransition((styles, item) => (
    <SpringView
      key={`route-${item?.name || 'none'}`}
      style={styles}
      width="100%"
      height="100%"
      position="absolute"
    >
      {children}
    </SpringView>
  ));
};
