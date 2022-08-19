const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

//close 
closeBtn.addEventListener('click', () => {
    ipc.send('close');
})

