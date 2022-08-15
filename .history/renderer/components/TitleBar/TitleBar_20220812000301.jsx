import React from 'react'
import styles from './TitleBar.module.scss'
import CloseIcon from '@mui/icons-material/Close';

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button id='minimize' class='min_btn'></button>
        <button id='maximize' class='max_btn'></button>
        <button id='exit' class='exit_btn'><CloseIcon /></button>
      </div>
    </div>    
  )
}

export default TitleBar