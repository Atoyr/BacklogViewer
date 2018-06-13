import { put, call,fork } from "redux-saga/effects";
import { handleRequestMyselfAsync} from "./backlog";
import { handleRequestIssuesAsync} from "./backlog";
import { handleRequestSpaceInfoAsync} from "./backlog";

export default function* rootSaga() {
  yield fork(handleRequestMyselfAsync),
  yield fork(handleRequestIssuesAsync),
  yield fork(handleRequestSpaceInfoAsync)
}