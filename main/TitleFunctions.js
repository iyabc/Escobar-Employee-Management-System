import { ipcRenderer } from "electron";

export function close_app() {
    ipcRenderer.send('close');
    // console.log('close');
}

export function minimize_app() {
    ipcRenderer.send('minimize');
    // console.log("minimize");
}
