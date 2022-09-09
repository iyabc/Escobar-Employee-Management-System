import { Box, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './EditEmployeeModal.module.scss';

import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

function EditEmployeeModal({id, last_name, first_name, employee_contact, employee_address, employee_type}) {
  const rest = new Rest();
  const [positions, setPositions] = useState([]);
  const [types, setTypes] = useState([]);
  //get positions data
  const handlePositions = (data) => {
    setPositions(data);
  };
  const getPositions = () => {
    rest.get(`${INITIAL_URL}/employee-position`, handlePositions);
  };
  const [position, setPosition] = useState("");
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  //get types data
  const handleTypes = (data) => {
    setTypes(data);
  }
  const getTypes = () => {
    rest.get(`${INITIAL_URL}/employee-type`, handleTypes);
  }
  const [type, setType] = useState("");
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    getPositions();
    getTypes();
  })

  console.log(positions)

  return (
    <div className={styles.container}>
      {/* <form className={styles.form_box}>
        <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" value={last_name} fullWidth required />
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
                  onChange={handlePositionChange}
                  required
                >
                  {positions.map((item, index) => {
                    return ( 
                      <MenuItem value={item} key={index} >{item}</MenuItem>
                    )
                  })}
                </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Types</InputLabel>
            <Select
              value={type}
              label="Type"
              onChange={handleTypeChange}
              required
            >
              {types.map((item, index) => {
                return ( 
                  <MenuItem value={item} key={index} >{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        <div className={styles.row}>
          <TextField id="last_name" label="Superior Name" variant="standard" value={last_name} fullWidth required />
        </div>
        <div className={styles.row}>
          <BigButton label="SUBMIT" link="" type="submit" />
        </div>
      </form> */}
    </div>
  )
}

export default EditEmployeeModal