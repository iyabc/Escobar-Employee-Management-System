import React from 'react';
import styles from './PositionsPage.module.scss';

export default function PositionsPage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewattendanceState="" viewemployeeState="" viewpositionsState="active" />
      <div className={styles.content}>
        <EmployeeTable />
      </div>
    </div>
  )
}
