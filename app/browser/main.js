const path = require('path');
const {app, BrowserWindow} = require('electron');
const debug = /--debug/.test(process.argv[2]);
import {ipcMain} from "electron";
import * as backlogApi from '../components/backlogApi.jsx';
import httpHelper from '../components/httpHelper.jsx';
var mainWindow = null;


function initialize () {
  function createWindow () {
    const windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    }

    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, '../client/index.html'))

    // Launch fullscreen with DevTools open, usage: npm run debug
    if (debug) {
      mainWindow.webContents.openDevTools()
      mainWindow.maximize()
    }

    mainWindow.on('closed', () => {
      mainWindow = null
    })
  }
  app.on('ready', function() {
    createWindow();
  });
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  });
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  });
}

// Handle Squirrel on Windows startup events
initialize()

ipcMain.on('async-get-myself',function(event,arg){
  httpHelper('http://google.com',(status,header,body) => {  event.sender.send('async-get-myself-reply',body);})
  // let apiKey = arg.apiKey;
  // let spaceKey = arg.spaceKey;
  // backlog.getMyself(spaceKey,apiKey,(body) => {
  //   event.sender.send('async-get-myself-reply',body);
  // });

  // const {net} = require('electron');
  // const request = net.request('http://google.com');
  // request.on('response', (response) => {
  //     let body = '';
  //     response.on('data', (chunk) => {
  //         body += chunk;
  //     });
  //     response.on('end', () => {
  //         event.sender.send('async-get-myself-reply',body);
  //     });
  // });
  // request.end();
});