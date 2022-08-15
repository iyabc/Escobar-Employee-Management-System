import { Box, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddEmployee.module.scss';

function AddEmployee() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
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
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                        value={type}
                        label="Type"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
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