import React from 'react';
import EmployeeTable from '../../components/Employee/EmployeeTable/EmployeeTable';
import EmployeeTable2 from '../../components/Employee/EmployeeTable/EmployeeTable2';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import styles from'./EmployeePage.module.scss';
import Toast from '../../components/Shared/Toast/Toast';

function EmployeePage() {
  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewattendanceState="" viewemployeeState="active" viewpositionsState="" />
      <div className={styles.content}>
        {/* <EmployeeTable /> */}
        <EmployeeTable2 />
      </div>
    </div>
  )
}

export default EmployeePage