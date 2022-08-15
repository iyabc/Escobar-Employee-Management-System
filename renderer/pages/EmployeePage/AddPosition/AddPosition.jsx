import { TextField } from '@mui/material';
import React from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddPosition.module.scss';

function AddPosition() {
  return (
    <div className={styles.outer_container}>
        <div className={styles.inner_container}>
            <div className={styles.row}>
                <TextField id="position_name" label="Position Name" variant="standard" />
            </div>
            <div className={styles.row}>
                <MaroonButton label='SUBMIT' link='' />
            </div>
        </div>
    </div>
  )
}

export default AddPosition