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
            <TextField label="Position Name" variant="standard" required fullWidth />
            <div className={styles.button}>
                <MediumButton label="SUBMIT" />
            </div>
        </div>
    </div>
  )
}
