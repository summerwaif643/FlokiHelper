const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //dirname is folder name 
            preload: path.join(__dirname, 'preload.js')
        } 
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')
}

/*
    Quick way to start creating an object 
    workfflow should 
    get form data from preload.js
    
   var obj = new Object();
   obj.name = "Raj";
   obj.age  = 32;
   obj.married = false;
   var jsonString= JSON.stringify(obj);

*/
//close app for lal platform except darwin, macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})

//Browser windows can only be opened on whenReady 
app.whenReady().then(() => {
    createWindow()
})

//open window if none are open on macOS 
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})