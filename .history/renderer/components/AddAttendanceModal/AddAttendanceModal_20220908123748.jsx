import React, { useState, useEffect } from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../MediumButton/MediumButton';

import Attendance from '../../model/Attendance.tsx'
import { ToastContainer, toast } from 'react-toastify';
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddAttendanceModal({ addSuccessAction, employeeName, attendanceTime, attendanceType }) {
    const values = [employeeName, String(attendanceTime), attendanceType];
    const dateNow = new Date();
    const rest = new Rest();
    const [addedAttendance, setAddedAttendance] = useState(
        new Attendance(1, "", dateNow, "")
    );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setAddedAttendance(
            new Attendance(
                1,
                employeeName,
                attendanceTime,
                attendanceType
            )
        )
    }

    useEffect(() => {
        rest.add(
            `${INITIAL_URL}/attendance/add`,
            addedAttendance,
            addSuccessAction,
            `Successully added attendance for`
        )
        // console.log(addedAttendance);
    }, [addedAttendance])

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
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
                <button type="submit">
                    <MediumButton label="SUBMIT" />
                </button>
            </div>
        </form>
    </div>
  )
}
