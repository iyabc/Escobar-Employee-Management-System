import TextField from '@mui/material/TextField';
import React from 'react';
import MediumButton from '../MediumButton/MediumButton';
import styles from './EditPositionModal.module.scss';

export default function EditPositionModal({ employeePositionId, employeePositionName }) {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
            Editing employee position: <span style={{ fontWeight: 700, textTransform: "uppercase"}}>{employeePositionName}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.form}>
            <div className={styles.header}>
              {employeePositionId}
            </div>
            <div className={styles.row}>
              <TextField label="" />
          </div>
          </div>
        </div>
        <div className={styles.footer}>
            <MediumButton label="Delete" />
        </div>
      </div>
    </div>
  )
}
