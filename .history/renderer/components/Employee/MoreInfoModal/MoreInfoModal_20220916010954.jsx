import React from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
    employeeData.map((item) => {
        const values = [
            item.employeeFirstName,
            item.employeeLastName
        ]
    })

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            More Information
        </div>
        <div className={styles.content}>
            
        </div>
    </div>  
  )
}
