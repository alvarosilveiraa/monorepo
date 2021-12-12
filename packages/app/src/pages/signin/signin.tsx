import React from 'react';
import {Button} from 'react-native';
import {View} from '~/app/components';
import {useNavigate} from '~/app/hooks';

export const SigninPage = () => {
  const navigate = useNavigate();

  return (
    <View width="100%" height="100%" alignItems="center" justifyContent="center">
      <Button
        onPress={() => navigate('/cube')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
