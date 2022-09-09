import { TextField } from '@mui/material';
import React from 'react';
import MediumButton from '../MediumButton/MediumButton';
import styles from './AddPositionForm.module.scss';

export default function AddPositionForm() {
  return (
    <div className={styles.form}>
            <div className={styles.header}>
                Add Employee Position
            </div>
            <div className={styles.content}>
                <div className={styles.content_row}>
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </div>
            </div>
            <div className={styles.footer}>
                <MediumButton label="SUBMIT" />
            </div>
        </div>
  )
}
