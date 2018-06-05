import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {requestMyself} from "../actions";
import {getMyself} from '../api/backlogApi'
import * as storageSync from 'electron-json-storage-sync';

export function* handleRequestMyselfAsync() {
    const result = storageSync.get('config');
    if (result.error) throw result.error;
    if (result.status) {
        const hoge = yield call(getMyself(result.data.url,result.data.apiKey))
        console.log(hoge);
        if(hoge){
            console.log(payload);
            yield put(requestMyself(status));
        };
    };
}
