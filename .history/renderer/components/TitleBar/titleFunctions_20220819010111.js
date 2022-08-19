const ipc = require('electron').ipcRenderer;

// closeBtn.addEventListener('click', ()=> {
//     ipc.send('close');
// })
function closeApp(e){
    e.preventDefault();
    ipc.send('close');
}

function closeApp(e){
    e.preventDefault();
    ipc.send('close');
}

document.getElementById("closeBtn").addEventListener("click", closeApp);