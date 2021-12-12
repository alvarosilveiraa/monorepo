import {
  FlexAlignType,
  MatrixTransform,
  PerpectiveTransform,
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
  ScaleTransform,
  ScaleXTransform,
  ScaleYTransform,
  SkewXTransform,
  SkewYTransform,
  TranslateXTransform,
  TranslateYTransform,
} from 'react-native';

export {SpringValue} from '@react-spring/web';

export type SpringAlignContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around';

export type SpringJustifyContentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type SpringAlignSelfType = 'auto' | FlexAlignType;

export type SpringDisplayType = 'none' | 'flex';

export type SpringFlexDirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type SpringFlexWrapType = 'wrap' | 'nowrap' | 'wrap-reverse';

export type SpringOverflowType = 'visible' | 'hidden' | 'scroll';

export type SpringPositionType = 'absolute' | 'relative';

export type SpringDirectionType = 'inherit' | 'ltr' | 'rtl';

export type SpringBackfaceVisibilityType = 'visible' | 'hidden';

export type SpringBorderStyleType = 'solid' | 'dotted' | 'dashed';

export type SpringTransformType = (
  | PerpectiveTransform
  | RotateTransform
  | RotateXTransform
  | RotateYTransform
  | RotateZTransform
  | ScaleTransform
  | ScaleXTransform
  | ScaleYTransform
  | TranslateXTransform
  | TranslateYTransform
  | SkewXTransform
  | SkewYTransform
  | MatrixTransform
)[];
