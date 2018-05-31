// import React from 'react';
// import { render } from 'react-dom';
// import router from '~/core/router';
// Intro
import IntroView from '~/containers/view';

// render(
//   router({
//     master_component: IntroView,
//     router_index: '/login'
//   }),
//   document.getElementById('container')
// );

/* app/main.js */
import React from 'react';
import { render } from 'react-dom';
import router from '~/core/router';

render(
  router({
    /* 語系設定 */
    i18nInit: 'zh_tw',
    i18nFallback: 'en',

    /* 主框架 */
    masterComponent: IntroView,

    /* 路由設定 */
    routerIndex: '/login',
    routerNotFound: '/home',
    routerMiddleware: null
  }),
  document.getElementById('container') //定義在`entrance/index.html`中渲染內容的元素
);
