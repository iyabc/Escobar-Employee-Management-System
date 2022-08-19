import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import titleFunctions from './titleFunctions.js';

const TitleBar = () => {

  const scaleButton = {
    initial: {
      opacity: 0,
      y: "20px"
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2
      }
    },
  }

const { ipcRenderer, app } = require("electron");
const ipc = ipcRenderer;

//close 
function closeApp(e){
    e.preventDefault();
    // ipc.send('close');
    console.log('close')

    document.getElementById("closeBtn").addEventListener("click", closeApp);
}


  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button id='minBtn' className={`${styles.button} ${styles.min_btn}`}>
          <MinimizeRoundedIcon fontSize='small'/>
        </button>
        <button onClick={{closeApp}}id='closeBtn' className={`${styles.button} ${styles.exit_btn}`}>
          <CloseRoundedIcon fontSize='small'/>
        </button>
      </div>
      <script src={titleFunctions}></script>
    </div>    
  )
}

export default TitleBar