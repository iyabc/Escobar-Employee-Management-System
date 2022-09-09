import { InputLabel, TextField, Select, MenuItem } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AddEmployeeModal.module.scss';

export default function AddEmployeeModal() {

    const [type, setType] = useState("Full-time");

    const handleChange = (event) => {
      setType(event.target.value);
    };

  return (
    <div className={styles.container}>
        <div className={styles.form_box}>
        <div className={styles.header}>Add an Employee</div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" fullWidth required />
          <TextField id="first_name" label="First Name" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="employee_address" label="Address" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="employee_contact" label="Contact Number" variant="standard" fullWidth required />
          <TextField id="daily_wage" label="Daily Wage" variant="standard" fullWidth required />
          <Box sx={{ minWidth: "200px"}}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                value={type}
                label="Type"
                onChange={handleChange}
                required
              >
                <MenuItem value={'admin'}>Admin</MenuItem>
                <MenuItem value={'part_time'}>Part-Time</MenuItem>
                <MenuItem value={'full_time'}>Full-Time</MenuItem>
              </Select>
          </Box>
        </div>
        <div className={styles.row}>
          <BigButton label="SUBMIT" link="" />
        </div>
      </div>
    </div>
  )
}
