import {ColorValue, FlexAlignType} from 'react-native';
import {
  SpringAlignContentType,
  SpringAlignSelfType,
  SpringBackfaceVisibilityType,
  SpringBorderStyleType,
  SpringDirectionType,
  SpringDisplayType,
  SpringFlexDirectionType,
  SpringFlexWrapType,
  SpringJustifyContentType,
  SpringOverflowType,
  SpringPositionType,
  SpringTransformType,
  SpringValue,
} from './';

export type SpringFlexStyleType = {
  alignContent?: SpringAlignContentType;
  alignItems?: FlexAlignType;
  alignSelf?: SpringAlignSelfType;
  aspectRatio?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number | string;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStartWidth?: number | string;
  borderTopWidth?: number;
  borderWidth?: number;
  bottom?: number | string;
  display?: SpringDisplayType;
  end?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: SpringFlexDirectionType;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: SpringFlexWrapType;
  height?: number | string | SpringValue<number>;
  justifyContent?: SpringJustifyContentType;
  left?: number | string;
  margin?: number | string;
  marginBottom?: number | string;
  marginEnd?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: SpringOverflowType;
  padding?: number | string;
  paddingBottom?: number | string;
  paddingEnd?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingStart?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: SpringPositionType;
  right?: number | string;
  start?: number | string;
  top?: number | string;
  width?: number | string | SpringValue<number>;
  zIndex?: number;
  direction?: SpringDirectionType;
};

export type SpringShadowStyleIOSType = {
  shadowColor?: ColorValue;
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowRadius?: number;
};

export type SpringTransformStyleType = {
  transform?: SpringTransformType | SpringValue<string>;
};

export type SpringStyleType = SpringFlexStyleType &
  SpringShadowStyleIOSType &
  SpringTransformStyleType & {
    backfaceVisibility?: SpringBackfaceVisibilityType;
    backgroundColor?: ColorValue;
    borderBottomColor?: ColorValue;
    borderBottomEndRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderBottomStartRadius?: number;
    borderBottomWidth?: number;
    borderColor?: ColorValue;
    borderEndColor?: ColorValue;
    borderLeftColor?: ColorValue;
    borderLeftWidth?: number;
    borderRadius?: number;
    borderRightColor?: ColorValue;
    borderRightWidth?: number;
    borderStartColor?: ColorValue;
    borderStyle?: SpringBorderStyleType;
    borderTopColor?: ColorValue;
    borderTopEndRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderTopStartRadius?: number;
    borderTopWidth?: number;
    borderWidth?: number;
    opacity?: number | SpringValue<number>;
    testID?: string;
    elevation?: number;
  };
