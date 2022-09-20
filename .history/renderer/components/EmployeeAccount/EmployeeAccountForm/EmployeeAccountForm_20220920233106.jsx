import React from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../Contexts/UserContext.jsx';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function EmployeeAccountForm() {
    const { 
        employeeName, 
        accountUsername, 
        accountPassword,
        accessInventoryManagementSystem,
        accessEmployeeManagementSystem,
        accessIncomeAndExpenseSystem,
        accessOrderingSystem
     } = useUser();
     const toEdit = false;
     const isEdit = () => {
        toEdit = true;
     }
     const handleEditButton = () => {
        isEdit ? (
            <EditIcon className={styles.edit_icon} onClick={isEdit} />
        ) : (
            <HighlightOffIcon className={styles.edit_icon} onClick={isEdit} />
        )
     }
     const load = () => {
        return (
            <div className={styles.container}>
                {toEdit ? (
                    <div/>
                ) : (
                    <>
                    <div className={styles.content}>
                        <div className={styles.content_group}>
                            <div className={styles.content_group_label}>
                                Personal Details
                            </div>
                            <div className={styles.content_group_detail}>
                                <TextField disabled name={accountUsername} label='Name' value={employeeName} variant='standard' fullWidth/>
                                <TextField disabled name={accountUsername} label='Username' value={accountUsername} variant='standard' fullWidth/>
                                <TextField disabled type='password' name={accountUsername} label='Password' value={accountPassword} variant='standard' fullWidth/>
                            </div>
                        </div>
                        <div className={styles.content_group}>
                            <div className={styles.content_group_label}>
                                Accessible Systems
                            </div>
                            <div className={styles.content_group_detail}>
                                <div className={styles.content_group_checkbox}>
                                    <div className={styles.content_group_checkbox_label}>
                                        Inventory Management System
                                    </div>
                                        <Checkbox disabled value={accessInventoryManagementSystem} />
                                </div>
                                <div className={styles.content_group_checkbox}>
                                    <div className={styles.content_group_checkbox_label}>
                                        Employee Management System
                                    </div>
                                        <Checkbox disabled value={accessEmployeeManagementSystem} />
                                </div>
                                <div className={styles.content_group_checkbox}>
                                    <div className={styles.content_group_checkbox_label}>
                                        Income & Expense System
                                    </div>
                                        <Checkbox disabled value={accessIncomeAndExpenseSystem} />
                                </div>
                                <div className={styles.content_group_checkbox}>
                                    <div className={styles.content_group_checkbox_label}>
                                        Ordering System
                                    </div>
                                        <Checkbox disabled value={accessIncomeAndExpenseSystem} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button disabled>
                            <MediumButton label='Submit' />
                        </button>
                    </div>
                    </>
                ) }
            </div>
        )
     }
     return (
        <div className={styles.header}>
            My Account Details
            {handleEditButton()}
        </div>
     )
}