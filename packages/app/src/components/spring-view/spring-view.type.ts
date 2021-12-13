import {ViewProps} from 'react-native';
import {SpringViewStyleType} from '~/app/typings';

export type SpringViewType = ViewProps &
  SpringViewStyleType & {
    style?: SpringViewStyleType;
  };
