import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './AddPositionForm.module.scss';

export default function AddPositionForm({ positionsData }) {

  const [newPosition, setNewPosition] = useState("");
  const handleChange = (e) => {
    setNewPosition(e.target.value);
  }
  const handleSubmit = () => {
    if(newPosition.length == 0){
      alert("Field is empty!");
    }else{
      positionsData.map((item) => {
        if(item.employeePositionId == newPosition){
          console.log("Already exists!")
        }else{
          console.log("Can be added!")
        }
      })
    }
  }

  return (
    <div className={styles.form}>
        <div className={styles.header}>
            Add Employee Position
        </div>
        <div className={styles.content}>
            <TextField name="employeePositionName" label="Employee Position Name" variant="standard" onChange={handleChange} fullWidth />
          <div className={styles.button}>
            <button onClick={handleSubmit}>
              <MediumButton label="SUBMIT" />
            </button>   
          </div>
        </div>
    </div>
  )
}
