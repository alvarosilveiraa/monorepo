import React from 'react';
import {Button} from 'react-native';
import {UsersServiceEnum} from '@developer-ui/app';
import {View} from '~/app/components';
import {useNavigate, useService} from '~/app/hooks';

export const SigninPage = () => {
  const navigate = useNavigate();

  const {data, error, loading} = useService({service: UsersServiceEnum.GetUser, skip: true});

  console.log(data, loading);

  console.log(JSON.stringify(error, null, 2));

  return (
    <View width="100%" height="100%" alignItems="center" justifyContent="center">
      <Button
        onPress={() => navigate('/cube')}
        title="Entrar"
        color="#841584"
        accessibilityLabel="Butão roxo para entrar no site"
      />
    </View>
  );
};
