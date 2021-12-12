import React from 'react';
import {RouterProvider} from './contexts';
import {routes} from './routes';

export const App = () => <RouterProvider routes={routes} />;
