import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
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

function* runRequestSaveSettingAsync() {
    const result = storageSync.get('config');
    if (result.error) throw result.error;
    if (result.status) {
        yield put(successSaveSetting(result.data));
    };
}
export function* handleRequestSaveSettingAsync(){
    yield takeEvery(REQUEST_SAVE_SETTING_ASYNC,runRequestSaveSettingAsync);
}

function* runRequestLoadSettingAsync() {
    const result = storageSync.get('config');
    if (result.error) {
        yield put(failLoadSetting(result.error));
    }
    else {
        yield put(successLoadSetting(result.data));
    }
}
export function* handleRequestLoadSettingAsync(){
    yield takeEvery(REQUEST_LOAD_SETTING_ASYNC,runRequestLoadSettingAsync);
}