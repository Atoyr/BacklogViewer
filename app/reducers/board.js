import { handleActions } from 'redux-actions'
import * as storage from 'electron-json-storage';
import * as storageSync from 'electron-json-storage-sync';
import {getMyself} from '../api/backlogApi'

var initialState = {
}

export default handleActions({
    REQUEST_MYSELF:(state,action) => {
        const result = storageSync.get('config');

        if (result.error) throw result.error;
        if (result.status) {
            const hoge = getMyself(result.data.url,result.data.apiKey)
        };
        return state;
        },
},initialState);