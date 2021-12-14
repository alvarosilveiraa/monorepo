import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';
import {useScrollView} from '~/app/hooks';
import {ScrollViewType} from '~/app/typings';

const ScrollView = (props?: ScrollViewType) => <RNScrollView {...useScrollView(props)} />;

export default ScrollView;
