import {Text} from '~/app/components';
import {createThemeComponent} from '../../theme-component-builder';
import {ToastTextType} from './toast.type';

export const ToastText = createThemeComponent<ToastTextType>({
  as: Text,
  id: 'toast-text',
  name: 'ToastText',
});
