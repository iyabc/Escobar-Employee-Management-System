import React from 'react';
import styles from './PositionsPage.module.scss';
import PositionsTable from '../../components/PositionsTable';
import SideMenu from '../../components/SideMenu/SideMenu';

export default function PositionsPage() {
  return (
    <div className={styles.section}>
      <SideMenu homeState="" viewattendanceState="" viewemployeeState="" viewpositionsState="active" />
      <div className={styles.content}>
        <PositionsTable />
      </div>
    </div>
  )
}
