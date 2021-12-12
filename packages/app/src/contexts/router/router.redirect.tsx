import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {RouterRedirectType} from './router.type';

export const RouterRedirect = ({path}: RouterRedirectType): null => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [path]);

  return null;
};
