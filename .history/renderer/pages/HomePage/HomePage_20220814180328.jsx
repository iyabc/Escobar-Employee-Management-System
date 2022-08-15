import React from 'react'
import { Header, TitleBar } from '../ComponentIndex'
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.section}>
      <TitleBar />
      <Header />
    </div>
  )
}

export default HomePage