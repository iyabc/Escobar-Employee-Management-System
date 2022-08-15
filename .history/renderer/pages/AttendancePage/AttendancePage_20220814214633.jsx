import React from 'react';
import styles from './AttendancePage.module.scss';

function AttendancePage() {
  return (
    <div className={styles.section}>
        <TitleBar />
        <Header />
    </div>
  )
}

export default AttendancePage