import { TextField } from '@mui/material';
import React, { useState } from 'react';
import BigButton from '../../components/Shared/Buttons/BigButton/BigButton';
import styles from './LoginPage.module.scss';
import Rest from '../../rest/Rest.tsx';
import { useUser, useUserUpdate } from '../../components/Contexts/UserContext';
import { useRouter } from "next/router";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function LoginPage() {
    const account = useUser();
    const accountOnChange = useUserUpdate();
    const router = useRouter();
    const rest = new Rest();
    const [type, setType] = useState('admin');
    const handleTypeChange = (e) => {
      setType(e.target.value);
    }
    const handleUsernameOnChange = (event) => {
      accountOnChange(
        account.accountId,
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
        account.accountId,
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
    const successfulLoginAdmin = (employeeName) => {
      accountOnChange(
        account.accountId,
        account.accountUsername, 
        account.accountPassword, 
        employeeName,
        account.accessInventoryManagementSystem,
        account.accessEmployeeManagementSystem,
        account.accessIncomeAndExpenseSystem,
        account.accessOrderingSystem,
        account.isActive
      );
      router.replace("/AttendancePage/AttendancePage");
    };
    const successfulLoginEmployee = (employeeName) => {
      accountOnChange(
        account.accountId,
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
    const handleAdminLogin = () => {
      console.log(account)
      rest.login(
        `${INITIAL_URL}/login`,
        account,
        successfulLoginAdmin,
        `Successfully admin login.`
      );
    };
    const handleEmployeeLogin =() => {
      console.log(account)
      rest.login(
        `${INITIAL_URL}/login`,
        account,
        successfulLoginEmployee,
        `Successful employee login.`
      );
    }

  return (
    <div>
        <div className={styles.section}>
            <div className={styles.container}>
              <ToggleButtonGroup
                className={styles.toggle_group}
                color="primary"
                value={type}
                exclusive
                onChange={handleTypeChange}
              >
                <ToggleButton value="admin">Admin</ToggleButton>
                <ToggleButton value="employee">Employee</ToggleButton>
              </ToggleButtonGroup>
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
                { type == 'admin' ? (
                  <div className={styles.btn_container}>
                      <button onClick={handleAdminLogin}>
                          <BigButton label="SUBMIT"/>
                      </button>
                  </div>
                ) : (
                  <div className={styles.btn_container}>
                      <button onClick={handleEmployeeLogin}>
                          <BigButton label="SUBMIT"/>
                      </button>
                  </div>
                ) }
            </div>
        </div>
    </div>
  )
}