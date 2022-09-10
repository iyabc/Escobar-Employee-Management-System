import React from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './InactivatePositionModal.module.scss';

import Rest from "../../../rest/Rest.tsx";
import Position from '../../../model/Position.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivatePositionModal({ selectedValues }) {

    const handleSubmit = () => {
        console.log(selectedValues[1])
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Confirm Inactivate
        </div>
        <div className={styles.content}>
        {selectedValues.map((item) => {
            return (
                <div className={styles.content_row}key={item.employeePositionId}>
                    <div className={styles.details}>
                        ID: {item.employeePositionId}
                    </div>
                    <div className={styles.details}>
                        Employee Position Name: {item.employeePositionName}
                    </div>
                </div>
            )
        })}
        </div>
        <div className={styles.footer}>
            <button onClick={handleSubmit}>
                <MediumButton label="Submit" />
            </button>
        </div>
    </div>
  )
}
