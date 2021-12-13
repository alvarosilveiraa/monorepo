import {TextProps} from 'react-native';
import {SpringTextStyleType} from '~/app/typings';

export type SpringTextType = TextProps &
  SpringTextStyleType & {
    style?: SpringTextStyleType;
  };
