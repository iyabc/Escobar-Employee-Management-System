import React from 'react';
import Header from '../../components/Header/Header';
import MaroonButton from '../../components/MaroonButton/MaroonButton';
import TitleBar from '../../components/TitleBar/TitleBar';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.section}>
      <TitleBar />
      <Header />
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <div className={styles.title}>Welcome, NAME.</div>
            <div className={styles.sub_text}>What would you like to do?</div>
              <div className={styles.buttons_container}>
                <MaroonButton label='Attendance' link='' />
                <MaroonButton label='Employee' link='' />
              </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage