import {createAction} from 'redux-actions'

// 設定読み込みAction、ActionCreator
export const REQUEST_MYSELF = 'REQUEST_MYSELF';
export const requestMyself = createAction(REQUEST_MYSELF);
export const REQUEST_MYSELF_ASYNC = 'REQUEST_MYSELF_ASYNC';
export const requestMyselfAsync = createAction(REQUEST_MYSELF_ASYNC);

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const requestProjects = createAction(REQUEST_PROJECTS);
export const REQUEST_PROJECTS_ASYNC = 'REQUEST_PROJECTS_ASYNC';
export const requestProjectsAsync = createAction(REQUEST_PROJECTS_ASYNC);

export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const requestIssues = createAction(REQUEST_ISSUES);
export const REQUEST_ISSUES_ASYNC = 'REQUEST_ISSUES_ASYNC';
export const requestIssuesAsync = createAction(REQUEST_ISSUES_ASYNC);


