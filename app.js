'use strict';

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

//app.on('window-all-closed', () => {
//    if (process.platform != 'darwin') {
//        app.quit();
//    };
//});

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    };
});


//app.on('ready', () => {
//    mainWindow = new BrowserWindow({width: 800, height: 600});
//    mainWindow.loadURL('file://' + __dirname + '/index.html');
//
//    mainWindow.on('closed', () =>{
//        mainWindow = null;
//    });
//});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
