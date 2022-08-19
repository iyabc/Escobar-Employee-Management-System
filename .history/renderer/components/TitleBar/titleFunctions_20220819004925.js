const ipc = require('electron');

closeBtn.addEventListener('click', ()=> {
    ipc.send('close');
})