import {createAction} from 'redux-actions'

// 設定読み込みAction、ActionCreator
export const REQUEST_SPACE_INFO_ASYNC = 'REQUEST_SPACE_INFO_ASYNC';
export const requestSpaceInfoAsync = createAction(REQUEST_SPACE_INFO_ASYNC);
export const SUCCESS_SPACE_INFO = 'SUCCESS_SPACE_INFO';
export const successSpaceInfo = createAction(SUCCESS_SPACE_INFO);
export const FAIL_SPACE_INFO = 'FAIL_SPACE_INFO';
export const failSapceInfo = createAction(FAIL_SPACE_INFO);

export const REQUEST_MYSELF = 'REQUEST_MYSELF';
export const requestMyself = createAction(REQUEST_MYSELF);
export const REQUEST_MYSELF_ASYNC = 'REQUEST_MYSELF_ASYNC';
export const requestMyselfAsync = createAction(REQUEST_MYSELF_ASYNC);

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const requestProjects = createAction(REQUEST_PROJECTS);
export const REQUEST_PROJECTS_ASYNC = 'REQUEST_PROJECTS_ASYNC';
export const requestProjectsAsync = createAction(REQUEST_PROJECTS_ASYNC);

export const REQUEST_ISSUES_ASYNC = 'REQUEST_ISSUES_ASYNC';
export const requestIssuesAsync = createAction(REQUEST_ISSUES_ASYNC);
export const SUCCESS_ISSUES = 'SUCCESS_ISSUES';
export const successIssues = createAction(SUCCESS_ISSUES);
export const FAIL_ISSUES = 'FAIL_ISSUES';
export const failIssues = createAction(FAIL_ISSUES);




