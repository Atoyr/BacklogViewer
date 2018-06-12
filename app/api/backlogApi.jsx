import path from 'path'

function getRestBaseUrl(spaceUrl){
    return path.join(spaceUrl , '/api/v2/');
}

export function getSpaceInfo(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'space');
    url += `?apiKey=${apiKey}`;
    return fetch(url)
        .then(res => res.json())
        .catch(error => { error });    
}


export function getMyself(spaceUrl,apiKey) {
    let url = path.join(getRestBaseUrl(spaceUrl),'users/myself');
    url += `?apiKey=${apiKey}`;
    return fetch(url)
        .then(res => res.json())
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
        .catch(error => { error });
}


// export function getIcon(spaceUrl,apiKey,userId) {
//     let url = path.join(getRestBaseUrl(spaceUrl),`users/${userId}/icon`);
//     url += `?apiKey=${apiKey}`;
//     return fetch(url)
//         .then(res => res.json())
//         .catch(error => { error });
// }