import { takeEvery, delay } from "redux-saga";
import { put, call } from "redux-saga/effects";

import { requestMyself} from "../actions/backlogAction";
import { REQUEST_MYSELF_ASYNC} from "../actions/backlogAction";
import { REQUEST_ISSUES_ASYNC, successIssues, failIssues} from "../actions/backlogAction";

import { getMyself} from '../api/backlogApi'
import { getIssues} from '../api/backlogApi'

import * as storageSync from 'electron-json-storage-sync';


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

function* runRequestIssuesAsync() {
    const result = storageSync.get('config');
    if (result.error) throw result.error;
    if (result.status) {
        const payload = yield call(getIssues,result.data.url,result.data.apiKey)
        console.log(payload);
        if(payload){
            yield put(successIssues(payload));
        }else{
            yield put(failIssues(payload));            
        }
    };
}
export function* handleRequestIssuesAsync(){
    yield takeEvery(REQUEST_ISSUES_ASYNC,runRequestIssuesAsync);
}
