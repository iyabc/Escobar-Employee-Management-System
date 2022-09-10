import React from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './InactivatePositionModal.module.scss';

import Rest from "../../../rest/Rest.tsx";
import Position from '../../../model/Position.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivatePositionModal({ inactivateSuccessAction, selectedValues }) {
    const rest = new Rest();

    const handleSubmit = () => {
        selectedValues.forEach((item) =>{
            rest.inactivate(
                (`${INITIAL_URL}/employee-position/inactivate`),
                item,
                inactivateSuccessAction,
                `Successfully inactivated employee position with name ${item.employeePositionName}`
            )
        })
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
