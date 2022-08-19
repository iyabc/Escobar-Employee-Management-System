import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import titleFunctions from './titleFunctions.js';
import Script from 'next/script';

const TitleBar = () => {
  
  closeBtn.onclick = function() {
    require({titleFunctions});
  };

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

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <button id='minBtn' className={`${styles.button} ${styles.min_btn}`}>
            <MinimizeRoundedIcon fontSize='small'/>
          </button>
          <button id='closeBtn' className={`${styles.button} ${styles.exit_btn}`}>
            <CloseRoundedIcon fontSize='small'/>
          </button>
        </div>
      </div>   
      {/* <Script src={titleFunctions}></Script> */}
    </div>
  );
}

export default TitleBar