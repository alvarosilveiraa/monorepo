import React from 'react';
import {Button} from 'react-native';
import {Text, View} from '~/app/components';
import {useNavigate} from '~/app/hooks';

export const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <View height="100%" alignItems="center" justifyContent="center">
      <Text marginBottom={8}>Olá</Text>

      <Button onPress={() => navigate('/dashboard')} title="Entrar" color="purple" />
    </View>
  );
};
