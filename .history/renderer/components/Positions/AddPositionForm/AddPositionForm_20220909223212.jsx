import { TextField } from '@mui/material';
import React from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './AddPositionForm.module.scss';

export default function AddPositionForm({ positionsData }) {

  const [newPosition, setNewPosition] = useState("");
  const handleChange = (e) => {
    console.log(e.target.name)
  }

  return (
    <div className={styles.form}>
        <div className={styles.header}>
            Add Employee Position
        </div>
        <div className={styles.content}>
            <TextField name="employeePositionName" label="Employee Position Name" variant="standard" onChange={handleChange} fullWidth />
            <div className={styles.button}>
                <MediumButton label="SUBMIT" />
            </div>
        </div>
    </div>
  )
}
