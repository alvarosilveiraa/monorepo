export const objectStyles = (styles?: any) => {
  if (!styles) {
    return {};
  }

  if (Array.isArray(styles)) {
    const object: any = {};

    styles.forEach(style => {
      Object.keys(style).forEach(key => {
        object[key] = style[key];
      });
    });

    return object;
  }

  Object.keys(styles).forEach(key => {
    const value = (styles as any)[key];

    if (typeof value === 'undefined') {
      delete (styles as any)[key];
    }
  });

  return styles;
};

export const remapStyles = (styles?: any) => objectStyles(styles);
