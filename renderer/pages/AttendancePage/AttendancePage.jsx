import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./AttendancePage.module.scss';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';

function AttendancePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewattendanceState="active" viewemployeeState="" />
      <div className={styles.content}>
        <AttendanceTable />
      </div>
    </div>
  )
}

export default AttendancePage