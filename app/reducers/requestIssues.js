import { handleActions } from 'redux-actions'

var initialState = []

export default handleActions({
    SUCCESS_ISSUES:(state,action) =>{
        return action.payload;
        },
    FAIL_ISSUES:(state,action) =>{
        return Object.assign({}, state, action.payload)},            
},initialState);
