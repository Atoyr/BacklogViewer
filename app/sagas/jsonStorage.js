import * as storage from 'electron-json-storage';
import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {
    SAVE_SETTING,
    saveSetting,
    LOAD_SETTING,
    loadSetting,
} from "../actions";

const saveSetting = (setting) =>{
    var json = {
        url: setting.url,
        apiKey: setting.apiKey
        };
        storage.set('config', json, function (error) {
            if (error) throw error;
        });
};

export function* saveSettingAsync() {
    yield call(saveSetting(setting));
    yield put(saveSetting());
}

export function* loadSettingAsync(){
    yield call(delay,100);
}
  