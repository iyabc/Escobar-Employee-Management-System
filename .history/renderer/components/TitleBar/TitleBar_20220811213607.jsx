import React from 'react'
import styles from './TitleBar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Image from 'next/image';

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <button id='menu_btn' class='toggleBtn'></button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/></svg>
      <div className={styles.title}>Title Bar</div>
      <div className={styles.buttons}>
        <div className={styles.img_wrapper}>
        </div>
      </div>
    </div>    
  )
}

export default TitleBar