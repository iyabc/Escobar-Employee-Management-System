import React from 'react';
import styles from './InactiveEmployeeModal.module.scss';

export default function InactiveEmployeeModal() {
  return (
    <div className={styles.container}>
        <div className={styles.form_box}>
            <div className={styles.header}>Inactive Employees</div>
        </div>
    </div>
  )
}