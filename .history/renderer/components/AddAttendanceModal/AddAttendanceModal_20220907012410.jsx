import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    console.log(values)
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {values.forEach((input, index) => {
                return (
                    <>
                        {input.employeeFullName}
                    </>
                )
            })}
        </div>
    </div>
  )
}
