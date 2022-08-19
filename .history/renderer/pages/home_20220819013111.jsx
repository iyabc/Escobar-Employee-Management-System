import React from 'react';
import Head from 'next/head';
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
