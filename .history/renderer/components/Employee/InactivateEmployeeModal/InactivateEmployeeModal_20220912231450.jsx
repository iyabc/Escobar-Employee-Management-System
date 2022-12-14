import React from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './InactivateEmployeeModal.module.scss';

import Rest from '../../../rest/Rest.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivateEmployeeModal({ inactivateSuccessAction, selectedValues }) {
    const rest = new Rest();

    const handleSubmit = () => {
        rest.inactivate(
            `${INITIAL_URL}/employee/inactivate`,
            // { 'employeeListDto': selectedValues },
            inactivateSuccessAction,
            ''
        )
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Inactivate
        </div>
        <div className={styles.content}>
        {selectedValues.map((item) => {
            return (
                <div className={styles.content_row} key={item.employeeId}>
                    <div className={styles.details}>
                        ID: {item.employeeId}
                    </div>
                    <div className={styles.details}>
                        Employee Name: {item.employeeLastName}, {item.employeeFirstName}
                    </div>
                </div>
            )
        })}
        </div>
        <div className={styles.footer}>
            <button onClick={handleSubmit}>
                <MediumButton label='Submit' />
            </button>
        </div>
    </div>
  )
}
