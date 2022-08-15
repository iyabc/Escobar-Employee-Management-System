import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button id='minimize' className={`${styles.button} ${styles.min_btn}`}>
          <MinimizeRoundedIcon fontSize='small'/>
        </button>
        <button id='maximize' className={`${styles.button} ${styles.max_btn}`}>
          <CropSquareRoundedIcon fontSize='small'/>
        </button>
        <button id='exit' className={styles.button}>
          <CloseRoundedIcon fontSize='small'/>
        </button>
      </div>
    </div>    
  )
}

export default TitleBar