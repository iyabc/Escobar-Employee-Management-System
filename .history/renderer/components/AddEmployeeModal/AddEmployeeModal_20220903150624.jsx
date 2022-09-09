import { InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AddEmployeeModal.module.scss';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function AddEmployeeModal() {

  //post added employee data
  const postCheckIn = (e) => {
    const firstName = "";
    const lastName = "";
    employeeData.map((item) => {
      if(item.employeeId == selectData){
        firstName = item.employeeFirstName;
        lastName = item.employeeLastName;
      }
    })
    e.preventDefault();
    axios.post("https://my-json-server.typicode.com/iyabc/mockend/attendance", {
      employeeId: selectData,
      employeeFirstName: firstName,
      employeeLastName: lastName,
      employeeCheckIn: datetime
    }).then(res => console.log("New Data", res)).catch(err => console.log(err));
  }

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
          {/* <FormControl fullWidth >
            <InputLabel>Type</InputLabel>
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
          </FormControl> */}
          <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
        </div>
        <div className={styles.row}>
          <BigButton label="SUBMIT" link="" />
        </div>
      </div>
    </div>
  )
}
