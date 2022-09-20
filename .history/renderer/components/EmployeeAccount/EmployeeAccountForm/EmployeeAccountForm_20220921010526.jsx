import React, { useState, useEffect } from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../Contexts/UserContext.jsx';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Account from '../../../model/Account.tsx';
import Rest from '../../../rest/Rest.tsx';
import { toast } from 'react-toastify';

export default function EmployeeAccountForm() {
    const { 
        accountId,
        accountUsername,
        accountPassword,
        employeeName,
        accessInventoryManagementSystem,
        accessEmployeeManagementSystem,
        accessIncomeAndExpenseSystem,
        accessOrderingSystem,
        isActive
     } = useUser();
     const [toEdit, setToEdit] = useState(false);
     const isEdit = () => {
        if(toEdit){
            setToEdit(false);
        }else {
            setToEdit(true);
            setPassword('');
        }
     }
     const [oldPassword, setOldPassword] = useState(accountPassword);
     const [isOldPassword, setIsOldPassword] = useState(false);
     const [passwordConfirm, setPasswordConfirm] = useState(false);
     const [newValues, setNewValues] = useState(
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
        setNewValues({...newValues, [e.target.name]:e.target.value });
     }
     const checkOldPassword = (data) => {
        if(accountPassword == data){
            setIsOldPassword(true);
        }else{
            setIsOldPassword(false);
        }
     }
     const handleSubmit = () => {
        if(isOldPassword){
            toast.info('Old password matched!')
            console.log('passwords match')
        }else{
            console.log('dont match')
        }
        // console.log(newValues)
     }
     const checkConfirmPassword = () => {

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
                            <TextField disabled name='employeeName' label='Name' value={employeeName} variant='standard' fullWidth/>
                            <TextField disabled name='accountUsername' label='Username' value={accountUsername} variant='standard' fullWidth/>
                            <TextField onChange={handleChange} type='password' name='oldPassword' value={oldPassword} label='Old Password' variant='standard' fullWidth/>
                            <TextField onChange={handleChange} type='password' name='accountPassword' value={} label='New Password' variant='standard' fullWidth/>
                            <TextField onChange={handleChange} name='confirmAccountPassword' value={} type='password' label='Confirm New Password' variant='standard' fullWidth/>
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
                                    <Checkbox disabled name='accessInventoryManagementSystem' value={accessInventoryManagementSystem} />
                            </div>
                            <div className={styles.content_group_checkbox}>
                                <div className={styles.content_group_checkbox_label}>
                                    Employee Management System
                                </div>
                                    <Checkbox disabled name='accessEmployeeManagementSystem' value={accessEmployeeManagementSystem} />
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
                                    <Checkbox disabled value={accessOrderingSystem} />
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
                            <TextField disabled name='employeeName' label='Name' value={employeeName} variant='standard' fullWidth/>
                            <TextField disabled name='accountUsername' label='Username' value={accountUsername} variant='standard' fullWidth/>
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
                                    <Checkbox disabled value={accessOrderingSystem} />
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ) }
        </div>
     )
}

