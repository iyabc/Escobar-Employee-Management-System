import React from 'react'
import TitleBar from '../../ComponentIndex.js';
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.section}>
      <TitleBar />
      {/* <Header /> */}
    </div>
  )
}

export default HomePage