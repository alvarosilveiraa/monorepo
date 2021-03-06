import React from 'react';
import {Button} from 'react-native';
import {Text} from '~/app/components';
import {useNavigate} from '~/app/hooks';
import {Toast} from '~/app/theme';

export const DashboardHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Toast>Mensagem</Toast>

      <Text marginBottom={16}>Home</Text>

      <Button onPress={() => navigate('/dashboard/tabs')} title="Dashboard Tabs" color="purple" />
    </>
  );
};
