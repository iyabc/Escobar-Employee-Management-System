import React from 'react'
import styles from './TitleBar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const TitleBar = () => {
  return (
    <div className={styles.container}>
      Title Bar
      <FontAwesomeIcon icon="fas fa-times-circle" />
    </div>    
  )
}

export default TitleBar