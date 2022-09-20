import React, { useState, useEffect } from 'react';
import styles from './AccountsContent.module.scss';
import Rest from "../../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import InactiveAccountsTable from '../InactiveAccountsTable/InactiveAccountsTable';
import ActiveAccountsTable from '../ActiveAccountsTable/ActiveAccountsTable';
import Toast from '../../components/Shared/Toast/Toast';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AccountsContent() {
  const rest = new Rest();
  //get active employee data
  const [activeEmployees, setActiveEmployees] = useState([]);
  const handleActiveEmployees = (data) => {
    setActiveEmployees(data)
  }
  const getActiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleActiveEmployees)
  }
  //get active accounts data
  const [activeAccounts, setActiveAccounts] = useState([]);
  const handleActiveAccounts = (data) => {
    setActiveAccounts(data)
  }
  const getActiveAccounts = () => {
    rest.get(`${INITIAL_URL}/account/active`, handleActiveAccounts)
  }
  //get inactive accounts data
  const [inactiveAccounts, setInactiveAccounts] = useState([]);
  const handleInactiveAccounts = (data) => {
    setInactiveAccounts(data)
  }
  const getInactiveAccounts = () => {
    rest.get(`${INITIAL_URL}/account/inactive`, handleInactiveAccounts)
  }
  //add account modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => { setOpenAddModal(true) };
  const handleCloseAddModal = () => { setOpenAddModal(false) };
  const addSuccessAction = () => {
    handleCloseAddModal();
    reload();
  }
  //reload
  const reload = () => {
    getActiveAccounts();
    getInactiveAccounts();
  }

  useEffect(() => {
    getActiveAccounts();
    getInactiveAccounts();
    getActiveEmployees();
  }, []);

  return (
    <div className={styles.container}>
      <Toast />
      <div className={styles.content}>
        <div className={styles.header}>
          <button onClick={handleOpenAddModal}>
            <MediumButton label="Add Employee Position" />
          </button>
        </div>
        <div className={styles.tables}>
          <div className={styles.active_table}>
            <ActiveAccountsTable
            reload={reload}
            activeAccounts={activeAccounts}
            activeEmployees={activeEmployees}
            />
          </div>
          <div className={styles.inactive_table}>
            <InactiveAccountsTable
            reload={reload}
            inactiveAccounts={inactiveAccounts}
            />
          </div>
        </div>
      </div>
    </div>
    //       <Modal open={openAddModal} onClose={handleCloseAddModal}>
    //         <div className={styles.modal}>
    //           {/* <AddPositionForm 
    //             addSuccessAction={addSuccessAction}
    //             activePositions={positions} 
    //             inactivePositions={inactivePositions}
    //           /> */}
    //         </div>
    //       </Modal>
  ) 
}
