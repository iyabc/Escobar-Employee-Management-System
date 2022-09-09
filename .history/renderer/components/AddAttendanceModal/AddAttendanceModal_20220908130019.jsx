import React, { useState, useEffect } from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../MediumButton/MediumButton';

import Attendance from '../../model/Attendance.tsx'
import { ToastContainer, toast } from 'react-toastify';
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddAttendanceModal({ addSuccessAction, employeeName, attendanceTime, attendanceType }) {
    const rest = new Rest();

    const newAttendanceTime = attendanceTime.toISOString().split('.')[0];
    
    const handleSubmit = () => {
        const addedAttendance = (
            new Attendance(
                1,
                employeeName,
                attendanceTime,
                attendanceType
            )
        );
        console.log(addedAttendance);
        rest.add(
            `${INITIAL_URL}/attendance/add`,
            addedAttendance,
            addSuccessAction,
            `Successully added attendance for`
        );
    }

  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <div className={styles.header}>
                Confirm Attendance
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    {employeeName}
                </div>
                <div className={styles.row}>
                    {String(attendanceTime)}
                </div>
                <div className={styles.row}>
                    {attendanceType}
                </div>
            </div>
            <div className={styles.footer}>
                <button onClick={handleSubmit}>
                    <MediumButton label="SUBMIT" />
                </button>
            </div>
        </div>
    </div>
  )
}
