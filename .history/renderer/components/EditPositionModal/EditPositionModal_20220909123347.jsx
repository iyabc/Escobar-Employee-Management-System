import React from 'react';
import MediumButton from '../MediumButton/MediumButton';
import styles from './EditPositionModal.module.scss';

export default function EditPositionModal({ values }) {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
            Edit Employee Position 
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            {values.employeePostionId}
          </div>
        </div>
        <div className={styles.footer}>
            <MediumButton label="Delete" />
        </div>
      </div>
    </div>
  )
}
