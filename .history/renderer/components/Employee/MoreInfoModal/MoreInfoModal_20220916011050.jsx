import React, { useState } from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
    const [values]
    employeeData.map((item) => {
        const values = {
            firstName: item.employeeFirstName,
            lastName: item.employeeLastName
        }
    })

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            More Information {values.firstName}
        </div>
        <div className={styles.content}>
            
        </div>
    </div>  
  )
}
