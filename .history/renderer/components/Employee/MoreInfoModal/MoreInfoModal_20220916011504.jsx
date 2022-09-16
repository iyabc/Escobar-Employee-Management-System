import React, { useState, useEffect } from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
    const [values, setValues] = useState([])
    const getValues = () => {
        employeeData.map((item) => {
            setValues({
                id: item.employeeId,
                firstName: item.employeeFirstName,
                lastName: item.employeeLastName,
                address: item.employeeAddress,
                contact: item.employeeContactNumber,
                dateEmployed: item.employeeDateEmployed
            })
        })
    }

    useEffect(() => {
        getValues();
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Employee ID {values.id}
        </div>
        <div className={styles.content}>
            <div className={styles.row}>
                {values.lastName}
            </div>
        </div>
    </div>  
  )
}