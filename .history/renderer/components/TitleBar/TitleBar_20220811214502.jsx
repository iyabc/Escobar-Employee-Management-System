import React from 'react'
import styles from './TitleBar.module.scss'

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <button id='menu_btn' class='toggleBtn'></button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
      <div className={styles.title}>Title Bar</div>
      <div className={styles.buttons}>
        <button id='minimize' class='min_btn'></button>
        <button id='maximize' class='min_btn'></button>
        <button id='minimize' class='min_btn'></button>
      </div>
    </div>    
  )
}

export default TitleBar