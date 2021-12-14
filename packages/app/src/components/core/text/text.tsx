import React from 'react';
import {Text as RNText} from 'react-native';
import {useText} from '~/app/hooks';
import {TextType} from '~/app/typings';

const Text = (props?: TextType) => <RNText {...useText(props)} />;

export default Text;
