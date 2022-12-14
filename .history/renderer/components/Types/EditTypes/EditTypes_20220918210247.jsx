import React, { useState, useEffect } from 'react';
import styles from './EditTypes.module.scss';
import Rest from '../../../rest/Rest.tsx';
import ExpenseCategory from '../../../model/ExpenseCategory.tsx';
import { TextField } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';

export default function EditTypes({ editSuccessAction, employeeTypeId, employeeTypeName }) {
  return (
    <div className={styles.container}>
        <div className={styles.form}>
        <div className={styles.header}>
            Editing employee type: <span style={{ fontWeight: 700, textTransform: "uppercase"}}>{employeeTypeName}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
              Position ID: {employeeTypeId}
            </div>
            <div className={styles.textfield}>
              <TextField onChange={handleChange} name="employeeTypeName" label="Employee Type Name" variant="standard" fullWidth />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            <MediumButton label="SUBMIT" />
          </button>
        </div>
      </div>
    </div>
  )
}
