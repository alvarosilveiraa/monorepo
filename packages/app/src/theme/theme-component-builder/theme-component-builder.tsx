import React from 'react';
import {ThemeComponentType} from '~/app/theme';
import {ThemeElement} from '../theme.type';
import {ThemeComponentBuilderType} from './theme-component-builder.type';

export function ThemeComponentBuilder<P>({component}: ThemeComponentBuilderType<P>) {
  const renderChildren = (children: ThemeComponentType | ThemeComponentType[]) => {
    if (!children) {
      return null;
    }

    if (Array.isArray(children)) {
      return children.map(renderComponent).filter(value => !!value);
    }

    return renderComponent(children);
  };

  const renderComponent = ({
    as: Component,
    id,
    value,
    props,
    children,
  }: ThemeComponentType<P>): ThemeElement<P> | null => {
    if (!Component) {
      return null;
    }

    if (typeof value === 'string') {
      return <>{value}</>;
    }

    if (!children) {
      return <Component key={`component-${id}`} {...props} />;
    }

    return (
      <Component key={`component-${id}`} {...props}>
        {renderChildren(children)}
      </Component>
    );
  };

  return renderComponent(component);
}
