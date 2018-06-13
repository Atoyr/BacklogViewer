import { handleActions } from 'redux-actions'

var initialState = 
{
    spaceKey:'',
    name:'',
    ownerId: 1, 
    lang: '', 
    timezone: '', 
    reportSendTime: '', 
    textFormattingRule: '', 
    created: '', 
    updated: '' 
}
export default handleActions({
    SUCCESS_SPACE_INFO:(state,action) =>{
        return Object.assign({}, state, action.payload)},
    FAIL_SPACE_INFO:(state,action) =>{
        return initialState},
},initialState);
