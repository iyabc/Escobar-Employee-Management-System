import React, { useState, useEffect } from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../MediumButton/MediumButton';

import Attendance from '../../model/Attendance.tsx'
import { ToastContainer, toast } from 'react-toastify';
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddAttendanceModal({ employeeName, attendanceTime, attendanceType }) {
    const [attendanceData, setAttendanceData] = useState("");
    const [attendanceLength, setAttendanceLength] = useState(1);
    //get length
    const handleAttendanceLength = (data) => {
        setAttendanceData(data);
        setAttendanceLength(attendanceData.length + 1);
    }
    const getAttendanceData = () => {
        rest.get( `${INITIAL_URL}/attendance`, handleAttendanceLength);
    }
    const values = [employeeName, String(attendanceTime), attendanceType];
    const dateNow = new Date();
    const rest = new Rest();
    const [addedAttendance, setAddedAttendance] = useState(
        new Attendance(1, "", dateNow, "")
    );
    const addSuccessAction = () => {
        console.log(addedAttendance)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(attendanceLength)
        setAddedAttendance(
            new Attendance(
                attendanceLength,
                employeeName,
                attendanceTime,
                attendanceType
            )
        )
        console.log(addedAttendance)
        // rest.add(
        //     `${INITIAL_URL}/attendance/add`,
        //     addedAttendance,
        //     addSuccessAction,
        //     `Successully added attendance for ${addedAttendance.employeeName}`
        // )
    }

    useEffect(() => {
        getAttendanceData();
    })

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
