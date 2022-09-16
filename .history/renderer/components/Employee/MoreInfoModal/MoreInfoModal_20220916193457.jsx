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
                dateEmployed: item.employeeDateEmployed,
                employeePositionName: item.employeePositionName,
                employeeTypeName: item.employeeTypeName,
                superiorEmployeeName: item.superiorEmployeeName
            })
        })
    }

    useEffect(() => {
        getValues();
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Employee {values.id}
        </div>
        <div className={styles.content}>
            <div className={styles.row}>
                {values.lastName}, {values.firstName}
            </div>
            <div className={styles.row}>
                <div className={styles.row_label}>

                </div>
                <div className={styles.row_content}>
                    <div className={styles.row_content_right}>
                        {values.address}
                    </div>
                    <div className={styles.row_content_left}>
                        {values.address}
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}
