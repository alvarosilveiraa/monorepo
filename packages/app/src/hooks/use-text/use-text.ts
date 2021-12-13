import {useView} from '~/app/hooks';
import {TextType} from '~/app/typings';

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
  ...props
}: TextType = {}) => {
  const viewProps = useView(props);

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
  };

  return {
    ...viewProps,
    style: [styles, ...viewProps.style],
  };
};
