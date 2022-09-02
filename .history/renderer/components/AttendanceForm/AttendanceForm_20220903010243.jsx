import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

function AttendanceForm({ time }) {
  //post attendance
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
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