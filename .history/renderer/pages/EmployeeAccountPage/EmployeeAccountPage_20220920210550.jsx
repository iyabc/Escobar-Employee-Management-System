import Raact from 'react';
import styles from './EmployeeAccountPage.module.scss';
import EmployeeSideMenu from '../../components/Shared/EmployeeSideMenu/EmployeeSideMenu';

export default function EmployeeAccountPage() {
    return (
        <div className={styles.section}>
            <EmployeeSideMenu homeState="active" viewattendanceState="" viewaccountState="" />            
            <div className={styles.content}>
                
            </div>
        </div>
    )
}