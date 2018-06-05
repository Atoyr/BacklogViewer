import path from 'path'

export function getMyself(spaceUrl,apiKey) {
    let url = `${getRestBaseUrl(spaceUrl)}users/myself`;
    url += `?apiKey=${apiKey}`;
    return fetch(url)
        .then(res => res.json())
        .then(payload => { payload })
        .catch(error => { error });
}

function getRestBaseUrl(spaceUrl){
    return path.join(spaceUrl , '/api/v2/');
}