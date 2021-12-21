import {FC, Key, ReactElement} from 'react';
import {ShadowKey, themeSettings} from './theme-settings';

export type ThemeSettingsType = typeof themeSettings;

export type ThemeElement<P = any> = {
  type: ReactElement | null;
  props: P;
  key: Key | null;
};

export type ThemeComponentType<P = any> = {
  as?: FC<P | any>;
  children?: ThemeElement | ThemeElement[];
  id: string;
  name: string;
  props?: P;
  value?: FC<P | any> | string | null;
};

export type ThemeExtensionType = {
  variant?: string;
  variants?: any;
  shadow?: ShadowKey;
};
