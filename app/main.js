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
    routerMiddleware: (store$, { path, auth = 'all' }) => (
      render,
      redirectTo
    ) => {
      //從 routerParams 拿 auth 判斷要執行的驗證
      console.log('path = ' + path);
      console.log('auth :');
      console.log(auth);
      switch (auth) {
        case 'logged_in':
        // 開始驗證：已登入的渲染、未登入的導向
        // return Auth(true)(render(), redirectTo('/signin'));
        case 'no_logged_in':
        // 開始驗證：已登入的導向、未登入的渲染
        // return Auth(true)(redirectTo('/home'), render());
      }
      // return Auth(false)(render());
      return render();
    }
  }),
  document.getElementById('container') //定義在`entrance/index.html`中渲染內容的元素
);
