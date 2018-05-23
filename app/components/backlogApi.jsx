import * as httpHelper from './httpHelper.jsx';

let domain = 'backlog.jp';

export function getMyself(spaceKey,apiKey,callback) {
    let hoge = getRestBaseUrl(spaceKey);
    let url = `${hoge}users/myself`;
    url += `?apiKey=${apiKey}`;
    let option = {
        method : 'GET',
        url : url
    };
    httpHelper.httpRequest(option,(status,header,body) => {
        if(status != '200') throw status;
        callback(body);
    });
}

function getRestBaseUrl(spaceKey){
    return `https://${spaceKey}.${domain}/api/v2/`;
}