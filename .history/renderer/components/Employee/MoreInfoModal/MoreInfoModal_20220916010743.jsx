import React from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            More Information
        </div>
        <div className={styles.content}>
            {employeeData.map((item) => {
                return (
                    <div className={styles.row}>
                        {item.employeeFirst}
                    </div>
                    <div className={styles.row}>
                        {item.employeeFirst}
                    </div>
                )
            })}
        </div>
    </div>  
  )
}
