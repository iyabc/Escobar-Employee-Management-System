import React from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            More Information
        </div>
        <div className={styles.content}>
            {Objects.keys(employeeData).map((key) => {
                return (
                    <div className={styles.row}>
                        {values}
                    </div>
                )
            })}
        </div>
    </div>  
  )
}
