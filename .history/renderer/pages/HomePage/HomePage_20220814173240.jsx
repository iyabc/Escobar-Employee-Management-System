import React from 'react'
import { Header, MaroonButton } from '/./ComponentIndex.js'
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.section}>
      <MaroonButton label='S' link='/LoginPage/LoginPage' />
    </div>
  )
}

export default HomePage