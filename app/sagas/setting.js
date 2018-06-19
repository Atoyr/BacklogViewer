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

function* runRequestSaveSettingAsync(json) {
    const result = storageSync.set('config', json);
    if (result.status) {
        yield put(successSaveSetting(result.data));
    } else {
        yield put(failSaveSetting(result.error));
    }
}
export function* handleRequestSaveSettingAsync(){
    yield takeEvery(REQUEST_SAVE_SETTING_ASYNC,runRequestSaveSettingAsync);
}

function* runRequestLoadSettingAsync(act) {
    console.log(act)
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