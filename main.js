const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    resizable: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.ico')
  });

  Menu.setApplicationMenu(null);
  win.maximize();
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
