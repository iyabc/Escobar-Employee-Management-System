import React from 'react';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from'./EmployeeAttendancePage.module.scss';
import AttendanceTable from '../../components/Attendance/AttendanceTable/AttendanceTable';
import Toast from '../../components/Shared/Toast/Toast';

function EmployeeAttendancePage() {
  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewattendanceState="active" viewemployeeState="" viewpositionsState="" viewtypesState="" viewaccountsState="" />
      <div className={styles.content}>
        <AttendanceTable />
      </div>
    </div>
  )
}

export default AttendancePage