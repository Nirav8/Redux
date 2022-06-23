import { call, put } from 'redux-saga/effects';
import { getAllMainTypes } from '../../apiCalls';
import {
  REQUEST_FOR_GET_MAINTYPE_SUCCESS,
  REQUEST_FOR_GET_MAINTYPE_ERROR,

} from '../actions/mainTypeAction';

export function* handleGetMainType(action) {
  try {
    const res = yield call(getAllMainTypes, action.data);
    const status = res.status;
    const data = res.data;
    if (status === 200) {
      yield put({ type: REQUEST_FOR_GET_MAINTYPE_SUCCESS, data });
      // action.callBack(data);
      console.log('action.data', data);
    } else {
      yield put({ type: REQUEST_FOR_GET_MAINTYPE_ERROR, data });
      // action.callBack(data);
      console.log('action.data', res);
    }
  } catch (e) {
    yield put({ type: REQUEST_FOR_GET_MAINTYPE_ERROR, e });
    // action.callBack(e);
    console.log('erro from saga::', e);
  }
}