import { put, call,fork } from "redux-saga/effects";
import { handleRequestMyselfAsync} from "./backlog";
import { handleRequestIssuesAsync} from "./backlog";
import { handleRequestSpaceInfoAsync} from "./backlog";
import { handleRequestUserInfoAsync} from "./backlog";
import { handleRequestLoadSettingAsync} from './setting';
import { handleRequestSaveSettingAsync} from './setting';

export default function* rootSaga() {
  yield fork(handleRequestMyselfAsync),
  yield fork(handleRequestIssuesAsync),
  yield fork(handleRequestSpaceInfoAsync),
  yield fork(handleRequestUserInfoAsync),
  yield fork(handleRequestLoadSettingAsync),
  yield fork(handleRequestSaveSettingAsync)
}