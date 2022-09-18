import React from 'react';
import styles from './TypesPage.module.scss';
import TypesContent from '../../components/Types/TypesContent/TypesContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';
import Toast from '../../components/Shared/Toast/Toast';

export default function TypesPage() {
  return (
    <div className={styles.section}>
      <Toast />
      <SideMenu homeState="" viewattendanceState="" viewemployeeState="" viewpositionsState="" viewtypesState="active" />
      <div className={styles.content}>
        <TypesContent />
      </div>
    </div>
  )
}
