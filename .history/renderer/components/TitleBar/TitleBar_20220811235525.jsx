import React from 'react'
import styles from './TitleBar.module.scss'

const TitleBar = () => {
  return (
    <div className={styles.container}>
      {/* <button id='menu_btn' class='toggleBtn'></button> */}
      <div className={styles.buttons}>
        <button id='minimize' class='min_btn'></button>
        <button id='maximize' class='max_btn'></button>
        <button id='exit' class='exit_btn'></button>
      </div>
    </div>    
  )
}

export default TitleBar