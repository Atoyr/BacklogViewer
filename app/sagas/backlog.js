import { takeEvery, delay } from "redux-saga";
import { put, call, select } from "redux-saga/effects";

import { requestMyself} from "../actions/backlogAction";
import { REQUEST_MYSELF_ASYNC} from "../actions/backlogAction";
import { REQUEST_ISSUES_ASYNC, successIssues, failIssues} from "../actions/backlogAction";
import { REQUEST_SPACE_INFO_ASYNC, successSpaceInfo, failSpaceInfo} from "../actions/backlogAction";
import { REQUEST_USER_INFO_ASYNC, successUserInfo, failUserInfo} from "../actions/backlogAction";

import { getMyself} from '../api/backlogApi'
import { getIssues} from '../api/backlogApi'
import { getSpaceInfo} from '../api/backlogApi'
import { getUserInfo} from '../api/backlogApi'

import * as storageSync from 'electron-json-storage-sync';

function* runRequestIssuesAsync(action) {
    const state = yield select(state => state.setting);
    if (status) {
        const payload = yield call(getIssues,state.url,state.apiKey)
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

function* runRequestMyselfAsync() {
    const state = yield select(state => state.setting);
    const payload = yield call(getMyself,state.url,state.apiKey)
    console.log(payload);
    if(payload){
        yield put(requestMyself(payload));
    };
}
export function* handleRequestMyselfAsync(){
    yield takeEvery(REQUEST_MYSELF_ASYNC,runRequestMyselfAsync);
}

function* runRequestSpaceInfoAsync(action) {
    const state = yield select(state => state.setting);
    if (status) {
        const payload = yield call(getSpaceInfo,state.url,state.apiKey)
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

function* runRequestUserInfoAsync(action) {
    const state = yield select(state => state.setting);
    if (status) {
        const userInfo = yield call(getUserInfo,state.url,state.apiKey,action.payload)
        console.log(userInfo[0]);
        console.log(userInfo[1]);
        if(userInfo){
            const payload = {
                id: userInfo[0].id, 
                userId: userInfo[0].userId, 
                name: userInfo[0].name, 
                roleType: userInfo[0].roleType, 
                lang: userInfo[0].lang, 
                mailAddress: userInfo[0].mailAddress,
                icon: URL.createObjectURL(userInfo[1])}
            yield put(successUserInfo(payload));
        }else{
            yield put(failUserInfo(userInfo));            
        }
    };
}
export function* handleRequestUserInfoAsync(){
    yield takeEvery(REQUEST_USER_INFO_ASYNC,runRequestUserInfoAsync);
}
