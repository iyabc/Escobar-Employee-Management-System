import { TextField } from '@mui/material';
import React from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddEmployee.module.scss';

function AddEmployee() {

    const [age, setAge] = React.useState('');

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
            </div>
            <div className={styles.row}>
                <MaroonButton label='SUBMIT' link='' />
            </div>
        </div>
    </div>
  )
}

export default AddEmployee