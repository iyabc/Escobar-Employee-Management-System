const { ipcRenderer, app } = require("electron")
const ipc = ipcRenderer

//close 
closeBtn.addEventListener('click', () => {
    ipc.send('close');
})
