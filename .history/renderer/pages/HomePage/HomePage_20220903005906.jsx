import React, { useEffect, useState } from 'react';
import AttendanceForm from '../../components/AttendanceForm/AttendanceForm';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function HomePage() {
  const [time, setTime] = useState(new Date());
  const dateString = String(time);

  useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date()),
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
            <Clock value={time} renderNumbers="true" size="200" />
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