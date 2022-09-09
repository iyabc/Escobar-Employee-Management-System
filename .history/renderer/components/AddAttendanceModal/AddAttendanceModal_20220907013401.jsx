import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {values.forEach((item) => {
                return (
                    <>
                        {item.employeeFullName}
                    </>
                )
            })}
        </div>
    </div>
  )
}
