import React from 'react';
import styles from './EmployeeAccountForm.module.scss';
import { useUser } from '../../components/Contexts/UserContext.jsx';

export default function EmployeeAccountForm() {
    const { employeeName, accountUsername, accountPassword } = useUser();

    return (
        <div className={styles.container}>

        </div>
    )
}