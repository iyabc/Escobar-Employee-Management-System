import React from 'react';
import styles from './EmployeeModal.module.scss';

function EmployeeModal({id, last, first, contact, address, wage, type}) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Editing Employee <span style={{ color: 'black', fontWeight: '900' }}>{id}'s</span> Information</div>
    </div>
  )
}

export default EmployeeModal