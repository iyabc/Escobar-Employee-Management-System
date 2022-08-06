import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import LoginPage from './LoginPage/LoginPage';
import styles from './home.module.scss';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Escobar Employee Management System</title>
      </Head>
      {/* <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div> */}
      <div className={styles.body}>
        <LoginPage />
      </div>
    </React.Fragment>
  );
};

export default Home;
