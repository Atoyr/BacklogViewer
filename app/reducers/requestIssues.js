import { handleActions } from 'redux-actions'

var initialState = []

export default handleActions({
    SUCCESS_ISSUES:(state,action) =>{
        const array = action.payload;
        var newState = [];
        
        for(var i=0;i < array.length; i++){
            let assignee = array[i].assignee;
            if(assignee == null){
                assignee = {
                    id: '',
                    name:''
                }
            }

            newState.push({
                id: array[i].id,
                projectId: array[i].projectId,
                issueKey: array[i].issueKey,
                keyId: array[i].keyId,
                issueType: { 
                    id: array[i].issueType.id, 
                    name: array[i].issueType.name, 
                    color: array[i].issueType.color, 
                }, 
                summary: array[i].summary, 
                priority: { 
                    id: array[i].priority.id, 
                    name: array[i].priority.name
                }, 
                status: { 
                    id: array[i].status.id, 
                    name: array[i].status.name 
                }, 
                assigneeId:assignee.id, 
                assigneeName: assignee.name,
                startDate: array[i].startDate,
                dueDate: array[i].dueDate, 
                parentIssueId: array[i].parentIssueId, 
                createdUser: { 
                    id: array[i].createdUser.id, 
                    userId: array[i].createdUser.userId, 
                    name: array[i].createdUser.name, 
                }, 
                created: array[i].created, 
                updatedUser: { 
                    id: array[i].updatedUser.id, 
                    userId: array[i].updatedUser.userId, 
                    name: array[i].updatedUser.name, 
                }, 
                updated: array[i].updated,
            })
        }
        return newState},
    FAIL_ISSUES:(state,action) =>{
        return Object.assign({}, state, action.payload)},            
},initialState);
