import { put } from 'redux-saga/effects';
import { saveToken, saveAuth } from './action';
import { map, pickAll } from 'ramda';

export default {
  ['GET_CSRF_TOKEN']: function*(res: ResponseType) {
    yield put(saveToken(res));
    // yield put(save((pickAll(['csrf_token']))(res)));
    // yield put(save(map((pickAll(['id', 'name']): any))(res)));
  },
  ['LOG_IN']: function*(res: ResponseType) {
    yield put(saveAuth(res));
  },
};
