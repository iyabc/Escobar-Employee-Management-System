import React, { useEffect, useState } from 'react';
import AttendanceForm from '../../components/AttendanceForm/AttendanceForm';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function HomePage() {
  const [value, setValue] = useState(new Date());
  const dateString = String(value);

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <div className={styles.section}>
        <SideMenu homeState="active" viewattendanceState="" viewemployeeState="" />
        <div className={styles.content}>
          <div className={styles.left}>
            <Clock value={value} renderNumbers="true" size="350" />
            {dateString}
          </div>
          <div className={styles.right}>
            <AttendanceForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage