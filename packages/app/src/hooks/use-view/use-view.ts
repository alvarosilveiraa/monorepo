import {ViewType} from '~/app/typings';
import {objectStyles, remapStyles} from '~/app/utils';

export const useView = ({
  alignContent,
  alignItems,
  alignSelf,
  aspectRatio,
  backfaceVisibility,
  backgroundColor,
  borderBottomColor,
  borderBottomEndRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStartRadius,
  borderBottomWidth,
  borderColor,
  borderEndColor,
  borderEndWidth,
  borderLeftColor,
  borderLeftWidth,
  borderRadius,
  borderRightColor,
  borderRightWidth,
  borderStartColor,
  borderStartWidth,
  borderStyle,
  borderTopColor,
  borderTopEndRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStartRadius,
  borderTopWidth,
  borderWidth,
  bottom,
  direction,
  display,
  elevation,
  end,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  height,
  justifyContent,
  left,
  margin,
  marginBottom,
  marginEnd,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginStart,
  marginTop,
  marginVertical,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  overflow,
  padding,
  paddingBottom,
  paddingEnd,
  paddingHorizontal,
  paddingLeft,
  paddingRight,
  paddingStart,
  paddingTop,
  paddingVertical,
  position,
  right,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  start,
  style,
  top,
  transform,
  width,
  zIndex,
  ...props
}: ViewType = {}) => {
  const styles = {
    alignContent,
    alignItems,
    alignSelf,
    aspectRatio,
    backfaceVisibility,
    backgroundColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderEndColor,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    bottom,
    direction,
    display,
    elevation,
    end,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    height,
    justifyContent,
    left,
    margin,
    marginBottom,
    marginEnd,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginStart,
    marginTop,
    marginVertical,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    opacity,
    overflow,
    padding,
    paddingBottom,
    paddingEnd,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingStart,
    paddingTop,
    paddingVertical,
    position,
    right,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    start,
    top,
    transform,
    width,
    zIndex,
    ...objectStyles(style),
  };

  const newProps = {
    ...props,
    style: remapStyles(styles),
  };

  return newProps;
};
