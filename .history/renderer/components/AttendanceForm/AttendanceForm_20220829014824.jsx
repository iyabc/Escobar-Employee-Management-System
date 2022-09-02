import { TextField } from '@mui/material';
import React from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

function AttendanceForm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>ATTENDANCE</div>
      <div className={styles.form}>
        <div className={styles.row}>
          <TextField id="username" label="Employee ID" variant="standard" fullWidth />
        </div>
       <div className={styles.row}>
        <div className={styles.btn_container}><BigButton label="IN" link="../HomePage/HomePage"/></div>
        <div className={styles.btn_container}><BigButton label="OUT" link="../HomePage/HomePage"/></div>
       </div>
      </div>
    </div>
  )
}

export default AttendanceForm