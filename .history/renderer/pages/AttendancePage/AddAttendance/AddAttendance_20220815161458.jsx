import { TextField } from '@mui/material';
import React from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddAttendance.module.scss';

function AddAttendance() {
  return (
    <div className={styles.outer_container}>
        <div className={styles.inner_container}>
            <div className={styles.row}>
                <TextField id="password" label="Password" variant="standard" />
            </div>
            <div className={styles.row}>
                <MaroonButton label='Check-in' link='' />
                <MaroonButton label='Check-out' link='' />
            </div>
        </div>
    </div>
  )
}

export default AddAttendance