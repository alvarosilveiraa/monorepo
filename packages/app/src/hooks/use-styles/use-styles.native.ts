import {SpringViewStyleType} from '@developer-ui/app';

const STYLES = [
  {
    name: 'perspective',
  },
  {
    name: 'rotate',
    sufix: 'deg',
  },
  {
    name: 'rotateX',
    sufix: 'deg',
  },
  {
    name: 'rotateY',
    sufix: 'deg',
  },
  {
    name: 'rotateZ',
    sufix: 'deg',
  },
  {
    name: 'scale',
  },
  {
    name: 'scaleX',
  },
  {
    name: 'scaleY',
  },
  {
    name: 'translateX',
  },
  {
    name: 'translateY',
  },
  {
    name: 'skewX',
    sufix: 'deg',
  },
  {
    name: 'skewY',
    sufix: 'deg',
  },
];

export const useStyles = (styles?: SpringViewStyleType) => {
  if (!styles || Array.isArray(styles)) {
    return styles;
  }

  const updateTransformStyle = ({name, sufix}: {name: string; sufix?: string}) => {
    const value = (styles as any)[name];

    if (typeof value === 'number') {
      if (!styles.transform) {
        styles.transform = [];
      }

      styles.transform.push({[name]: sufix ? `${value}${sufix}` : value} as any);

      delete styles.perspective;
    }
  };

  STYLES.forEach(updateTransformStyle);

  return styles;
};
