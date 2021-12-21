import {TextType, ViewType} from '~/app/typings';
import {ThemeExtensionType} from '../../theme.type';

export type ToastContainerType = ViewType & ThemeExtensionType;

export type ToastTextType = TextType & ThemeExtensionType;

export type ToastType = ToastContainerType & {
  textProps?: ToastTextType;
};
