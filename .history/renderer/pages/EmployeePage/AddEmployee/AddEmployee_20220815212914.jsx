import { TextField } from '@mui/material';
import React from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddEmployee.module.scss';

function AddEmployee() {
  return (
    <div className={styles.outer_container}>
        <div className={styles.inner_container}>
            <div className={styles.row}>
                <TextField id="last_name" label="Last Name" variant="standard" fullWidth required />
                <TextField id="first_name" label="First Name" variant="standard" fullWidth />
            </div>
            <div className={styles.row}>
                <TextField id="address" label="Address" variant="standard" fullWidth/>
            </div>
            <div className={styles.row}>
                <TextField id="contact_num" label="Contact Number" variant="standard" fullWidth/>
                <TextField id="daily_wage" label="Daily Wage" variant="standard" fullWidth/>
            </div>
            {/* <div className={styles.row}>
                <MaroonButton label='IN' link='' />
                <MaroonButton label='OUT' link='' />
            </div> */}
        </div>
    </div>
  )
}

export default AddEmployee