import React from 'react';
import {Button} from 'react-native';
import {ScrollView, SpringView, View} from '~/app/components';
import {useAnimation, useNavigate} from '~/app/hooks';
import {AnimationEnum} from '~/app/typings';

export const DashboardPage = ({route, children}: any) => {
  const navigate = useNavigate();
  const {onLayout, renderTransition} = useAnimation(AnimationEnum.TranslateX, route);

  const renderContent = () => {
    if (children) {
      return children;
    }

    return (
      <View height={2000} paddingVertical={32} alignItems="center">
        <Button onPress={() => navigate('/dashboard/home')} title="Dashboard Home" color="purple" />
      </View>
    );
  };

  return (
    <View height="100%" position="relative">
      <View height={56} backgroundColor="purple" />

      {renderTransition((styles, item) => (
        <SpringView
          key={`content-${item?.name || 'none'}`}
          width="100%"
          flex={1}
          style={styles}
          onLayout={onLayout}
        >
          <ScrollView flexGrow={1} alignItems="center" justifyContent="center">
            {renderContent()}
          </ScrollView>
        </SpringView>
      ))}
    </View>
  );
};
