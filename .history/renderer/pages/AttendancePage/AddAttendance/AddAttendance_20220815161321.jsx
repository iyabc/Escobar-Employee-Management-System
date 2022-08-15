import React from 'react';
import MaroonButton from '../../../components/MaroonButton/MaroonButton';
import styles from './AddAttendance.module.scss';

function AddAttendance() {
  return (
    <div className={styles.outer_container}>
        <div className={styles.inner_container}>
            <div className={styles.row}>
            </div>
            <div className={styles.row}>
                <MaroonButton label='Check-in' />
                <MaroonButton label='Check-in' />
        </div>
    </div>
  )
}

export default AddAttendance