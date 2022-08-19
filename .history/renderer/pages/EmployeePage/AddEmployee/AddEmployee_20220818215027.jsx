import { Box, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddEmployee.module.scss';

function AddEmployee() {

    const [type, setType] = useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

  return (
    <div className={styles.outer_container}>
        <div className={styles.inner_container}>
            <div className={styles.row}>
                <TextField id="last_name" label="Last Name" variant="standard" fullWidth required />
                <TextField id="first_name" label="First Name" variant="standard" fullWidth required />
            </div>
            <div className={styles.row}>
                <TextField id="address" label="Address" variant="standard" fullWidth required />
            </div>
            <div className={styles.row}>
                <TextField id="contact_num" label="Contact Number" variant="standard" fullWidth required />
                <TextField id="daily_wage" label="Daily Wage" variant="standard" fullWidth required />
                <Box sx={{ minWidth: 120 }}>
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
                </Box>
            </div>
            <div className={styles.row}>
                <MaroonButton label='SUBMIT' link='' />
            </div>
        </div>
    </div>
  )
}

export default AddEmployee