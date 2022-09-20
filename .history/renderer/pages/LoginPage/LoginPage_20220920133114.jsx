import { TextField } from '@mui/material';
import React, { useState } from 'react';
import BigButton from '../../components/Shared/Buttons/BigButton/BigButton';
import styles from './LoginPage.module.scss';
import Toast from '../../components/Shared/Toast/Toast.jsx';
import Rest from '../../rest/Rest.tsx';
import { useUser, useUserUpdate } from '../../components/Contexts/UserContext';
import { useRouter } from "next/router";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function LoginPage() {
    const [type, setType] = useState('admin');
    const account = useUser();
    const accountOnChange = useUserUpdate();
    const router = useRouter();
    const rest = new Rest();
    const handleUsernameOnChange = (event) => {
      accountOnChange(
        1,
        event.target.value, 
        account.accountPassword, 
        account.employeeName,
        account.accessInventoryManagementSystem,
        account.accessEmployeeManagementSystem,
        account.accessIncomeAndExpenseSystem,
        account.accessOrderingSystem,
        account.isActive
      );
    };
    const handlePasswordOnChange = (event) => {
      accountOnChange(
        1,
        account.accountUsername, 
        event.target.value, 
        account.employeeName,
        account.accessInventoryManagementSystem,
        account.accessEmployeeManagementSystem,
        account.accessIncomeAndExpenseSystem,
        account.accessOrderingSystem,
        account.isActive
      )
    };
    const successfulLoginActions = (employeeName) => {
      accountOnChange(
        1,
        account.accountUsername, 
        account.accountPassword, 
        employeeName,
        account.accessInventoryManagementSystem,
        account.accessEmployeeManagementSystem,
        account.accessIncomeAndExpenseSystem,
        account.accessOrderingSystem,
        account.isActive
      );
      router.replace("/HomePage/HomePage");
    };
    const handleLoginOnClick = () => {
      rest.login(
        `${INITIAL_URL}/login`,
        account,
        successfulLoginActions,
        `Successfully Logged In`
      );
    };

    const handleTypeChange = () => {

    }

  return (
    <div>
        <Toast />
        <div className={styles.section}>
        <ToggleButtonGroup
          color="primary"
          value={type}
          exclusive
          onChange={handleTypeChange}
          aria-label="Platform"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.upper}>
                        Login
                    </div>
                    <div className={styles.lower}>
                        Escobar Employee Management System
                    </div>
                </div>
                <div className={styles.content}>
                    <TextField 
                      id="username" 
                      label="Username" 
                      variant="standard" 
                      fullWidth 
                      value={account.accountUsername}
                      onChange={handleUsernameOnChange}
                    />
                    <TextField 
                      type='password'
                      id="password" 
                      label="Password" 
                      variant="standard" 
                      fullWidth 
                      value={account.accountPassword}
                      onChange={handlePasswordOnChange}
                    />
                </div>
                <div className={styles.btn_container}>
                    <button onClick={handleLoginOnClick}>
                        <BigButton label="SUBMIT" link=""/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}