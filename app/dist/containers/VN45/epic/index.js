import { ajax } from 'rxjs/observable/dom/ajax';
import { AJAX_METHOD, ajaxRequest } from './ajax';
const api = {
  fetchUser: () => {
    const request = fetch(`http://m.sb51a-w.lucky588.net/test-csrf`).then(
      response => response.json()
    );
    return Observable.from(request);
  }
};

const fetchMe = () =>
  fetch(`http://m.sb51a-w.lucky588.net/test-csrf`).then(response =>
    response.json()
  );

export const pingEpic = action$ =>
  action$
    .ofType('PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });
// action$.pipe(ofType('PING'), delay(1000), mapTo({ type: 'PONG' }));

export const fetchUserEpic = action$ =>
  action$
    .ofType('FETCH_USER')
    .mergeMap(action => Observable.from(fetchMe()))
    .map(payload => ({ type: 'FETCH_USER_FULFILLED', payload }))
    .retry();
// export const fetchUserEpic = action$ =>
//   action$.ofType('FETCH_USER')
//   .mergeMap(action =>
//     (api.fetchUser()).map(payload => ({ type: 'FETCH_USER_FULFILLED', payload }))
//   );

export const getToken = action$ =>
  action$.ofType('GET_CSRF_TOKEN').mergeMap(action =>
    ajaxRequest({
      actionType: 'TOKEN_SAVE',
      method: AJAX_METHOD.GET,
      url: 'http://sb51a-w.lucky588.net/test-csrf'
    })
  );
// export const getToken = action$ =>
//   action$.ofType('GET_CSRF_TOKEN')
//   .mergeMap(action =>
//     ajax.getJSON(`http://sb51a-w.lucky588.net/test-csrf`)
//     .map(payload => ({ type: 'TOKEN_SAVE', payload }))
// );

export const loginEpic = action$ =>
  action$.ofType('ACTION_LOGIN').mergeMap(action =>
    ajaxRequest({
      actionType: 'ACTION_LOGIN_FULFILLED',
      method: AJAX_METHOD.POST,
      url: 'http://sb51a-w.lucky588.net/login',
      params: action.data
    })
  );
