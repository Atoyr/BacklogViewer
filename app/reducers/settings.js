import { handleActions } from 'redux-actions'
import * as storage from 'electron-json-storage';
import * as storageSync from 'electron-json-storage-sync';

var initialState = {
    url: '',
    apiKey: ''
}

export default handleActions({
    SUCCESS_SAVE_SETTING:(state,action) =>{
        return Object.assign({}, state, action.payload)
    },
    SUCCESS_LOAD_SETTING:(state,action) =>{
        
        return Object.assign({}, state, action.payload)
    },
    FAIL_SAVE_SETTING:(state,action) =>{
        return initialState;
    },
    FAIL_LOAD_SETTING:(state,action) =>{
        return initialState;
    },
},initialState);