import React from 'react';
import styles from './PositionsPage.module.scss';
import PositionsContent from '../../components/Positions/PositionsContent/PositionsContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import Toast from '../../components/Shared/Toast/Toast';

export default function PositionsPage() {
  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewattendanceState="" viewemployeeState="" viewpositionsState="active" />
      <div className={styles.content}>
        <PositionsContent />
      </div>
    </div>
  )
}
