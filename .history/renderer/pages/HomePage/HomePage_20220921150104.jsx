import React, { useEffect, useState } from 'react';
import AttendanceForm from '../../components/Attendance/AttendanceForm/AttendanceForm';
import EmployeeSideMenu from '../../components/Shared/EmployeeSideMenu/EmployeeSideMenu';
import styles from './HomePage.module.scss';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Toast from '../../components/Shared/Toast/Toast';

function HomePage() {
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
        <Toast />
        <EmployeeSideMenu homeState="active" viewattendanceState="" viewaccountState="" />   
        <div className={styles.content}>
          <div className={styles.left}>
            
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