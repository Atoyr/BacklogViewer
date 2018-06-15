import {createAction} from 'redux-actions'

// 設定読み込みAction、ActionCreator
export const REQUEST_SAVE_SETTING_ASYNC = 'REQUEST_SAVE_SETTING_ASYNC';
export const requestSaveSettingAsync = createAction(REQUEST_SAVE_SETTING_ASYNC);
export const SUCCESS_SAVE_SETTING = 'SUCCESS_SAVE_SETTING';
export const successSaveSetting = createAction(SUCCESS_SAVE_SETTING);
export const FAIL_SAVE_SETTING = 'FAIL_SAVE_SETTING';
export const failSaveSetting = createAction(FAIL_SAVE_SETTING);

export const REQUEST_LOAD_SETTING_ASYNC = 'REQUEST_LOAD_SETTING_ASYNC';
export const requestLoadSettingAsync = createAction(REQUEST_LOAD_SETTING_ASYNC);
export const SUCCESS_LOAD_SETTING = 'SUCCESS_LOAD_SETTING';
export const successLoadSetting = createAction(SUCCESS_LOAD_SETTING);
export const FAIL_LOAD_SETTING = 'FAIL_LOAD_SETTING';
export const failLoadSetting = createAction(FAIL_LOAD_SETTING);