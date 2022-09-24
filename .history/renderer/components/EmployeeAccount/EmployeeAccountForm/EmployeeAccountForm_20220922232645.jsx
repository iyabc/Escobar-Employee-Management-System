import React, { useState, useEffect } from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../Contexts/UserContext.jsx';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Account from '../../../model/Account.tsx';
import Image from 'next/image';

export default function EmployeeAccountForm() {
    // const { 
    //     accountId,
    //     accountUsername,
    //     accountPassword,
    //     employeeName,
    //     accessInventoryManagementSystem,
    //     accessEmployeeManagementSystem,
    //     accessIncomeAndExpenseSystem,
    //     accessOrderingSystem,
    //     isActive
    //  } = useUser();
    const account = useUser();
     const [toEdit, setToEdit] = useState(false);
     const isEdit = () => {
        console.log(account)
        if(toEdit){
            setToEdit(false);
            setOldPassword(account.accountPassword);
        }else {
            setToEdit(true);
            setOldPassword('');
        }
     }
     const [oldPassword, setOldPassword] = useState(account.accountPassword);
     const [confirmPassword, setConfirmPassword] = useState('');
     const [newValues, setNewValues] = useState(
        new Account (
            account.accountId,
            account.accountUsername,
            '',
            account.employeeName,
            account.accessInventoryManagementSystem,
            account.accessEmployeeManagementSystem,
            account.accessIncomeAndExpenseSystem,
            account.accessOrderingSystem,
            account.isActive
        )
     )
     const handleChange = (e) => {
        if(e.target.name == 'confirmPassword'){
            setConfirmPassword(e.target.value);
        }else{
            setNewValues({...newValues, [e.target.name]:e.target.value });
        }
     }
     const handleSubmit = () => {
        console.log(account)
        // if(confirmPassword == newValues.accountPassword && newValues.accountPassword != ''){
        //     console.log(newValues)
        // }else if(confirmPassword == '' && newValues.accountPassword != ''){
        //     toast.error('Please confirm new password.')
        //     console.log(newValues)
        // }
     }
     

     return (
        <div className={styles.container}>
            <div className={styles.header}>
                My Account Details
                {toEdit ? (
                    <HighlightOffIcon className={styles.exit_edit_icon} onClick={isEdit} />
                ) : (
                    <EditIcon className={styles.edit_icon} onClick={isEdit} />
                )}
            </div>
            {toEdit ? (
                <>
                <div className={styles.content}>
                    <div className={styles.content_group}>
                        <div className={styles.content_group_label}>
                            Personal Details
                        </div>
                        <div className={styles.content_group_detail}>
                            <TextField disabled name='employeeName' label='Name' value={account.employeeName} variant='standard' fullWidth/>
                            <TextField disabled name='accountUsername' label='Username' value={account.accountUsername} variant='standard' fullWidth/>
                            <TextField onChange={handleChange} type='password' name='oldPassword' value={oldPassword} label='Old Password' variant='standard' fullWidth/>
                            <TextField onChange={handleChange} type='password' name='accountPassword' label='New Password' variant='standard' fullWidth/>
                            <TextField onChange={handleChange} name='confirmPassword' value={confirmPassword} type='password' label='Confirm New Password' variant='standard' fullWidth/>
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
                                    <Checkbox disabled name='accessInventoryManagementSystem' value={account.accessInventoryManagementSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Employee Management System
                                </div>
                                    <Checkbox disabled name='accessEmployeeManagementSystem' value={account.accessEmployeeManagementSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Income & Expense System
                                </div>
                                    <Checkbox disabled value={account.accessIncomeAndExpenseSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Ordering System
                                </div>
                                    <Checkbox disabled value={account.accessOrderingSystem} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleSubmit}>
                        <MediumButton label='Submit' />
                    </button>
                </div>
                </>
            ) : (
                <>
                <div className={styles.content}>
                    <div className={styles.content_group}>
                        <div className={styles.content_group_label}>
                            Personal Details
                        </div>
                        <div className={styles.content_group_detail}>
                            <TextField disabled name='employeeName' label='Name' value={account.employeeName} variant='standard' fullWidth/>
                            <TextField disabled name='accountUsername' label='Username' value={account.accountUsername} variant='standard' fullWidth/>
                            <TextField disabled type='password' name='accountUsername' label='Password' value={oldPassword} variant='standard' fullWidth/>
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
                                    <Checkbox disabled value={account.accessInventoryManagementSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Employee Management System
                                </div>
                                    <Checkbox disabled value={account.accessEmployeeManagementSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Income & Expense System
                                </div>
                                    <Checkbox disabled value={account.accessIncomeAndExpenseSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Ordering System
                                </div>
                                    <Checkbox disabled value={account.accessOrderingSystem} />
                            </div>
                        </div>
                        
                    </div>
                </div>
                </>
            ) }
        </div>
     )
}
