import React, { useState, useEffect } from 'react';
import styles from './MoreInfoModal.module.scss';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
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
                accessInventoryManagementSystem: String(item.accessInventoryManagementSystem),
                accessEmployeeManagementSystem: String(item.accessEmployeeManagementSystem),
                accessIncomeAndExpenseSystem: String(item.accessIncomeAndExpenseSystem),
                accessOrderingSystem: String(item.accessOrderingSystem)
            })
        })
    }

    useEffect(() => {
        getValues();
    }, [])

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
                        {if(values.accessInventoryManagementSystem == false){
                                return (
                                    <Tooltip title="Account Username">
                                        <PersonOutlineIcon />
                                    </Tooltip>
                                )
                            }   
                        }
                        {/* {values.accessInventoryManagementSystem} */}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Employee Type">
                            <WorkHistoryIcon/>
                        </Tooltip> */}
                        Employee Management System:&nbsp;
                        {values.accessEmployeeManagementSystem}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Superior Employee">
                            <BadgeIcon/>
                        </Tooltip> */}
                        Income & Expense System:&nbsp;
                        {values.accessIncomeAndExpenseSystem}
                    </div>
                    <div className={styles.content_inner_row}>
                        {/* <Tooltip title="Date Employed">
                            <HowToRegIcon/>
                        </Tooltip> */}
                        Ordering System:&nbsp;
                        {values.accessOrderingSystem}
                    </div>
                </div>
            </div>
        </div>  
    </div>  
  )
}
