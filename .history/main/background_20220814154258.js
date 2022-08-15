import { Fullscreen } from '@mui/icons-material';
import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
const screenElectron = electron.screen;
const display = screenElectron.getPrimaryDisplay();
const dimensions = display.workAreaSize;

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    // width: 1200,
    // height: 600,
    // minWidth: 940,
    // minHeight: 500,
    // frame: false,
    width: parseInt(dimensions.width * 0.8),
    height: parseInt(dimensions.height * 0.8),
    minWidth: parseInt(dimensions.width * 0.8),
    minHeight: parseInt(dimensions.height * 0.8),
    maxWidth: dimensions.width,
    maxHeight: dimensions.height,
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});
