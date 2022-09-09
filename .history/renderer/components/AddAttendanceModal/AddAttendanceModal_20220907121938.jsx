import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const arr = Object.values(values);
    console.log(arr[0])
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {/* {Object.entries(values).map((value, index) => {
                return (
                    <div key={index}>
                        {value}
                    </div>
                )
            })} */}
        </div>
    </div>
  )
}
