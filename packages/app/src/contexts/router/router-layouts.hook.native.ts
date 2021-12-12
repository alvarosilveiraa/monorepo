import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {RouterLayoutsType} from './router.type';

export const useRouterLayouts = ({route, onRoute}: RouterLayoutsType) => {
  const location = useLocation();

  useEffect(() => {
    if (route && location) {
      onRoute?.(route);
    }
  }, [route, location]);
};
