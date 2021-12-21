import {View} from '~/app/components';
import {createThemeComponent} from '../../theme-component-builder';
import {ToastContainerType} from './toast.type';

export const ToastContainer = createThemeComponent<ToastContainerType>({
  as: View,
  id: 'toast-container',
  name: 'ToastContainer',
  props: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 8,
  },
});
