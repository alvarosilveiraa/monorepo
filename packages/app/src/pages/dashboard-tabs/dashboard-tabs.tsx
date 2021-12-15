import React from 'react';
import {Text} from '~/app/components';
import {useRouterContext} from '~/app/contexts';

export const DashboardTabsPage = () => {
  const {route} = useRouterContext();

  return <Text>{route?.name}</Text>;
};
