import React from 'react'
import styles from './TitleBar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from 'next/image';

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <button id='menu_btn' class='toggleBtn'></button>
      <div className={styles.title}>Title Bar</div>
      <div className={styles.buttons}>
        <div className={styles.img_wrapper}>
        </div>
      </div>
    </div>    
  )
}

export default TitleBar