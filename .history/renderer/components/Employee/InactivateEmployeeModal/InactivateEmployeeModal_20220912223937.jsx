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
            return (
                <div className={styles.content_row} key={item.employeeId}>
                    <div className={styles.details}>
                        ID: {item.employeeId}
                    </div>
                    <div className={styles.details}>
                        Employee Name: {item.employeeLastName}, {item.employeeFirstName}
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}
