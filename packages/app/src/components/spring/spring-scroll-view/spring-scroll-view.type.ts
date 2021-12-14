import {ScrollViewProps} from 'react-native';
import {SpringViewStyleType} from '~/app/typings';

export type SpringScrollViewType = ScrollViewProps &
  SpringViewStyleType & {
    style?: SpringViewStyleType;
  };
