const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');
const logger = require('electron-log');

logger.transports.file.level = 'warn';
autoUpdater.logger = logger;

app.on('ready', async () => {
    const window = new BrowserWindow({ width: 800, height: 600 });
    window.loadURL('https://github.com')
    autoUpdater.checkForUpdatesAndNotify();
});