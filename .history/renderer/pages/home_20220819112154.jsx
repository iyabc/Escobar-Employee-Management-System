import React from 'react';
import LoginPage from './LoginPage/LoginPage';
import styles from './home.module.scss';
import TitleBar from '../components/TitleBar/TitleBar';

function Home() {
  return (
    <div className={styles.body}>
      <TitleBar />
      <LoginPage />
    </div>
  );
};

export default Home;
