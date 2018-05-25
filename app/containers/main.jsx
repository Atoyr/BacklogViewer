import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as electron from 'electron'
import Header from'../components/Header.jsx';

ReactDOM.render(<div><button id='bt'>GET IT</button></div>, document.getElementById("app"))
const bt = document.getElementById('bt');
bt.addEventListener('click',function(){
    electron.ipcRenderer.send('async-get-myself',{spaceKey:'sint01',apiKey:'hogehoge'})
});

electron.ipcRenderer.on('async-get-myself-reply', function(event, arg) {
    ReactDOM.render(<div>{arg}</div>, document.getElementById("app"))
});

ReactDOM.render(
    <Header />,
    document.getElementById("app")
  );