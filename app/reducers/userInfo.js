import { handleActions } from 'redux-actions'

var initialState = {userId:'',imgSrc:''}

export default handleActions({
    SUCCESS_USER_INFO:(state,action) =>{
        // return [...state,action.payload]},
        return action.payload},
    FAIL_USER_INFO:(state,action) =>{
        return initialState},
},initialState);
