import {ViewProps} from 'react-native';
import {SpringStyleType} from '~/app/typings';

export type SpringViewType = ViewProps &
  SpringStyleType & {
    style?: SpringStyleType;
  };
