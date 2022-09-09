import React, { useState } from 'react';
import styles from './AddAttendanceModal.module.scss';

export default function AddAttendanceModal({ employeeFullName }) {
  return (
    <div className={styles.container}>
        <form>
            <div className={styles.header}>
                Confirm Attendance
            </div>
            <div className={styles.content}>
                {employeeFullName}
                {/* {Object.values(values).map((item) => {
                    console.log(item)
                })} */}
            </div>
            <div type="submit">

            </div>
        </form>
    </div>
  )
}
