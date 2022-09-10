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
import BigButton from '../../components/Shared/Buttons/BigButton';
import TitleBar from '../../components/shared/TitleBar/TitleBar';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div>
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
                    <TextField id="username" label="Username" variant="standard" fullWidth />
                    <TextField id="password" label="Password" variant="standard" fullWidth />
                </div>
                <div className={styles.btn_container}><BigButton label="SUBMIT" link="../HomePage/HomePage"/></div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage