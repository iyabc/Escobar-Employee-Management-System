import Raact from 'react';
import styles from './EmployeeAccountPage.module.scss';
import EmployeeSideMenu from '../../components/Shared/EmployeeSideMenu/EmployeeSideMenu';
import { useUser } from '../../components/Contexts/UserContext.jsx';

export default function EmployeeAccountPage() {
    const { employeeName } = useUser();

    return (
        <div className={styles.section}>
            <EmployeeSideMenu homeState="" viewattendanceState="" viewaccountState="active" />            
            <div className={styles.content}>
                
            </div>
        </div>
    )
}