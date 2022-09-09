import React from 'react';

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
