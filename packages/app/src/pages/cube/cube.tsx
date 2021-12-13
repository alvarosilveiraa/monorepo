import React, {useCallback, useEffect, useState} from 'react';
import {LayoutRectangle} from 'react-native';
import {SpringViewStyleType} from '@developer-ui/app';
import {SpringView, View} from '~/app/components';
import {useSpring} from '~/app/hooks';

export const CubePage = () => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  const [rotateStyles, rotateApi] = useSpring<SpringViewStyleType>(() => ({
    rotate: 0,
    config: {duration: 400},
  }));

  const [layoutStyles, layoutApi] = useSpring<SpringViewStyleType>(() => ({
    width: 0,
    height: 0,
    config: {duration: 400},
  }));

  const [borderRadiusStyles, borderRadiusApi] = useSpring<SpringViewStyleType>(() => ({
    borderRadius: 1000,
    config: {duration: 200},
  }));

  const startAnimation = useCallback(
    async (width: number, height: number) => {
      const greaterLayout = width > height ? width : height;

      rotateApi.start({rotate: 360});

      layoutApi.start({width: greaterLayout, height: greaterLayout});

      borderRadiusApi.start({borderRadius: 0});
    },
    [rotateApi, layoutApi, borderRadiusApi],
  );

  useEffect(() => {
    if (layout) {
      const {width, height} = layout;

      startAnimation(width, height);
    }
  }, [layout, startAnimation]);

  return (
    <View
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      onLayout={e => setLayout(e.nativeEvent.layout)}
    >
      <SpringView
        style={{...rotateStyles, ...layoutStyles, ...borderRadiusStyles}}
        backgroundColor="purple"
      />
    </View>
  );
};
