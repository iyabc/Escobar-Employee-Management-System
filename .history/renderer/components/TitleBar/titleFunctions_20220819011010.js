import closeBtn from '../closeBtn';

const { ipcRenderer} = require('electron');

closeBtn.addEventListener('click', ()=> {
    ipcRenderer.send('close');
})

// function minimizeApp(e){
//     e.preventDefault();
//     ipcRenderer.send('min');
// }

// function closeApp(e){
//     e.preventDefault();
//     ipcRenderer.send('close');
// }

// document.getElementById("closeBtn").addEventListener("click", closeApp);
// document.getElementById("minBtn").addEventListener("click", minimizeApp);