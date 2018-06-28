import { put, call,fork } from "redux-saga/effects";
import { initialize} from './initialize'
import { handleRequestMyselfAsync} from "./backlog";
import { handleRequestIssuesAsync} from "./backlog";
import { handleRequestSpaceInfoAsync} from "./backlog";
import { handleRequestUserInfoAsync} from "./backlog";
import { handleRequestProjectsAsync} from "./backlog";
import { handleRequestLoadSettingAsync} from './setting';
import { handleRequestSaveSettingAsync} from './setting';
import { handleRequestUsersInfoAsync} from './backlog';
export default function* rootSaga() {
  yield fork(initialize)
  yield fork(handleRequestMyselfAsync),
  yield fork(handleRequestIssuesAsync),
  yield fork(handleRequestSpaceInfoAsync),
  yield fork(handleRequestUserInfoAsync),
  yield fork(handleRequestLoadSettingAsync),
  yield fork(handleRequestSaveSettingAsync),
  yield fork(handleRequestProjectsAsync),
  yield fork(handleRequestUsersInfoAsync)
}