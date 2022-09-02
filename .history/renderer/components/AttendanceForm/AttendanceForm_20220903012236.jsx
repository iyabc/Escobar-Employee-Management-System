import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

function AttendanceForm({ time }) {
  //get employee ids
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/employees");
      setEmployeeData([...data.data]);
    };
    getData();
  }, []);
  
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
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>ATTENDANCE</div>
      <div className={styles.form}>
        <div className={styles.row}>
        <FormControl fullWidth>
          <InputLabel fullWidth>Employee ID</InputLabel>
          <Select
            className={styles.select}
              value=""
              label="Employee"
              onChange={handleChange}
              fullWidth="true"
            >
              {employeeData.map((item) => {
                return (
                  <MenuItem value={item.employeeId}>{item.employeeId} - {item.employeeLastName}, {item.employeeFirstName}</MenuItem>
                )
              })}
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