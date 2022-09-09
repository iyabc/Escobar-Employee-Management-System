import React, { useState } from 'react';
import styles from './AddAttendanceModal.module.scss';
import MediumButton from '../MediumButton/MediumButton';

import { ToastContainer, toast } from 'react-toastify';
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddAttendanceModal({ employeeName, attendanceTime, attendanceType }) {
  //confirm add attendance modal
  const [openAddAttendanceModal, setOpenAddAttendanceModal] = useState(true);
  const handleCloseAddAttendanceModal = () => { setOpenAddAttendanceModal(false) };

    const values = [employeeName, String(attendanceTime), attendanceType];
    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
