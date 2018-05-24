const path = require('path');
const {app, BrowserWindow} = require('electron');
const debug = /--debug/.test(process.argv[2]);
import {ipcMain} from "electron";
import * as backlogApi from './containers/backlogApi.jsx';
import httpHelper from './containers/httpHelper.jsx';
import * as storage from 'electron-json-storage';

var mainWindow = null;
var user = '';
var apiKey = '';

function initialize () {
  function createWindow () {
    const windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    }

    //設定読み込み
    storage.get('config', function (error, data) {
      if (error) throw error;
      if (Object.keys(data).length === 0) {
        apiKey = 'hoge';
      } else {
        // apiKey = data.apiKey;
      }
    });

    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, './index.html'))

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
  app.on('before-quit', () => {
    // 設定書き込み      
    var json = {
      user: 'hoge'
    };
    storage.set('config', json, function (error) {
        if (error) throw error;
    });
  })
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