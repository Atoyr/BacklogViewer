import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { push } from 'react-router-redux';
import * as storageSync from 'electron-json-storage-sync';

export function* initialize(){
    const result = storageSync.get('config')
    if (result.status) {
        yield put(push('/'))
    } else {
        yield put(push('/setting'))
    }
}

