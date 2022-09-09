import { Box, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './EditEmployeeModal.module.scss';

import Rest from '../../rest/Rest';

function EditEmployeeModal({id, last_name, first_name, employee_contact, employee_address, employee_type}) {
  const rest = new Rest();
  //get position
  const getEmployeePositions = () => {

  }

  const [type, setType] = useState(employee_type);

  const handleChange = (event) => {
      setType(event.target.value);
  };

  console.log(id);

  return (
    <div className={styles.container}>
      <div className={styles.form_box}>
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
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth required>
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
            </FormControl>
          </Box>
        </div>
        <div className={styles.row}>
          <BigButton label="SUBMIT" link="" />
        </div>
      </div>
    </div>
  )
}

export default EditEmployeeModal