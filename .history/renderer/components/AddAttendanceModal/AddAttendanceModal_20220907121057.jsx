import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {Objects.values(values).map((item) => {
                return (
                    <>
                        {item}
                    </>
                )
            })}
        </div>
    </div>
  )
}
