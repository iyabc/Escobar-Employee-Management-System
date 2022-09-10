import React from 'react';
import EmployeeTable from '../../../Shared/EmployeeTable/EmployeeTable';
import SideMenu from '../../components/SideMenu/SideMenu';
import styles from'./EmployeePage.module.scss';

function EmployeePage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewattendanceState="" viewemployeeState="active" viewpositionsState="" />
      <div className={styles.content}>
        <EmployeeTable />
      </div>
    </div>
  )
}

export default EmployeePage