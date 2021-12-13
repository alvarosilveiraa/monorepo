import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {SpringView} from '~/app/components';
import {useRouter} from './router.hook';
import {RouterType} from './router.type';

export const Router = ({route, routes, onRoute, transition}: RouterType) => {
  const {setLayout, renderRoute, getTransition} = useRouter(route, onRoute);

  return (
    <BrowserRouter>
      {getTransition(transition)((styles, item) => (
        <SpringView
          key={item?.name}
          style={styles}
          position="absolute"
          width="100%"
          height="100%"
          onLayout={e => setLayout(e.nativeEvent.layout)}
        >
          <Routes>{routes.map(newRoute => renderRoute(newRoute))}</Routes>
        </SpringView>
      ))}
    </BrowserRouter>
  );
};
