import React from 'react';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.section}>
      <TitleBar />
      <Header />
    </div>
  )
}

export default HomePage