const { ipcRenderer } = require("electron")
const ipc = ipcRenderer

//close 
function closeApp(e){
    e.preventDefault();
    console.log("close");
}