export const SAVE_SETTING = 'SAVE_SETTING';

// Action Creators
export function SaveSetting(setting){
    return {
        type: SAVE_SETTING,
        payload: setting,
        error: false
    }
}