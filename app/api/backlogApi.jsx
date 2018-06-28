import path from 'path'
import { promises } from 'fs';

function getRestBaseUrl(spaceUrl){
    return path.join(spaceUrl , '/api/v2/');
}

export function getSpaceInfo(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'space');
    url += `?apiKey=${apiKey}`;
    return Promise.all([
            fetch(url)
            .then(res => res.json())
            .catch(error => { error }),
            getSpaceIcon(spaceUrl, apiKey)])
        .then(spaceInfo =>{
            return{
            spaceKey: spaceInfo[0].spaceKey, 
            name: spaceInfo[0].name, 
            ownerId: spaceInfo[0].ownerId, 
            lang: spaceInfo[0].lang, 
            timezone: spaceInfo[0].timezone, 
            reportSendTime: spaceInfo[0].reportSendTime, 
            textFormattingRule: spaceInfo[0].textFormattingRule, 
            created: spaceInfo[0].created, 
            updated: spaceInfo[0].updated, 
            icon: URL.createObjectURL(spaceInfo[1])
            }
        })
}

export function  getSpaceIcon(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'space/image');
    url += `?apiKey=${apiKey}`;
    return fetch(url)
        .then(res => res.blob())
        .catch(error => { error });
}

export function getMyself(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'users/myself');
    url += `?apiKey=${apiKey}`;
    return fetch(url)
        .then(res => res.json())
        .catch(error => { error });
}

export async function getUsersInfo(spaceUrl, apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),`users`);
    url += `?apiKey=${apiKey}`;
    let body = await fetch(url); 
    let userInfo = await Promise.all((await body.json())
                    .map(async x =>{
                    x.icon = URL.createObjectURL(await getUserIcon(spaceUrl, apiKey, x.id));
                    return x}));    
    return userInfo;
}


export function getUserInfo(spaceUrl, apiKey, userId) {
    let url = path.join(getRestBaseUrl(spaceUrl),`users/${userId}`);
    url += `?apiKey=${apiKey}`;
    return Promise.all([
            fetch(url)
                .then(res => res.json())
                .catch(error => { error }),
            getUserIcon(spaceUrl, apiKey, userId)]
    )
    .then(userInfo =>{
        return {
            id: userInfo[0].id, 
            userId: userInfo[0].userId, 
            name: userInfo[0].name, 
            roleType: userInfo[0].roleType, 
            lang: userInfo[0].lang, 
            mailAddress: userInfo[0].mailAddress,
            icon: URL.createObjectURL(userInfo[1])}
    })
    .catch(error => {error})
}

export function getUserIcon(spaceUrl, apiKey, userId) {
    let url = path.join(getRestBaseUrl(spaceUrl),`users/${userId}/icon`);
    url += `?apiKey=${apiKey}`;
    return fetch(url)
        .then(res => res.blob())
        .catch(error => { error });
}

export function  getProjects(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'projects');
    url += `?apiKey=${apiKey}`;
    console.log(url)
    return fetch(url)
        .then(res => res.json())
        .catch(error => { error });
}

export function  getIssues(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'issues');
    url += `?apiKey=${apiKey}`;
    console.log(url)
    return fetch(url)
        .then(res => res.json())
        .then(json =>{
            var issues = [];
            for(var i=0;i < json.length; i++){
                let assignee = json[i].assignee;
                if(assignee == null){
                    assignee = {
                        id: '',
                        name:''
                    }
                }
                issues.push({
                    id: json[i].id,
                    projectId: json[i].projectId,
                    issueKey: json[i].issueKey,
                    keyId: json[i].keyId,
                    issueTypeId: json[i].issueType.id, 
                    issueTypeName: json[i].issueType.name, 
                    issueTypeColor: json[i].issueType.color, 
                    summary: json[i].summary, 
                    priorityId: json[i].priority.id, 
                    priorityName: json[i].priority.name,
                    statusId: json[i].status.id, 
                    statusName: json[i].status.name,
                    assigneeId:assignee.id, 
                    assigneeName: assignee.name,
                    startDate: json[i].startDate,
                    dueDate: json[i].dueDate, 
                    parentIssueId: json[i].parentIssueId, 
                    createdId: json[i].createdUser.id, 
                    createdUserId: json[i].createdUser.userId, 
                    createdName: json[i].createdUser.name, 
                    created: json[i].created, 
                    updatedId: json[i].updatedUser.id, 
                    updateUserId: json[i].updatedUser.userId, 
                    updateUserName: json[i].updatedUser.name, 
                    updated: json[i].updated,
                })
            }
            return issues;
        })
        .catch(error => { error });
}
