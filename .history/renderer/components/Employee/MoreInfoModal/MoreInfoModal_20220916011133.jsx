import React, { useState, useEffect } from 'react';
import styles from './MoreInfoModal.module.scss';

export default function MoreInfoModal({ employeeData }) {
    const [values, setValues] = useState([])
    cont getValues = () => {

    }

    useEffect(() => {

    })

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
