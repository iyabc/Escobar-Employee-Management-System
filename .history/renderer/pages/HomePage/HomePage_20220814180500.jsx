import React from 'react'
import { TitleBar } from '../ComponentIndex'
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.section}>
      <TitleBar />
    </div>
  )
}

export default HomePage