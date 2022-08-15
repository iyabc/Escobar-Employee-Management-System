import React from 'react'
import styles from './TitleBar.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const TitleBar = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon style={{fontSize:"25px"}} icon={faSearch}><FontAwesomeIcon icon="fas fa-times-circle" /></FontAwesomeIcon>
      Title Bar
    </div>    
  )
}

export default TitleBar