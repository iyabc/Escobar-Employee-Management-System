import React, { useEffect, useState } from 'react';
import AttendanceForm from '../../components/AttendanceForm/AttendanceForm';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { Select } from '@mui/material';

function HomePage() {
  const [datetime, setDateTime] = useState(new Date());
  const dateString = String(datetime);

  useEffect(() => {
    const interval = setInterval(
      () => setDateTime(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <Select />
      <div className={styles.section}>
        <SideMenu homeState="active" viewattendanceState="" viewemployeeState="" />
        <div className={styles.content}>
          <div className={styles.left}>
            <Clock value={datetime} renderNumbers="true" size="200" />
            {dateString}
          </div>
          <div className={styles.right}>
            <AttendanceForm datetime={datetime}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage