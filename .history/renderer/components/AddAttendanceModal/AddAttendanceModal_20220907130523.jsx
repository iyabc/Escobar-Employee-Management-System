import React, { useState } from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ employeeName, attendanceTime, attendanceType }) {
    console.log(attendanceTime)
  return (
    <div className={styles.container}>
        <form>
            <div className={styles.header}>
                Confirm Attendance
            </div>
            <div className={styles.content}>
                {employeeName}
                {attendanceTime}
            </div>
            <div type="submit">

            </div>
        </form>
    </div>
  )
}
