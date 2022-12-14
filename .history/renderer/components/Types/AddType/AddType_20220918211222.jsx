import styles from './AddType.module.scss';
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import Rest from '../../../rest/Rest.tsx';
import Types from '../../../model/Types.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

function capitalizeData(data){
  data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  return data;
}

export default function AddType({ addSuccessAction }) {
  const rest = new Rest();
  const [newType, setNewType] = useState('');
  const handleChange = (e) => {
    setNewType(capitalizeData(e.target.value));
  }
  const handleSubmit = () => {
    const addedType = (
      new Types(
        1,
        newType,
        true
      )
    )
    rest.add(
      `${INITIAL_URL}/employee-type/add`,
      addedType,
      addSuccessAction,
      `Successfully added employee type name '${newType}'`
    )
  }

  return (
    <div className={styles.form}>
        <div className={styles.header}>
            Add Expense Category
        </div>
        <div className={styles.content}>
            <TextField name="expenseCategoryName" label="Expense Category Name" variant="standard" onChange={handleChange} fullWidth />
          <div className={styles.button}>
            <button onClick={handleSubmit}>
              <MediumButton label="SUBMIT" />
            </button>   
          </div>
        </div>
    </div>
  )
}
