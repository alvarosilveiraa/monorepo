import React from 'react';
import {animated} from '@react-spring/web';
import {Text} from '../text';
import {SpringTextType} from './spring-text.type';

const Animated = animated(Text);

const SpringText = (props?: SpringTextType) => <Animated {...props} />;

export default SpringText;
