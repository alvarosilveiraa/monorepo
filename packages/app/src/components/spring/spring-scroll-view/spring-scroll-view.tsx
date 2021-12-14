import React from 'react';
import {animated} from '@react-spring/web';
import {ScrollView} from '../../core/scroll-view';
import {SpringScrollViewType} from './spring-scroll-view.type';

const Animated = animated(ScrollView);

const SpringScrollView = (props?: SpringScrollViewType) => <Animated {...props} />;

export default SpringScrollView;
