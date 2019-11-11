import { app, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import logger from 'electron-log';
import { notify } from './notification.js';

logger.transports.file.level = 'warn';
autoUpdater.logger = logger;

let window;

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock)
  app.quit()

app.on('second-instance', () => {
    if (!window)
        return;

    if (window.isMinimized())
        window.restore();
    window.focus();
});

app.on('ready', async () => {
    window = new BrowserWindow({ width: 800, height: 600 });
    window.loadURL('https://github.com')
    autoUpdater.checkForUpdatesAndNotify();
});

setTimeout(() => notify({ title: 'Test', body: 'this is a test!', icon: '../assets/logo.jpg' }), 2000);