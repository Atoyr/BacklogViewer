import { handleActions } from 'redux-actions'
import * as storage from 'electron-json-storage';
import * as storageSync from 'electron-json-storage-sync';
import {getIssues} from '../api/backlogApi'

var initialState = {

}

export default handleActions({
    SUCCESS_ISSUES:(state,action) =>{
        return Object.assign({}, state, action.payload)},
    FAIL_ISSUES:(state,action) =>{
        return Object.assign({}, state, action.payload)},        
    
},initialState);
