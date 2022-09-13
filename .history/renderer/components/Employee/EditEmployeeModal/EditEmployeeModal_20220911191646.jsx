import React from 'react';
import styles from './EditEmployeeModal.module.scss';

export default function EditEmployeeModal({ employeeData }) {
  console.log(employeeData)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Edit Employee
      </div>
      <div className={styles.content}>

      </div>
      <div className={styles.footer}>

      </div>
    </div>
  )
}
