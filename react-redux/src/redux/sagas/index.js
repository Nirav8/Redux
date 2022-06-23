import { takeLatest } from '@redux-saga/core/effects';
import getMainTypeReducer from "../reducers/mainTypeReducer";


import {
    REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS,
    REQUEST_FOR_ADD_MAINTYPE_IS_IN_PROGRESS,
} from '../actions/mainTypeAction';
import { handleGetMainType } from './mainTypeSaga';


export function* saga() {
    yield takeLatest(REQUEST_FOR_GET_MAINTYPE_IS_IN_PROGRESS, handleGetMainType);

}