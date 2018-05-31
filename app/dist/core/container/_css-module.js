/* @flow */
import CSSModules from 'react-css-modules';
import FontAwesome from '@/css/font-awesome.css';
import Main from '@/css/main.scss';
import EdStyle from '@/css/ed-style.css';

export const styleCombine = (...styles: Array<Object>) => ({
  ...FontAwesome,
  ...Main,
  ...EdStyle,
  ...styles.reduce((obj, style) => ({ ...obj, ...style }), {})
});