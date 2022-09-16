import React from 'react';

export default function MoreInfoModal({ employeeData }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {employeeData.employeeFirstName}
        </div>
    </div>  
  )
}
