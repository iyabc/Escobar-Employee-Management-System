import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button id='minimize' class='min_btn'>
          <MinimizeRoundedIcon fontSize='small'/>
        </button>
        <button id='maximize' class='max_btn'>
          <CropSquareRoundedIcon fontSize='small'/>
        </button>
        <button id='exit' class='exit_btn'>
          <CloseRoundedIcon fontSize='small' color='blue'/>
        </button>
      </div>
    </div>    
  )
}

export default TitleBar