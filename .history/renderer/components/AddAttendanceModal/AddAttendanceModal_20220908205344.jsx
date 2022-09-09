import React, { useState, useEffect } from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../MediumButton/MediumButton';
import moment from 'moment';

import Attendance from '../../model/Attendance.tsx'
import { ToastContainer, toast } from 'react-toastify';
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddAttendanceModal({ addSuccessAction, employeeName, attendanceType }) {
    const rest = new Rest();
    const attendanceTime = new Date();
    //get data to check if valid check in/check out
    const [attendanceData, setAttendanceData] = useState([]);
    const handleAttendanceData = (data) => {
        setAttendanceData(data);
    }
    const getAttendanceData = () => {
        rest.get(`${INITIAL_URL}/attendance`, handleAttendanceData);
    }
    
    const handleSubmit = () => {
        const newAttendanceTime = new Date(attendanceTime.toISOString().split('.')[0]);
        newAttendanceTime.setHours(newAttendanceTime.getHours() - 4);
        const addedAttendance = (
            new Attendance(
                1,
                employeeName,
                newAttendanceTime,
                attendanceType
            )
        );
        const lastIndex = attendanceData.lastIndexOf(
            (item) => {
                item.employeeName == addedAttendance.employeeName
        });
        // console.log(lastIndex)
        // attendanceData.map((item) => {
        //     if(addedEmployee)
        // })
        // rest.add(
        //     `${INITIAL_URL}/attendance/add`,
        //     addedAttendance,
        //     addSuccessAction,
        //     `Successully added attendance for ${employeeName}`
        // );
    }

    useEffect(() => {
        getAttendanceData();
    })

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
