import React from 'react';
import styles from './InactivateEmployeeModal.module.scss';

export default function InactivateEmployeeModal({ inactivateSuccessAction, selectedValues }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            InactivateEmployeeModal
        </div>
        <div className={styles.content}>
        {selectedValues.map((item) => {
            
        })}
        </div>
    </div>
  )
}
