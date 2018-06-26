import { handleActions } from 'redux-actions'

var initialState = [
    {id: '0', 
    projectKey: '', 
    name: 'すべて', 
    chartEnabled: 'false', 
    subtaskingEnabled: 'false', 
    projectLeaderCanEditProjectLeader: 'false', 
    textFormattingRule: '"markdown"', 
    archived: 'false' }
]

export default handleActions({
    SUCCESS_PROJECTS_INFO:(state,action) =>{
        return initialState.concat(action.payload);
        },
    FAIL_PROJECTS_INFO:(state,action) =>{
        return Object.assign({}, state, action.payload)},            
},initialState);

export const selectedProject = handleActions({
    SELECTED_PROJECT:(state,action) =>{
        const {key,projects} = action.payload;
        const proj = projects.filter(x => x.projectKey == key)
        if(proj) return proj[0];
        return initialState[0];
        }
},initialState[0]);