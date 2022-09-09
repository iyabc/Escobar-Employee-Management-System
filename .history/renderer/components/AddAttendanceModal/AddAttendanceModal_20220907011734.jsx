import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const input = Object.values(values).map((key) => [(key), obj[key]);
    console.log(typeof(input))
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {input.data.map((item) => {
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
