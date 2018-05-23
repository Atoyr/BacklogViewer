export default function get (url,callback) {
    const {net} = require('electron');

    const request = net.request(url);
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