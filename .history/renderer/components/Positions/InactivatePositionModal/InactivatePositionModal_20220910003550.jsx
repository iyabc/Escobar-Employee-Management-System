import React from 'react';
import styles from './InactivatePositionModal.module.scss';

export default function InactivatePositionModal({ selectedValues }) {
  return (
    <div className={styles.container}>
        {selectedValues.map((item) => {
            return (
                <div className={styles.content}key={item.employeePositionId}>
                    <div className={styles.row}>
                        {item.employeePositionId}
                    </div>
                    <div className={styles.row}>
                        {item.employeePositionName}
                    </div>
                </div>
            )
        })}
    </div>
  )
}
