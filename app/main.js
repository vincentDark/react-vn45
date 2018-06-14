import React from 'react';
import { render } from 'react-dom';
import router from '~/core/router';

import IntroView from '~/containers/view';
import middle from './routerMiddleware';

render(
  router({
    /* 語系設定 */
    i18nInit: 'zh_tw',
    i18nFallback: 'en',

    /* 主框架 */
    masterComponent: IntroView,

    /* 路由設定 */
    routerIndex: '/login',
    routerNotFound: '/login',
    routerMiddleware: middle,
    routerMiddleware: null
  }),
  document.getElementById('container') //定義在`entrance/index.html`中渲染內容的元素
);
