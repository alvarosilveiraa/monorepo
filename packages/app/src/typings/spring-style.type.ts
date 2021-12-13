import {TextStyle, ViewStyle} from 'react-native';
import {SpringTransformType, SpringValue} from './';

export type SpringViewStyleType = ViewStyle & {
  opacity?: number | SpringValue<number>;
  width?: number | string | SpringValue<number>;
  height?: number | string | SpringValue<number>;
  borderRadius?: number | SpringValue<number>;
  backgroundColor?: string | SpringValue<string>;
  transform?: SpringTransformType | SpringValue<string>;
  perspective?: number | SpringValue<number>;
  rotate?: number | SpringValue<number>;
  rotateX?: number | SpringValue<number>;
  rotateY?: number | SpringValue<number>;
  rotateZ?: number | SpringValue<number>;
  scale?: number | SpringValue<number>;
  scaleX?: number | SpringValue<number>;
  scaleY?: number | SpringValue<number>;
  skewX?: number | SpringValue<number>;
  skewY?: number | SpringValue<number>;
  translateX?: number | SpringValue<number>;
  matrix?: number[];
};

export type SpringTextStyleType = TextStyle & {
  opacity?: number | SpringValue<number>;
  color?: string | SpringValue<string>;
  transform?: SpringTransformType | SpringValue<string>;
  translateX?: number | SpringValue<number>;
};
