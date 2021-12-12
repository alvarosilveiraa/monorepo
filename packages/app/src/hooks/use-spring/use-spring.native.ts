import {UseSpringProps, useSpring as useSpringNative} from '@react-spring/native';

export const useSpring = (props: UseSpringProps) => {
  const [styles, api] = useSpringNative(() => ({...props, loop: false}));

  if (styles.perspective) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({perspective: styles.perspective});
  }

  if (styles.rotate) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({rotate: styles.rotate.to((value: number) => `${value}deg`)});
  }

  if (styles.rotateX) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({rotate: styles.rotateX.to((value: number) => `${value}deg`)});
  }

  if (styles.rotateY) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({rotate: styles.rotateY.to((value: number) => `${value}deg`)});
  }

  if (styles.rotateZ) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({rotate: styles.rotateZ.to((value: number) => `${value}deg`)});
  }

  if (styles.scale) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({scale: styles.scale});
  }

  if (styles.scaleX) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({scaleX: styles.scaleX});
  }

  if (styles.scaleY) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({scaleY: styles.scaleY});
  }

  if (styles.translateX) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({translateX: styles.translateX});
  }

  if (styles.translateY) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({translateY: styles.translateY});
  }

  if (styles.skewX) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({rotate: styles.skewX.to((value: number) => `${value}deg`)});
  }

  if (styles.skewY) {
    if (!styles.transform) {
      styles.transform = [];
    }

    styles.transform.push({rotate: styles.skewY.to((value: number) => `${value}deg`)});
  }

  return [styles, api];
};
