import React, { useState, useEffect } from 'react';
import styles from './MoreInfoModal.module.scss';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import BadgeIcon from '@mui/icons-material/Badge';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Tooltip } from '@mui/material';

export default function MoreInfoModal({ selectedValues }) {
    const [values, setValues] = useState([])
    const getValues = () => {
        selectedValues.map((item) => {
            setValues({
                id: item.accountId,
                accountUsername: item.accountUsername,
                accountPassword: item.accountPassword,
                employeeName: item.employeeName,
                accessInventoryManagementSystem: item.accessInventoryManagementSystem,
                accessEmployeeManagementSystem: item.accessEmployeeManagementSystem,
                accessIncomeAndExpenseSystem: item.accessIncomeAndExpenseSystem,
                accessOrderingSystem: item.accessOrderingSystem
            })
        })
    }

    useEffect(() => {
        getValues();
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            Account {values.id}
        </div>
        <div className={styles.content_outer}>
            <div className={styles.content_name}>
                {values.employeeName}
            </div>
            <div className={styles.content_inner}>
                <div className={styles.content_inner_left}>
                    <div className={styles.content_inner_label}>
                        Personal Details
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Account Username">
                            <HouseIcon/>
                        </Tooltip>
                        {values.accountUsername}
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Account Password">
                            <LocalPhoneIcon/>
                        </Tooltip>
                        {values.accountPassword}
                    </div>
                </div>
                <div className={styles.content_inner_right}>
                    <div className={styles.content_inner_label}>
                        Accessible Systems
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="">
                            <WorkIcon/>
                        </Tooltip> */}
                        Inventory Management System: 
                        {values.accessInventoryManagementSystem}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Employee Type">
                            <WorkHistoryIcon/>
                        </Tooltip> */}
                        Employee Management System:
                        {values.accessEmployeeManagementSystem}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Superior Employee">
                            <BadgeIcon/>
                        </Tooltip> */}
                        Income & Expense System:
                        {values.accessIncomeAndExpenseSystem}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Date Employed">
                            <HowToRegIcon/>
                        </Tooltip> */}
                        Ordering System:
                        {values.accessOrderingSystem}
                    </div>
                </div>
            </div>
        </div>  
    </div>  
  )
}
