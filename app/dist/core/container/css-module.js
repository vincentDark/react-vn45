/* @flow */
import CSSModules from 'react-css-modules';
// import Bootstrap from '@/css/bootstrap.css';
import FontAwesome from '@/css/font-awesome.css';
import Main from '@/css/main.scss';

export const styleCombine = (...styles: Array<Object>) => ({
  // ...Bootstrap,
  ...FontAwesome,
  ...Main,
  ...styles.reduce((obj, style) => ({ ...obj, ...style }), {})
});

/**
 * CSSModules 裝飾用法
 */
export const applyStyles = (...styles: Array<Object>) =>
  CSSModules(styleCombine(...styles), { allowMultiple: true });
