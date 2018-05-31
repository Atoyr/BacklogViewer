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

