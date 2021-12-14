import React from 'react';
import {Button} from 'react-native';
import {Text, View} from '~/app/components';
import {useNavigate} from '~/app/hooks';

export const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <View width="100%" height="100%" alignItems="center" justifyContent="center">
      <Text marginBottom={8}>Olá</Text>

      <Button onPress={() => navigate('/cube')} title="Entrar" color="purple" />
    </View>
  );
};
