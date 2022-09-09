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
            {arr.map((item, index) => {
                return (
                    <>
                        {item[index]}
                    </>
                )
            })}
        </div>
    </div>
  )
}
