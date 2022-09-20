import React from 'react';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from'./EmployeeAttendancePage.module.scss';
import EmployeeAttendanceTable from '../../components/EmployeeAttendance/EmployeeAttendanceTable/AttendanceTable';
import Toast from '../../components/Shared/Toast/Toast';

export default function EmployeeAttendancePage() {
  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewattendanceState="active" viewemployeeState="" viewpositionsState="" viewtypesState="" viewaccountsState="" />
      <div className={styles.content}>
        <EmployeeAttendanceTable />
      </div>
    </div>
  )
}