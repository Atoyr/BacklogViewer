export default function httpRequest (option,callback) {
    const {net} = require('electron');
    const request = net.request(option);
    request.on('response', (response) => {
        let body = '';
        response.on('data', (chunk) => {
            body += chunk;
        });
        response.on('end', () => {
            callback(
                response.statusCode, 
                JSON.stringify(response.headers), 
                body);
        });
    });
      request.end()
}