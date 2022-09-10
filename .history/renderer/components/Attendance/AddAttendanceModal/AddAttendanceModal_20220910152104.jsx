import React from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

import Attendance from '../../../model/Attendance.tsx';
import { ToastContainer } from 'react-toastify';
import Rest from "../../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddAttendanceModal({ addSuccessAction, employeeName, attendanceType }) {
    const rest = new Rest();
    const attendanceTime = new Date();
    // const newAttendanceTime = DateFormat.getDateTimeInstance().format(attendanceTime);
    // newAttendanceTime.setTime(newAttendanceTime.getTimezoneOffset(8));
    
    const handleSubmit = () => {
        const newAttendanceTime = new Date();
        newAttendanceTime.toLocaleString().split('.')[0];
        const addedAttendance = (
            new Attendance(
                1,
                employeeName,
                newAttendanceTime,
                attendanceType
            )
        );
        console.log(addedAttendance.newAttendanceTime)
        rest.add(
            `${INITIAL_URL}/attendance/add`,
            addedAttendance,
            addSuccessAction,
            `Successully added attendance for ${addedAttendance.employeeName} @ ${addedAttendance.newAttendanceTime}`
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
                    {/* New: {String(newAttendanceTime)}
                    Old: {String(attendanceTime)} */}
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
        <ToastContainer />
    </div>
  )
}
