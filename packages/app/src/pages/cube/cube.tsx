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

  const [opacityStyles, opacityApi] = useSpring<SpringViewStyleType>(() => ({
    opacity: 0,
    config: {duration: 200},
  }));

  const startAnimation = useCallback(
    async (width: number, height: number) => {
      const greaterLayout = width > height ? width : height;

      rotateApi.start({rotate: 360});

      layoutApi.start({width: greaterLayout, height: greaterLayout});

      borderRadiusApi.start({borderRadius: 0});

      await new Promise(resolve => setTimeout(resolve, 400));

      opacityApi.start({opacity: 1});
    },
    [rotateApi, layoutApi, borderRadiusApi, opacityApi],
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

      <SpringView
        style={{...opacityStyles, top: 0, left: 0}}
        position="absolute"
        width={300}
        height="100%"
        backgroundColor="#1a1a1a"
      />
    </View>
  );
};
