const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');
const Electron = require('electron');

let win;


const menu = Menu.buildFromTemplate([

  { role: 'close' },
  {
    label: 'About',
    click: () => {
      Electron.shell.openExternal('https://github.com/tsabunkar')
    }
  }
])
Menu.setApplicationMenu(menu)

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, '/dist/pomodoro-clock/assets/', 'clock.png')
  })
  /*   console.log(__dirname);
    console.log(path.join(__dirname, '/../', '/dist/pomodoro-clock/', 'index.html'));
    console.log(path.join(__dirname, '..', '/dist/pomodoro-clock/', 'index.html'));
    console.log(path.join(__dirname, '../dist/pomodoro-clock/', 'index.html'));
    console.log(path.resolve(__dirname, '/../', '/dist/pomodoro-clock/', 'index.html'));
    console.log(path.resolve(__dirname, '/dist/pomodoro-clock/', 'index.html')); */

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/pomodoro-clock/', 'index.html'),
      protocol: 'file',
      slashes: true
    })
  )

  // or
  // win.loadURL(`file://${__dirname}/../dist/ng-electron/index.html`)

  // win.webContents.openDevTools();

  // Event when window is closed
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function () {

  // onMac close process
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})
