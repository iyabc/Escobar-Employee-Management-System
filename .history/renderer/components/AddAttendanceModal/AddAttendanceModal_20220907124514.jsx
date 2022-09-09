import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const handleLoadingValues = () => {
        console.log(values)
    }
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {/* {Object.values(values).map((item) => {
                console.log(item)
            })} */}
        </div>
    </div>
  )
}
