import React, { useState } from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../MediumButton/MediumButton';

export default function AddAttendanceModal({ employeeName, attendanceTime, attendanceType }) {
    const values = [employeeName, String(attendanceTime), attendanceType];
  return (
    <div className={styles.container}>
        <form className={styles.form}>
            <div className={styles.header}>
                Confirm Attendance
            </div>
            <div className={styles.content}>
                {values.map((item) => {
                    return (
                        <div className={styles.row}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <div className={styles.footer}>
                <MediumButton label="Submit" />
            </div>
        </form>
    </div>
  )
}
