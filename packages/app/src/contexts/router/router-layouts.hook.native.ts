import {useCallback, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useLocation} from 'react-router-native';
import {useNavigate} from '~/app/hooks';
import {RouterLayoutsType} from './router.type';

export const useRouterLayouts = ({route, onRoute}: RouterLayoutsType) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackPress = useCallback(() => {
    navigate(-1);

    return true;
  }, [navigate]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [handleBackPress]);

  useEffect(() => {
    if (route && location) {
      onRoute?.(route);
    }
  }, [route, location]);
};
