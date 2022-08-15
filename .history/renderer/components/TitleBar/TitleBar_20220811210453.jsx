import React from 'react'
import styles from './TitleBar.module.scss'

const TitleBar = () => {
  return (
    <div className={styles.container}>Title Bar</div>
    <FontAwesomeIcon icon="fa-solid fa-x" />
  )
}

export default TitleBar