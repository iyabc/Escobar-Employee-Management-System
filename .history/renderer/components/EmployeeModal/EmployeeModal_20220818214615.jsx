import { TextField } from '@mui/material';
import React from 'react';
import styles from './EmployeeModal.module.scss';

function EmployeeModal({id, last_name, first_name, employee_contact, employee_address, daily_wage, employee_type}) {
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
          <TextField id="first_name" label="First Name" variant="standard" fullWidth required />
        </div>
      </div>
    </div>
  )
}

export default EmployeeModal