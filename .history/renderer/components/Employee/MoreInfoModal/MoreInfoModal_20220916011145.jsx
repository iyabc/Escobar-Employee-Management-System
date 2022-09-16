import React, { useState, useEffect } from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
    const [values, setValues] = useState([])
    const getValues = () => {
        employeeData.map((item) => {
            const values = {
                firstName: item.employeeFirstName,
                lastName: item.employeeLastName
            }
        })
    }

    useEffect(() => {

    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            More Information {values.firstName}
        </div>
        <div className={styles.content}>
            
        </div>
    </div>  
  )
}
