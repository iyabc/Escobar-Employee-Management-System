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
        <div className={styles.content_outer}>
            <div className={styles.content_inner}>
            <div className={styles.content_left}>

</div>
<div className={styles.content_right}>
    
</div>
            </div>
        </div>
    </div>  
  )
}
