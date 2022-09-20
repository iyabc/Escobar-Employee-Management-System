import React, { useState, useEffect } from 'react';
import styles from './EditAccount.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Account from '../../../model/Account.tsx'
import { TextField } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

function capitalizeData(data){
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    return data;
}

export default function EditAccount({ 
    activeEmployees,
    editSuccessAction,
    accountId,
    accountUsername,
    accountPassword,
    employeeName,
    accessInventoryManagementSystem,
    accessEmployeeManagementSystem,
    accessIncomeAndExpenseSystem,
    accessOrderingSystem,
    isActive
 }) {
    const rest = new Rest();
    const [newAccount, setNewAccount] = useState(
        new Account (
            accountId,
            accountUsername,
            accountPassword,
            employeeName,
            accessInventoryManagementSystem,
            accessEmployeeManagementSystem,
            accessIncomeAndExpenseSystem,
            accessOrderingSystem,
            isActive
        )
    )
    const handleChange = (e) => {
        setNewAccount({...newAccount, [e.target.name]:capitalizeData(e.target.value)});
    }
    const handleSubmit = () => {
        rest.update(
            `${INITIAL_URL}/account/update/${newAccount.accountId}`,
            newAccount,
            editSuccessAction,
            `Successfully edited ${newAccount.accountId}`
        )
    }

  return (
    <div className={styles.container}>
        {console.log(values.accessOrderingSystem)}
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
                            <PersonOutlineIcon />
                        </Tooltip>
                        {values.accountUsername}
                    </div>
                    <div className={styles.content_inner_row}>
                        <Tooltip title="Account Password">
                            <VpnKeyIcon/>
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
                        Inventory Management System:&nbsp;
                        {showMarks(values.accessInventoryManagementSystem)}
                        {/* {values.accessInventoryManagementSystem} */}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Employee Type">
                            <WorkHistoryIcon/>
                        </Tooltip> */}
                        Employee Management System:&nbsp;
                        {showMarks(values.accessEmployeeManagementSystem)}
                        {/* {values.accessEmployeeManagementSystem} */}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Superior Employee">
                            <BadgeIcon/>
                        </Tooltip> */}
                        Income & Expense System:&nbsp;
                        {showMarks(values.accessIncomeAndExpenseSystem)}
                        {/* {values.accessIncomeAndExpenseSystem} */}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Date Employed">
                            <HowToRegIcon/>
                        </Tooltip> */}
                        Ordering System:&nbsp;
                        {showMarks(values.accessOrderingSystem)}
                        {/* {values.accessOrderingSystem} */}
                    </div>
                </div>
            </div>
        </div>  
    </div>  
  )
}
