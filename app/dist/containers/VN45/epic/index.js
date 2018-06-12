import { ajax } from 'rxjs/observable/dom/ajax';
import { AJAX_METHOD, ajaxRequest } from './ajax';

// auth  取token  &&  資料
export const getToken = action$ =>
  action$.ofType('GET_CSRF_TOKEN').mergeMap(action =>
    ajaxRequest({
      actionType: 'TOKEN_SAVE',
      method: AJAX_METHOD.GET,
      url: 'http://sb51a-w.lucky588.net/test-csrf'
    })
  );

export const getInfo = action$ =>
  action$.ofType('GET_USER_INFO').mergeMap(action =>
    ajaxRequest({
      actionType: 'AUTH_SAVE',
      method: AJAX_METHOD.GET,
      url: 'http://sb51a-w.lucky588.net/user/page-info'
    })
  );

// 登入
export const loginEpic = action$ =>
  action$.ofType('ACTION_LOGIN').mergeMap(action =>
    ajaxRequest({
      actionType: 'LOGIN_SAVE',
      method: AJAX_METHOD.POST,
      url: 'http://sb51a-w.lucky588.net/login',
      params: action.data
    })
  );
