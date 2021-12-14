import {SpringViewStyleType} from './spring-style.type';

export enum AnimationEnum {
  None = 'none',
  TranslateX = 'translateX',
}

export type AnimationRenderType = (styles?: SpringViewStyleType, item?: any) => JSX.Element;
