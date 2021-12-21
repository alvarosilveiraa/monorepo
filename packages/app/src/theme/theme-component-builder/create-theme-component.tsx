import React from 'react';
import {ShadowKey, shadows} from '../theme-settings';
import {ThemeElement} from '../theme.type';
import {ThemeComponentType} from '../theme.type';
import {ThemeComponentBuilder} from './theme-component-builder';

export function createThemeComponent<P>(component: ThemeComponentType<P>) {
  const ThemeComponent = (props: P): ThemeElement<P> => {
    const variant = (props as any)?.variant || (component.props as any)?.variant || 'default';

    const variants = {
      default: null,
      ...(props as any)?.variants,
      ...(component.props as any)?.variants,
    };

    const variantProps = variants[variant];

    const shadow: ShadowKey =
      (props as any)?.shadow || (component.props as any)?.shadow || variantProps?.shadow || 0;

    const shadowProps = shadows[shadow];

    const newProps: P = {
      ...component.props,
      ...variantProps,
      ...shadowProps,
      ...props,
    };

    const newComponent = {
      ...component,
      props: newProps,
    };

    return <ThemeComponentBuilder<P> component={newComponent} />;
  };

  return ThemeComponent;
}
