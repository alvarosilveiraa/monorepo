import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {useRouter} from './router.hook';
import {RouterType} from './router.type';

export const Router = ({route, routes, onRoute}: RouterType) => {
  const {renderRoute} = useRouter(route, onRoute);

  return (
    <BrowserRouter>
      <Routes>{routes.map(renderRoute)}</Routes>
    </BrowserRouter>
  );
};
