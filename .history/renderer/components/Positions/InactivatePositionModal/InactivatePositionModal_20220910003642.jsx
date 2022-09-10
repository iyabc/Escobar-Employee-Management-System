import React from 'react';
import styles from './InactivatePositionModal.module.scss';

export default function InactivatePositionModal({ selectedValues }) {
  return (
    <div className={styles.container}>
        <div clasName={styles.header}>
            Confirm Inactivate
        </div>
        <div className={styles.content}>
        {selectedValues.map((item) => {
            return (
                <div className={styles.content_row}key={item.employeePositionId}>
                    <div className={styles.details}>
                        {item.employeePositionId}
                    </div>
                    <div className={styles.details}>
                        {item.employeePositionName}
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}
