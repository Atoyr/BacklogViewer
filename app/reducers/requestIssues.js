import { handleActions } from 'redux-actions'

var initialState = {
    issues:[{
        id:'',
        projectId:'',
        issueKey:'',
        keyId:'',
        issueType: { 
            id: '', 
            name: '', 
            color: '#000000', 
        }, 
        summary: '', 
        priority: { 
            id: '', 
            name: '' 
        }, 
        status: { 
            id: '', 
            name: '' 
        }, 
        assignee: { 
            id: '', 
            name: '' 
        }, 
        startDate: '', 
        dueDate: '', 
        parentIssueId: '', 
        createdUser: { 
            id: '', 
            userId: '', 
            name: '', 
        }, 
        created: '', 
        updatedUser: { 
            id: '', 
            userId: '', 
            name: '', 
        }, 
        updated: '', 
    }]
}

export default handleActions({
    SUCCESS_ISSUES:(state,action) =>{
        const array = action.payload;
        var newState = [];
        
        for(var i=0;i < array.length; i++){

            console.log(array[i].id)
            console.log(array[i].projectId)
            console.log(array[i].issueKey)
            console.log( array[i].keyId)
            console.log( array[i].issueType.id)
            console.log(array[i].issueType.name)
            console.log(array[i].issueType.color)
            console.log(array[i].summary)
            console.log(array[i].priority.id)
            console.log(array[i].priority.name)
            console.log(array[i].status.id)
            console.log(array[i].status.name)
            console.log(array[i].assignee.id)
            console.log(array[i].assignee.name)
            console.log(array[i].startDate)
            console.log(array[i].dueDate)
            console.log(array[i].parentIssueId)
            // console.log(createdUser: { ")
            // console.log(    id: array[i].createdUser.id, ")
            // console.log(    userId: array[i].createdUser.userId, ")
            // console.log(    name: array[i].createdUser.name, ")
            // console.log(}, ")
            // console.log(created: array[i].created, ")
            // console.log(updatedUser: { ")
            // console.log(    id: array[i].updatedUser.id, ")
            // console.log(    userId: array[i].updatedUser.userId, ")
            // console.log(    name: array[i].updatedUser.name, ")
            // console.log(}, ")
            // updated: array[i].updated,

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
                assignee: { 
                    id: array[i].assignee.id, 
                    name: array[i].assignee.name 
                }, 
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
