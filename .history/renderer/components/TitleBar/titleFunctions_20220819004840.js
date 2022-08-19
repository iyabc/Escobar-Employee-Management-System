const ipc = require('electron');

closeBtn.addEventListener('click', ()=> {
    e.preventDefault();
    ipc.send('closeApp');
})