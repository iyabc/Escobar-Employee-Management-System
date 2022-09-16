import React from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {employeeData[0]}
        </div>
    </div>  
  )
}
