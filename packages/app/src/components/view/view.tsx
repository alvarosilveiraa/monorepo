import React from 'react';
import {View as RNView} from 'react-native';
import {useView} from './view.hook';
import {ViewType} from './view.type';

const View = (props: ViewType) => <RNView {...useView(props)} />;

export default View;
