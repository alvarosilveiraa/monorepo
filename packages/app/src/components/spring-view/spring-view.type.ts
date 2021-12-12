import {
  AccessibilityProps,
  GestureResponderHandlers,
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
  };
