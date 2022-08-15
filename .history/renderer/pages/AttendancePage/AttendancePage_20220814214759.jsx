import React from 'react';
import styles from './AttendancePage.module.scss';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';

function AttendancePage() {
  return (
    <div className={styles.section}>
        <TitleBar />
        <Header />
        <div className={styles.container}>
        <div className={styles.inner_container}>
            
        </div>
        </div>
    </div>
  )
}

export default AttendancePage