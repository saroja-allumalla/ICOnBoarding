const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff'
    })

    win.loadURL('file://${__dirname}/dist/index.html')


    //uncomment below to open the Devtools.
    //win.webContents.openDevTools()

    //Event when the window is closed.
    win.on('closed', function() {
        win = null
    })
}


//create window on electron initialization
app.on('ready', createWindow)

//Quit when all windows are closed.
app.on('window-all-closed', function () {

    //on macOS specific close process
    if(process.platform !== 'darwin') {
        app.quit()
    }
})


app.on('activate', function() {
    //macOS specific close process
    if(win === null) {
        createWindow()
    }
})