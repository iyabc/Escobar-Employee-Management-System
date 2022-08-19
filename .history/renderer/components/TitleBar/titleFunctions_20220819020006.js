const { ipcRenderer, app } = require("electron")
const ipc = ipcRenderer

//close 
function closeApp(e){
    e.preventDefault();
    ipc.send('close');
}

document.getElementById("closeBtn").addEventListener("click", closeApp);