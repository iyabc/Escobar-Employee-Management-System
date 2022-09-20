import React, { useEffect, useState } from 'react';
import AttendanceForm from '../../components/Attendance/AttendanceForm/AttendanceForm';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from './HomePage.module.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

export default function HomePage() {
  const [datetime, setDateTime] = useState(new Date());

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
      <div className={styles.section}>
        <SideMenu homeState="active" viewattendanceState="" viewemployeeState="" viewpositionsState="" viewtypesState="" viewaccountsState="" />
        <div className={styles.content}>
          <div className={styles.left}>
            <Clock value={datetime} renderNumbers={true} size={200} />
          </div>
          <div className={styles.right}>
            <AttendanceForm />
          </div>
        </div>
      </div>
    </div>
  )
}
