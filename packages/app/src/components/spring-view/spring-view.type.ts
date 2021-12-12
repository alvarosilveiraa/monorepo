import {
  AccessibilityProps,
  GestureResponderHandlers,
  Touchable,
  ViewPropsAndroid,
  ViewPropsIOS,
} from 'react-native';
import {SpringStyleType} from '../../typings';

export type SpringViewType = ViewPropsAndroid &
  ViewPropsIOS &
  GestureResponderHandlers &
  Touchable &
  AccessibilityProps &
  SpringStyleType & {
    style?: SpringStyleType;
  };
