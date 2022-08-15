import React from 'react';
import Head from 'next/head';
import LoginPage from './LoginPage/LoginPage';
import styles from './home.module.scss';
import TitleBar from '../components/TitleBar/TitleBar';
import Link from 'next/link';

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
       <Link href=next'>
                        <MaroonButton label='SUBMIT'/>
                      </ Link>
      <div className={styles.body}>
        <TitleBar />
        <LoginPage />
      </div>
    </React.Fragment>
  );
};

export default Home;