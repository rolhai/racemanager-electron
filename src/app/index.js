// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path')
const log = require('electron-log');

let mainWindow;

// SET Environment
//process.env.NODE_ENV = 'production';

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    // and load the index.html of the app.
    showView();

    // close all windows, when main-windows is closed
    mainWindow.on('closed', function() {
        app.quit();
    })

    // create menu
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function() {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit()
})

function showView() {
    mainWindow.loadFile('index.html');
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// create menu
const mainMenuTemplate = [{
    label: 'App',
    submenu: [{
            label: 'Main',
            click() {
                showView();
            }
        },
        {
            label: 'Quit',
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click() {
                app.quit();
            }
        }
    ]
}]

if (process.env.NODE_ENV != 'production') {
    mainMenuTemplate.push({
        label: 'Dev Tools',
        submenu: [{
                label: 'Toggle dev tools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}