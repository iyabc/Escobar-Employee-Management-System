import React, { useState } from 'react';
import Head from 'next/head';
import LoginPage from './LoginPage/LoginPage.jsx';
import styles from './home.module.scss';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Home() {
  const [type, setType] = useState('admin');
  const handleTypeChange = (e) => {
    setType(e.target.value);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Employee Management System</title>
      </Head>
      <div className={styles.content}>
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
        {}
      </div>
    </React.Fragment>
  );
};

