import { handleActions } from 'redux-actions'
import * as storage from 'electron-json-storage';
import * as storageSync from 'electron-json-storage-sync';
import {getMyself} from '../api/backlogApi'

var initialState = {
    id:'',
    lang:'',
    mailAddress:'',
    name:'',
    nulabAccount:'',
    roleType:'',
    userId:'',
}

export default handleActions({
    REQUEST_MYSELF:(state,action) => {
        return Object.assign({}, state, {
            id:action.payload.id,
            lang:action.payload.lang,
            mailAddress:action.payload.mailAddress,
            name:action.payload.name,
            nulabAccount:action.payload.nulabAccount,
            roleType:action.payload.roleType,
            userId:action.payload.userId,
        })},
},initialState);