const { ipcRenderer, app } = require("electron")
const ipc = ipcRenderer

//close 
function closeApp(e){
    e.preventDefault();
    app.quit();
}

document.getElementById("closeBtn").addEventListener("click", closeApp);