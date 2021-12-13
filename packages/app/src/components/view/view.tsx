import React from 'react';
import {View as RNView} from 'react-native';
import {useView} from '~/app/hooks';
import {ViewType} from '~/app/typings';

const View = (props?: ViewType) => <RNView {...useView(props)} />;

export default View;
