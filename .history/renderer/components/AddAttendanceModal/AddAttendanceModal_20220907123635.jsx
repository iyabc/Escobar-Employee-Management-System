import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ arr }) {
    console.log(arr)
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}> 
            {/* {arr.map((item) => {
                console.log(item)
            })} */}
        </div>
    </div>
  )
}
