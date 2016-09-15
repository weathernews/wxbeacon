'use strict';
const Electron = require('electron');
const Bleacon = require('bleacon');
const WxBeacon = require('./wxbeacon.js');

const WINDOW_WIDTH = 460;
const WINDOW_HEIGHT = 400;

let ipc = null;

Electron.app.on('window-all-closed', () => {
	Electron.app.quit();
}).on('ready', () => {
	let window = new Electron.BrowserWindow({
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		resizable: false,
		fullscreenable: false
	}).on('closed', () => {
		window = null;
	});
	window.loadURL('file://' + __dirname + '/view.html');
	window.webContents.on('dom-ready', () => {
		ipc = window.webContents;
	});
});

Bleacon.on('discover', function(beacon) {
	let data = WxBeacon.parse(beacon);

	if (ipc != null) {
		ipc.send('wxbeacon', JSON.stringify(data));
	}
});

// Start scanning
Bleacon.startScanning(WxBeacon.UUID);
