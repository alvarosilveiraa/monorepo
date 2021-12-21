import React from 'react';
import {ToastContainer} from './toast-container';
import {ToastText} from './toast-text';
import {ToastType} from './toast.type';

export const Toast = ({textProps, children}: ToastType) => (
  <ToastContainer backgroundColor="green" shadow={6}>
    <ToastText color="white">{textProps?.children || children}</ToastText>
  </ToastContainer>
);

// pensar em sistema generico e dinamico para empilhamento de UI's em algum dos cantos da tela ou centralizado
// o gatilho deve ser uma função que será controlada pelo theme-componente
