import React from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ values }) {
    const input = Object.values(values);
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Attendance
        </div>
        <div className={styles.content}>
            {input.map((item) => {
                console.log({item.employeeFullName}
                    {item.attendanceTime}
                    {item.attendanceType})
                return (
                    <>
                    {item.employeeFullName}
                    {item.attendanceTime}
                    {item.attendanceType}
                    </>
                )
            })}
        </div>
    </div>
  )
}
