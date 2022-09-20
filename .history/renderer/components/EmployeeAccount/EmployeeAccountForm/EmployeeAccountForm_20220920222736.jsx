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
                    <div className={styles.content_group_detail}>
                        <TextField label='Username' value={accountUsername} variant='standard' fullWidth/>
                        <TextField label='Password' value={accountPassword} variant='standard' />
                    </div>
                </div>
            </div>
        </div>
    )
}