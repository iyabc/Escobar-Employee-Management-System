import React from 'react';
import styles from './AttendancePage.module.scss';
import Header from '../../components/Header/Header';

function AttendancePage() {
  return (
    <div className={styles.section}>
        <TitleBar />
        <Header />
    </div>
  )
}

export default AttendancePage