import {useCallback, useState} from 'react';
import {LayoutChangeEvent, LayoutRectangle} from 'react-native';
import {useTransition} from '~/app/hooks';
import {AnimationEnum, AnimationRenderType, SpringViewStyleType} from '~/app/typings';
import {getPercentage} from '~/app/utils';

export const useAnimation = (animation?: AnimationEnum | null, value?: any) => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  const onLayout = (e: LayoutChangeEvent) => setLayout(e.nativeEvent.layout);

  const renderTransition = useCallback(
    (render: AnimationRenderType) => {
      if (animation === AnimationEnum.TranslateX) {
        return useTransition<any, SpringViewStyleType>(value, {
          from: {opacity: 0, translateX: getPercentage(100, layout?.width)},
          enter: {opacity: 1, translateX: getPercentage(0, layout?.width)},
          leave: {opacity: 0, translateX: getPercentage(-50, layout?.width)},
        })(render);
      }

      return render();
    },
    [animation, value, layout],
  );

  return {
    onLayout,
    renderTransition,
  };
};
