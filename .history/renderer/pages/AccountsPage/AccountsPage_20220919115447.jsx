import React from 'react';
import styles from './AccountsPage.module.scss';
import AccountsContent from '../../components/Accounts/AccountsContent/AccountsContent';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';

export default function AccountsPage() {
    return (
        <div className={styles.section}>
          <SideMenu homeState="" viewattendanceState="" viewemployeeState="" viewpositionsState="active" viewtypesState='' />
          <div className={styles.content}>
            <PositionsContent />
          </div>
        </div>
    )
}
