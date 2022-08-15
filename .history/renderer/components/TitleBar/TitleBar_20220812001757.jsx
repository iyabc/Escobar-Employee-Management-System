import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button id='minimize' className={styles.min_btn}>
          <MinimizeRoundedIcon fontSize='small'/>
        </button>
        <button id='maximize' className='max_btn'>
          <CropSquareRoundedIcon fontSize='small'/>
        </button>
        <button id='exit' className='exit_btn'>
          <CloseRoundedIcon fontSize='small'/>
        </button>
      </div>
    </div>    
  )
}

export default TitleBar