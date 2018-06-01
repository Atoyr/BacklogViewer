import { handleActions } from 'redux-actions'
import * as storage from 'electron-json-storage';
import * as storageSync from 'electron-json-storage-sync';

var initialState = {
    url: '',
    apiKey: ''
}

export default handleActions({
    SAVE_SETTING:(state,action) =>{
        // 設定書き込み      
        var json = {
            url: action.payload.url,
            apiKey: action.payload.apiKey
        };
        storage.set('config', json, function (error) {
            if (error) throw error;
        });
        console.log('SAVE_SETTING')
        return Object.assign({}, state, {
            url: action.payload.url,
            apiKey: action.payload.apiKey
        })},
    LOAD_SETTING:(state,action) => {
        //設定読み込み
        var json = initialState;
        const result = storageSync.get('config');

        if (result.error) throw result.error;
        if (result.status) {
            json.url = result.data.url
            json.apiKey = result.data.apiKey
        };
        return Object.assign({}, state, json)},
},initialState);