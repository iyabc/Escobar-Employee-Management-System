import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const arr = Object.values(values);
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {arr.forEach(item => console.log(item))}
        </div>
    </div>
  )
}
