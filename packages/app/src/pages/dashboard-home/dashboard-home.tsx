import React from 'react';
import {Button} from 'react-native';
import {Text} from '~/app/components';
import {useNavigate} from '~/app/hooks';
import {Toast} from '~/app/theme';

export const DashboardHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Toast backgroundColor="red" marginBottom={16} />

      <Text marginBottom={16}>Home</Text>

      <Button onPress={() => navigate('/dashboard/tabs')} title="Dashboard Tabs" color="purple" />
    </>
  );
};
