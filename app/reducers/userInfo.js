import { handleActions } from 'redux-actions'

var initialState = []

export default handleActions({
    SUCCESS_USER_INFO:(state,action) =>{
        var newstate = [];
        if(Array.isArray(action.payload))
        {
            const userIds = action.payload.map(x => x.userId)
            const tempstate = state.filter(x => (userIds.indexOf(x.userId) == -1))
            newstate = tempstate.concat(action.payload)
        }else{
            newstate = state.filter(x => x.userId != action.payload.userId);
            newstate.push(action.payload);
        }
        newstate.sort((a,b) => a.userId < b.userId ? -1 : 1);
        console.log(newstate)
        return newstate;
    },
    REFRESH_USER_INFO:(state,action) =>{
        var newstate = [];
        if(Array.isArray(action.payload))
        {
            newstate = action.payload
        }else{
            newstate.push(action.payload);
        }
        newstate.sort((a,b) => a.userId < b.userId ? -1 : 1);
        return newstate;
    },
    FAIL_USER_INFO:(state,action) =>{
        return initialState},
},initialState);
