// const scaleTickets = {
//   initial: {
//     opacity: 0,
//     y: "20px"
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 2
//     }
//   },
// }

import { TextField } from '@mui/material';
import React from 'react';
import BigButton from '../../components/Shared/Buttons/BigButton/BigButton';
import styles from './LoginPage.module.scss';
import Toast from '../../components/Shared/Toast/Toast.jsx';
import Rest from '../../rest/Rest.tsx';
import { useUser, useUserUpdate } from '../../components/Contexts/UserContext';
import { useRouter } from "next/router";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function LoginPage() {
    const account = useUser();
    const accountOnChange = useUserUpdate();
  
    const router = useRouter();
    const rest = new Rest();
  
    const handleUsernameOnChange = (event) => {
      accountOnChange(
        event.target.value, 
        // account.accountPassword, 
        // account.employeeName
      );
    };
  
    const handlePasswordOnChange = (event) => {
      accountOnChange(
        // account.accountUsername, 
        event.target.value, 
        // account.employeeName
      )
    };
  
    const successfulLoginActions = (employeeName) => {
      accountOnChange(
        // account.accountUsername, 
        // account.accountPassword, 
        // employeeName: employeeName
      );
      router.replace("/HomePage/HomePage");
    };
  
    const handleLoginOnClick = () => {
      console.log(account)
      rest.login(
        `${INITIAL_URL}/login`,
        account,
        successfulLoginActions,
        `Successfully Logged In`
      );
    };

  return (
    <div>
        <Toast />
        <div className={styles.section}>
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
                      name='accountUsername'
                      variant="standard" 
                      fullWidth 
                      // value={account.accountUsername}
                      onChange={handleUsernameOnChange}
                    />
                    <TextField 
                      type='password'
                      id="password" 
                      name='accountPassword'
                      label="Password" 
                      variant="standard" 
                      fullWidth 
                      // value={account.accountPassword}
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
