import React, { useState } from 'react';
import styles from './EditEmployeeModal.module.scss';

import Employee from '../../../model/Employee.tsx';
import Rest from '../../../rest/Rest.tsx';
import { TextField } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

export default function EditEmployeeModal({ editSuccessAction, employeeData }) {
  const rest = new Rest();

  const [selectedEmployee, setSelectedValues] = useState(employeeData[0]);

  const handleSubmit = () => {
    editSuccessAction();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Edit Employee {selectedEmployee.employeeId}
      </div>
      <div className={styles.content}>
        <TextField name="employeeFirstName" label="First Name" defaultvariant='standard' />
      </div>
      <div className={styles.footer}>
        <button onClick={handleSubmit}>
          <MediumButton label="Submit" />
        </button>
      </div>
    </div>
  )
}
