import { Box, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import styles from './EmployeeModal.module.scss';

function EmployeeModal({id, last_name, first_name, employee_contact, employee_address, daily_wage, employee_type}) {

  const [type, setType] = useState(employee_type);

    const handleChange = (event) => {
        setType(event.target.value);
    };

  return (
    <div className={styles.container}>
      <div className={styles.form_box}>
        <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" value={last_name} fullWidth required />
          <TextField id="first_name" label="First Name" variant="standard" value={first_name} fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="employee_contact" label="Contact Number" variant="standard" value={employee_contact} fullWidth required />
          <TextField id="employee_address" label="Address" variant="standard" value={employee_address} fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="daily_wage" label="Daily Wage" variant="standard" value={daily_wage} fullWidth required />
          <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            value={employee_type}
                            label="Type"
                            onChange={handleChange}
                            required
                        >
                          <MenuItem value={'admin'}>Admin</MenuItem>
                          <MenuItem value={'part_time'}>Part-Time</MenuItem>
                          <MenuItem value={'full_time'}>Full-Time</MenuItem>
                        </Select>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default EmployeeModal