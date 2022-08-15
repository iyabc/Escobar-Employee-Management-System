import { TextField } from '@mui/material';
import React from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddAttendance.module.scss';

function AddAttendance() {
  return (
    <div className={styles.outer_container}>
        <div className={styles.inner_container}>
            <div className={styles.row}>
                <TextField id="emp_id" label="Employee ID" variant="standard" fullWidth />
            </div>
            <div className={styles.row}>
                <MaroonButton label='IN' link='' />
                <MaroonButton label='OUT' link='' />
            </div>
        </div>
    </div>
  )
}

export default AddAttendance