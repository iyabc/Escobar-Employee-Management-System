import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const inputs = Object.values(values);
    console.log(typeof(input))
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {inputs.forEach((input, index) => {
                return (
                    <>
                        {input.employeeName}
                    </>
                )
            })}
        </div>
    </div>
  )
}
