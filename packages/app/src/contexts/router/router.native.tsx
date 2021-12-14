import React from 'react';
import {NativeRouter, Routes} from 'react-router-native';
import {useRouter} from './router.hook';
import {RouterType} from './router.type';

export const Router = ({route, routes, onRoute}: RouterType) => {
  const {renderRoute} = useRouter(route, onRoute);

  return (
    <NativeRouter>
      <Routes>{routes.map(newRoute => renderRoute(newRoute))}</Routes>
    </NativeRouter>
  );
};
