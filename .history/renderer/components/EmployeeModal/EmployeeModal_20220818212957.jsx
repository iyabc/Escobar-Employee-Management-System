import React from 'react';
import styles from './EmployeeModal.module.scss';

function EmployeeModal({id, last, first, contact, address, wage, type}) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
        <div className={styles.content}>
          
        </div>
    </div>
  )
}

export default EmployeeModal