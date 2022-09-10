import React from 'react';
import styles from './InactivatePositionModal.module.scss';

export default function InactivatePositionModal({ selectedValues }) {
  return (
    <div>
        {selectedValues.map((item) => {
            return (
                <div key={item.employeePositionId}>
                    {item.employeePositionId}
                    {item.employeePositionName}
                </div>
            )
        })}
    </div>
  )
}
