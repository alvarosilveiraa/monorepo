import {useView} from '~/app/hooks';
import {TextType} from '~/app/typings';
import {objectStyles, remapStyles} from '~/app/utils';

export const useText = ({
  color,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
  ...others
}: TextType = {}) => {
  const {style, ...props} = useView(others);

  const styles = {
    color,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
    textDecorationLine,
    textDecorationStyle,
    textDecorationColor,
    textShadowColor,
    textShadowOffset,
    textShadowRadius,
    textTransform,
    ...objectStyles(style),
  };

  return {
    ...props,
    style: remapStyles(styles),
  };
};
