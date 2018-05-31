import { handleActions } from 'redux-actions'
import * as storage from 'electron-json-storage';

const initialState = {
    url: 'boo',
    apiKey: 'foo'
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
        yield storage.get('config', function (error, data) {
        if (error) throw error;
        if (Object.keys(data).length === 0) {
        }else{
            json.url = data.url
            json.apiKey = data.apiKey
        }});
        return Object.assign({}, state, json)},
},initialState);