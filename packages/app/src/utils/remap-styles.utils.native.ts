import {STYLES} from '~/app/constants';
import {objectStyles} from './object-styles.utils';

export const remapStyles = (styles?: any) => {
  const newStyles = objectStyles(styles);

  const updateTransformStyle = ({name, sufix}: {name: string; sufix?: string}) => {
    const value = newStyles[name];

    if (typeof value === 'number') {
      if (!newStyles.transform) {
        newStyles.transform = [];
      }

      newStyles.transform.push({[name]: sufix ? `${value}${sufix}` : value} as any);

      delete newStyles.perspective;
    }
  };

  STYLES.forEach(updateTransformStyle);

  return newStyles;
};
