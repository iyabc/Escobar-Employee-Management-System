import React from 'react';
import styles from './AccountsPage.module.scss';
import AccountsContent from '../../components/Accounts/AccountsTable/AccountsTable';
import SideMenu from '../../components/Shared/SideMenu/SideMenu';

export default function AccountsPage() {
    return (
        <div className={styles.section}>
          <SideMenu homeState="" viewattendanceState="" viewemployeeState="" viewpositionsState="active" viewtypesState='' viewaccountsState="" />
          <div className={styles.content}>
            <AccountsContent />
          </div>
        </div>
    )
}
