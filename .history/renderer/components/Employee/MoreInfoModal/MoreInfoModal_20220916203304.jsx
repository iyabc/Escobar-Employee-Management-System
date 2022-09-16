import React, { useState, useEffect } from 'react';
import styles from './MoreInfoModal.module.scss';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function MoreInfoModal({ employeeData }) {
    console.log(employeeData)
    const [values, setValues] = useState([])
    const getValues = () => {
        employeeData.map((item) => {
            setValues({
                id: item.employeeId,
                fullName: `${item.employeeLastName}, ${item.employeeFirstName}`,
                address: item.employeeAddress,
                contact: item.employeeContactNumber,
                dateEmployed: item.dateEmployed,
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
            <div className={styles.content_name}>
                {values.fullName}
            </div>
            <div className={styles.content_inner}>
                <div className={styles.content_inner_left}>
                    <div className={styles.content_inner_label}>
                        Personal Details
                    </div>
                    <div className={styles.content_inner_row}>
                        <HouseIcon/>{values.address}
                    </div>
                    <div className={styles.content_inner_row}>
                        <LocalPhoneIcon/>{values.contact}
                    </div>
                </div>
                <div className={styles.content_inner_right}>
                    <div className={styles.content_inner_label}>
                        Work Details
                    </div>
                    <div className={styles.content_inner_row}>
                        {values.employeePositionName}
                    </div>
                    <div className={styles.content_inner_row}>
                        {values.employeeTypeName}
                    </div>
                    <div className={styles.content_inner_row}>
                        {values.superiorEmployeeName}
                    </div>
                    <div className={styles.content_inner_row}>
                        {values.dateEmployed}
                    </div>
                </div>
            </div>
        </div>  
    </div>  
  )
}
