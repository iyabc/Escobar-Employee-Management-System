import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

function AttendanceForm({ time }) {
  //set attendance
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/attendance");
      setFetchedData([...data.data]);
    };
    getData();
  }, []);

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