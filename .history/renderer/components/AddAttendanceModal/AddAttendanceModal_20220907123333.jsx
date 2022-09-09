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
            {
                for(let i=0; i<arr.length; i++){
                    console.log(arr[i])
                }
            }
        </div>
    </div>
  )
}
