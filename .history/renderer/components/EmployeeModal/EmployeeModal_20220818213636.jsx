import { TextField } from '@mui/material';
import React from 'react';
import styles from './EmployeeModal.module.scss';

function EmployeeModal({id, last, first, contact, address, wage, type}) {
  return (
    <div className={styles.container}>
      <div className={styles.form_box}>
        <div className={styles.row}>
            <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
        </div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" fullWidth required />
          <TextField id="first_name" label="First Name" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" fullWidth required />
          <TextField id="first_name" label="First Name" variant="standard" fullWidth required />
        </div>
      </div>
    </div>
  )
}

export default EmployeeModal