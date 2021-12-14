import React from 'react';
import {Button} from 'react-native';
import {AnimationEnum} from '@developer-ui/app';
import {SpringView, View} from '~/app/components';
import {useAnimation, useNavigate} from '~/app/hooks';

export const CubePage = ({route, children}: any) => {
  const navigate = useNavigate();
  const {onLayout, renderTransition} = useAnimation(AnimationEnum.TranslateX, route);

  const renderContent = () => {
    if (children) {
      return children;
    }

    return <Button onPress={() => navigate('/cube/home')} title="CubeHome" color="purple" />;
  };

  return (
    <View width="100%" height="100%">
      <View width="100%" height={56} backgroundColor="purple" />

      {renderTransition((styles, item) => (
        <SpringView
          key={item.name}
          style={styles}
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
          onLayout={onLayout}
        >
          {renderContent()}
        </SpringView>
      ))}
    </View>
  );
};
