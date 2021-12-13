import {ViewStyle} from 'react-native';
import {SpringTransformType, SpringValue} from './';

export type SpringStyleType = ViewStyle & {
  opacity?: number | SpringValue<number>;
  width?: number | string | SpringValue<number>;
  height?: number | string | SpringValue<number>;
  transform?: SpringTransformType | SpringValue<string>;
  translateX?: number | SpringValue<number>;
};
