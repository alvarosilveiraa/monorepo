import React from 'react';
import {Button} from 'react-native';
import {useRouterContext} from '@developer-ui/app';
import {ScrollView, SpringView, View} from '~/app/components';
import {useAnimation, useNavigate} from '~/app/hooks';
import {AnimationEnum} from '~/app/typings';

export const DashboardPage = ({route: initialRoute, children}: any) => {
  const navigate = useNavigate();
  const {route} = useRouterContext();
  const activeRoute = route || initialRoute;
  const {onLayout, renderTransition} = useAnimation(AnimationEnum.TranslateX, activeRoute);

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

      <View flex={1}>
        {renderTransition((styles, item) => (
          <SpringView
            key={`content-${item?.name || 'none'}`}
            width="100%"
            height="100%"
            position="absolute"
            style={styles}
            onLayout={onLayout}
          >
            <ScrollView flexGrow={1} alignItems="center" justifyContent="center">
              {renderContent()}
            </ScrollView>
          </SpringView>
        ))}
      </View>
    </View>
  );
};
