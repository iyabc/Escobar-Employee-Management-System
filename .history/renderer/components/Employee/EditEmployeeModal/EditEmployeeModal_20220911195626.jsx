import React from 'react';
import styles from './EditEmployeeModal.module.scss';

import Employee from '../../../model/Employee.tsx';
import Rest from '../../../rest/Rest.tsx';

export default function EditEmployeeModal({ employeeData }) {
  const rest = new Rest();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Edit Employee {employeeData.map((item) => item.employeeId)}
      </div>
      <div className={styles.content}>

      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}
