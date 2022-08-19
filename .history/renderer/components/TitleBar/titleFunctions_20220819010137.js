const ipc = require('electron').ipcRenderer;

// closeBtn.addEventListener('click', ()=> {
//     ipc.send('close');
// })
function minimizeApp(e){
    e.preventDefault();
    ipc.send('min');
}

function closeApp(e){
    e.preventDefault();
    ipc.send('close');
}

document.getElementById("closeBtn").addEventListener("click", closeApp);
document.getElementById("minBtn").addEventListener("click", minimizeApp);