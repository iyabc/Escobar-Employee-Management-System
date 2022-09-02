import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

function AttendanceForm({ datetime }) {
  //select
  const [selectData, setSelectData] = React.useState('');
  const handleChange = (event) => {
    setSelectData(event.target.value);
  };
  //get employee data
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/employees");
      setEmployeeData([...data.data]);
    };
    getData();
  }, []);
  //post check in
  const postCheckIn = (e) => {
    e.preventDefault();
    // axios.post("https://my-json-server.typicode.com/iyabc/mockend/attendance"), {
    //   employeeId: selectData,
    //   employeeFirstName,
    //   employeeLastName,
    //   employeeCheckIn: datetime
    // };
    console.log("postcheckin", {selectData}, {employeeFirstName})
  }
  //post check out
  const postCheckOut = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>ATTENDANCE</div>
      <div className={styles.form}>
        <div className={styles.row}>
        <FormControl fullWidth>
          <InputLabel fullWidth>Select Employee</InputLabel>
          <Select
            className={styles.select}
            value={selectData}
            onChange={handleChange}
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
        <div className={styles.btn_container} onClick={postCheckIn}><BigButton label="IN" link=""/></div>
        <div className={styles.btn_container} onClick={postCheckOut}><BigButton label="OUT" link=""/></div>
       </div>
      </div>
    </div>
  )
}

export default AttendanceForm