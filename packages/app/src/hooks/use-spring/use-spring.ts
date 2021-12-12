import {UseSpringProps, useSpring as useSpringWeb} from '@react-spring/web';

export const useSpring = (props: UseSpringProps) => {
  const [styles, api] = useSpringWeb(() => props);

  return [styles, api];
};
