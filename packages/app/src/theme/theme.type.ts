import {FC, Key, ReactElement} from 'react';
import {themeSettings} from './theme-settings';

export type ThemeSettingsType = typeof themeSettings;

export type ThemeElement<P = any> = {
  type: ReactElement | null;
  props: P;
  key: Key | null;
};

export type ThemeComponentType<P = any> = {
  as?: FC<P | any>;
  children?: ThemeComponentType | ThemeComponentType[];
  id: string;
  name: string;
  props?: any;
  value?: FC<P | any> | string | null;
};
