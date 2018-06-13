import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";

import { requestMyself} from "../actions/backlogAction";
import { REQUEST_MYSELF_ASYNC} from "../actions/backlogAction";
import { REQUEST_ISSUES_ASYNC, successIssues, failIssues} from "../actions/backlogAction";
import { REQUEST_SPACE_INFO_ASYNC, successSpaceInfo, failSapceInfo} from "../actions/backlogAction";

import { getMyself} from '../api/backlogApi'
import { getIssues} from '../api/backlogApi'
import { getSpaceInfo} from '../api/backlogApi'

import * as storageSync from 'electron-json-storage-sync';

function* runRequestIssuesAsync(action) {
    const result = storageSync.get('config');
    if (result.error) throw result.error;
    if (result.status) {
        const payload = yield call(getIssues,result.data.url,result.data.apiKey)
        console.log(payload);
        if(payload){
            yield put(successIssues(payload));
        }else{
            yield put(failIssues(error));            
        }
    };
}
export function* handleRequestIssuesAsync(){
    yield takeEvery(REQUEST_ISSUES_ASYNC,runRequestIssuesAsync);
}

function* runRequestMyselfAsync() {
    const result = storageSync.get('config');
    if (result.error) throw result.error;
    if (result.status) {
        const payload = yield call(getMyself,result.data.url,result.data.apiKey)
        console.log(payload);
        if(payload){
            yield put(requestMyself(payload));
        };
    };
}
export function* handleRequestMyselfAsync(){
    yield takeEvery(REQUEST_MYSELF_ASYNC,runRequestMyselfAsync);
}

function* runRequestSpaceInfoAsync(action) {
    const result = storageSync.get('config');
    if (result.error) throw result.error;
    if (result.status) {
        const payload = yield call(getSpaceInfo,result.data.url,result.data.apiKey)
        console.log(payload);
        if(payload){
            yield put(successSpaceInfo(payload));
        }else{
            yield put(failSpaceInfo(payload));            
        }
    };
}
export function* handleRequestSpaceInfoAsync(){
    yield takeEvery(REQUEST_SPACE_INFO_ASYNC,runRequestSpaceInfoAsync);
}
