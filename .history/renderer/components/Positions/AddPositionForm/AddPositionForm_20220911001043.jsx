import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './AddPositionForm.module.scss';

import Rest from '../../../rest/Rest.tsx';
import Position from '../../../model/Position.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AddPositionForm({ positionsData }) {
  const rest = new Rest();
  const [newPosition, setNewPosition] = useState("");
  const handleChange = (e) => {
    setNewPosition(e.target.value);
  }
  const addSuccessAction = () => {
    alert(`Successfully added employee position named ${newPosition}`);
  }
  const handleSubmit = () => {
    const exists = false;
    const id = 1;
    if(newPosition.length == 0){
      alert("Field is empty!");
    }else{
      positionsData.map((item) => {
        if(item.employeePositionName.toLowerCase() == newPosition.toLowerCase()){
          exists = true;
          id = item.employeePositionId;
        }
      })
      if(exists){
        alert(`${newPosition} already exists with ID: ${id}`);
      }else{
        newPosition = newPosition.charAt(0).toUpperCase() + newPosition.slice(1).toLowerCase();
        const addedPosition = (
          new Position(
            employeePositionId,
            employeePositionName,
            isActive
          )
        )
        rest.add(
          `${INITIAL_URL}/employee-position/add`,
          addedPosition,
          addSuccessAction,
          `Successfully added employee position named ${newPosition}`
        );
      }
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
