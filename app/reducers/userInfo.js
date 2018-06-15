import { handleActions } from 'redux-actions'

var initialState = []

export default handleActions({
    SUCCESS_USER_INFO:(state,action) =>{
        return [...state,action.payload]},
    FAIL_USER_INFO:(state,action) =>{
        return initialState},
},initialState);
