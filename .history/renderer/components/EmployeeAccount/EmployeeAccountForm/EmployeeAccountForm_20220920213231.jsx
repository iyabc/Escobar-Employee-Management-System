import React from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../Contexts/UserContext.jsx';

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

                    </div>
                    <div className={styles.content_group_detail}>

                    </div>
                </div>
            </div>
        </div>
    )
}