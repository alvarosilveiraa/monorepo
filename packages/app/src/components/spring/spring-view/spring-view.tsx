import React from 'react';
import {animated} from '@react-spring/web';
import {View} from '../../core/view';
import {SpringViewType} from './spring-view.type';

const Animated = animated(View);

const SpringView = (props?: SpringViewType) => <Animated {...props} />;

export default SpringView;
