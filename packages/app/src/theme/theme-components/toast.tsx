import {Text, View} from '~/app/components';
import {TextType, ViewType} from '~/app/typings';
import {createThemeComponent} from '../theme-component-builder';

const ToastText = createThemeComponent<TextType>({
  as: Text,
  id: 'toast',
  name: 'Toast',
});

export const Toast = createThemeComponent<ViewType>({
  as: View,
  id: 'toast',
  name: 'Toast',
  children: {
    as: ToastText,
    id: 'toast-text',
    name: 'ToastText',
    value: 'Toast Text',
    // TODO: melhorar fluxo de children para buscar tipagem
  },
});
