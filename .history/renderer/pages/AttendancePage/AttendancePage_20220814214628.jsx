import React from 'react';
import styels from './AttendancePage.module.scss';

function AttendancePage() {
  return (
    <div className={styles.section}>
        <TitleBar />
        <Header />
    </div>
  )
}

export default AttendancePage