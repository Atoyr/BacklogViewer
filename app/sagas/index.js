import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import {
    SAVE_SETTING,
    saveSetting
} from "../actions";

export function* saveSettingAsync() {
    yield call(delay, 1000);
    yield put(saveSetting());
  }
  
  export default function* rootSaga() {
    yield* takeEvery(SAVE_SETTING, saveSettingAsync);
  }