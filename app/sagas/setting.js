import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { push } from 'react-router-redux';
import {
    REQUEST_SAVE_SETTING_ASYNC,
    successSaveSetting,
    failSaveSetting,    
} from "../actions/settingAction";
import {
    REQUEST_LOAD_SETTING_ASYNC,
    successLoadSetting,
    failLoadSetting,    
} from "../actions/settingAction";
import * as storageSync from 'electron-json-storage-sync';

function* runRequestSaveSettingAsync(data) {
    const result = storageSync.set('config', data.payload);
    if (result.status) {
        yield put(successSaveSetting(result.data));
    } else {
        yield put(failSaveSetting(result.error));
    }
}
export function* handleRequestSaveSettingAsync(){
    yield takeEvery(REQUEST_SAVE_SETTING_ASYNC,runRequestSaveSettingAsync);
}

function* runRequestLoadSettingAsync() {
    const result = storageSync.get('config')
    if (result.status) {
        yield put(successLoadSetting(result.data));
    } else {
        yield put(failLoadSetting(result.error));
    }
}
export function* handleRequestLoadSettingAsync(){
    yield takeEvery(REQUEST_LOAD_SETTING_ASYNC,runRequestLoadSettingAsync);
}