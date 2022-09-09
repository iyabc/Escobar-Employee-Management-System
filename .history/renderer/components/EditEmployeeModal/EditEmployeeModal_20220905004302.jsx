import { Box, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './EditEmployeeModal.module.scss';

import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

function EditEmployeeModal({id, last_name, first_name, employee_contact, employee_address, employee_type}) {
  const rest = new Rest();
  const [positions, setPositions] = useState([]);
  //get positions data
  const handlePositions = (data) => {
    setPositions(data);
  };
  const getPositions = () => {
    rest.get(`${INITIAL_URL}/employee-position`, handlePositions);
  };

  const [position, setPosition] = useState("");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  useEffect(() => {
    getPositions();
  })

  console.log(positions)

  return (
    <div className={styles.container}>
      <div className={styles.form_box}>
        <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" placeholer={last_name} fullWidth required />
          <TextField id="first_name" label="First Name" variant="standard" value={first_name} fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="employee_address" label="Address" variant="standard" value={employee_address} fullWidth required />
          <TextField id="employee_contact" label="Contact Number" variant="standard" value={employee_contact} fullWidth required />
        </div>
        <div className={styles.row}>
        <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Position</InputLabel>
              <Select
                value={position}
                label="Position"
                onChange={handleChange}
                required
              >
                {positions.map((item, index) => {
                  return ( 
                    <MenuItem value={item} key={index} >{item}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
        </div>
        <div className={styles.row}>
          <button type="submit">
            <BigButton label="SUBMIT" link="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditEmployeeModal