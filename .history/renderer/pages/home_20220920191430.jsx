import React from 'react';
import Head from 'next/head';
import LoginPage from './LoginPage/LoginPage.jsx';
import styles from './home.module.scss';

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Employee Management System</title>
      </Head>
      <div className={styles.content}>
      <div>
        <Toast />
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
                <div className={styles.btn_container}>
                    <button onClick={handleLoginOnClick}>
                        <BigButton label="SUBMIT" link=""/>
                    </button>
                </div>
            </div>
        </div>
    </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
