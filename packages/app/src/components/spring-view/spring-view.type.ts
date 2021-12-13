import {ReactNode} from 'react';
import {
  AccessibilityProps,
  GestureResponderHandlers,
  LayoutChangeEvent,
  Touchable,
  ViewPropsAndroid,
  ViewPropsIOS,
} from 'react-native';
import {SpringStyleType} from '~/app/typings';

export type SpringViewType = ViewPropsAndroid &
  ViewPropsIOS &
  GestureResponderHandlers &
  Touchable &
  AccessibilityProps &
  SpringStyleType & {
    style?: SpringStyleType;
    children?: ReactNode;
    onLayout?: (event: LayoutChangeEvent) => void;
  };
