import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ input[] }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {input}
        </div>
    </div>
  )
}
