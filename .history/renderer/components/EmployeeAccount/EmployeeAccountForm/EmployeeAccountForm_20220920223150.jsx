import React from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../Contexts/UserContext.jsx';
import { TextField } from '@mui/material';

export default function EmployeeAccountForm() {
    const { employeeName, accountUsername, accountPassword } = useUser();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                My Account Details
            </div>
            <div className={styles.content}>
                <div className={styles.content_group}>
                    <div className={styles.content_group_label}>
                        Personal Details
                    </div>
                    <div className={styles.content_group_detail}>
                        <TextField name={accountUsername} label='Username' defaultValue={accountUsername} variant='standard' fullWidth/>
                        <TextField name={accountUsername} label='Password' defaultValue={accountPassword} variant='standard' fullWidth/>
                    </div>
                </div>
                <div className={styles.content_group}>
                    <div className={styles.content_group_label}>
                        Work Details
                    </div>
                    <div className={styles.content_group_detail}>
                        <TextField name={accountUsername} label='Username' defaultValue={accountUsername} variant='standard' fullWidth/>
                        <TextField name={accountUsername} label='Password' defaultValue={accountPassword} variant='standard' fullWidth/>
                    </div>
                </div>
            </div>
        </div>
    )
}