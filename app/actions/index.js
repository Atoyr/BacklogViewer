import {createAction} from 'redux-actions'

// 設定読み込みAction、ActionCreator
export const SAVE_SETTING = 'SAVE_SETTING';
export const SAVE_SETTING_ASYNC = 'SAVE_SETTING_ASYNC';
export const saveSetting = createAction(SAVE_SETTING);
export const saveSettingAsync = createAction(SAVE_SETTING_ASYNC);

export const LOAD_SETTING = 'LOAD_SETTING';
export const LOAD_SETTING_ASYNC = 'LOAD_SETTING_ASYNC';
export const loadSetting = createAction(LOAD_SETTING);
export const loadSettingAsync = createAction(LOAD_SETTING_ASYNC);

export const REQUEST_MYSELF = 'REQUEST_MYSELF';
export const requestMyself = createAction(REQUEST_MYSELF);
export const REQUEST_MYSELF_ASYNC = 'REQUEST_MYSELF_ASYNC';
export const requestMyselfAsync = createAction(REQUEST_MYSELF_ASYNC);

export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const requestIssues = createAction(REQUEST_ISSUES);
export const REQUEST_ISSUES_ASYNC = 'REQUEST_ISSUES_ASYNC';
export const requestIssuesAsync = createAction(REQUEST_ISSUES_ASYNC);
