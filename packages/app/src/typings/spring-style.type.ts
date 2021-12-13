import {TextStyle, ViewStyle} from 'react-native';
import {SpringTransformType, SpringValue} from './';

export type SpringViewStyleType = ViewStyle & {
  opacity?: number | SpringValue<number>;
  width?: number | string | SpringValue<number>;
  height?: number | string | SpringValue<number>;
  backgroundColor?: string | SpringValue<string>;
  transform?: SpringTransformType | SpringValue<string>;
  translateX?: number | SpringValue<number>;
};

export type SpringTextStyleType = TextStyle & {
  opacity?: number | SpringValue<number>;
  color?: string | SpringValue<string>;
  transform?: SpringTransformType | SpringValue<string>;
  translateX?: number | SpringValue<number>;
};
