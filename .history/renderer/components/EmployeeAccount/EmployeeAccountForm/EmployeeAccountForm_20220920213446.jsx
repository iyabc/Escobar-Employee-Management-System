import React from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../Contexts/UserContext.jsx';

export default function EmployeeAccountForm() {
    const { employeeName, accountUsername, accountPassword } = useUser();
    console.log(account)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                My Account Details
            </div>
            <div className={styles.content}>
                <div className={styles.content_group}>
                    <div className={styles.content_group_label}>
                        Username
                    </div>
                    <div className={styles.content_group_detail}>
                        {accountUsername}
                    </div>
                </div>
                <div className={styles.content_group}>
                    <div className={styles.content_group_label}>
                        Password
                    </div>
                    <div className={styles.content_group_detail}>
                        {accountPassword}
                    </div>
                </div>
            </div>
        </div>
    )
}