import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { SAVE_SETTING_ASYNC, LOAD_SETTING_ASYNC} from "../actions";
import { saveSettingAsync, loadSettingAsync} from "./jsonStorage";

export default function* rootSaga() {
  yield* takeEvery(SAVE_SETTING, saveSettingAsync);
  yield* takeEvery(LOAD_SETTING, loadSettingAsync);
}