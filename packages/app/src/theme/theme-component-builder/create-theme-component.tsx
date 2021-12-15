import React from 'react';
import {ThemeElement} from '../theme.type';
import {ThemeComponentType} from '../theme.type';
import {ThemeComponentBuilder} from './theme-component-builder';

export function createThemeComponent<P>(component: ThemeComponentType) {
  const ThemeComponent = (props: P): ThemeElement<P> => {
    const newComponent = {...component, props: {...component.props, ...props}};

    return <ThemeComponentBuilder<P> component={newComponent} />;
  };

  return ThemeComponent;
}
