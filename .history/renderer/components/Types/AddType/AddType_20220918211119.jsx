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
  const [newType, setnewType] = useState('');
  const handleChange = (e) => {
    setnewType(capitalizeData(e.target.value));
  }
  const handleSubmit = () => {
    const addedCategory = (
      new ExpenseCategory(
        1,
        newType,
        true
      )
    )
    rest.add(
      `${INITIAL_URL}/expense-category/add`,
      addedCategory,
      addSuccessAction,
      `Successfully added expense category name '${newType}'`
    )
  }

  return (
    <div>AddType</div>
  )
}
