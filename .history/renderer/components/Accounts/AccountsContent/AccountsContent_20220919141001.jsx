import React, { useState, useEffect } from 'react';
import styles from './AccountsContent.module.scss';
import SearchBar from 'material-ui-search-bar';
import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AccountsContent() {
  const rest = new Rest();
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

  useEffect(() => {
    getActiveAccounts();
    getInactiveAccounts();
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
              </div>
              <div className={styles.inactive_table}>
              </div>
            </div>
          </div>
          {/* <Modal open={openAddModal} onClose={handleCloseAddModal}>
            <div className={styles.modal}>
              <AddPositionForm 
                addSuccessAction={addSuccessAction}
                activePositions={positions} 
                inactivePositions={inactivePositions}
              />
            </div>
          </Modal>
          <Modal open={openEditModal} onClose={handleCloseEditModal} >
              <div className={styles.modal}>
                <EditPositionModal
                  editSuccessAction={editSuccessAction}
                  employeePositionId={selectedValues.map((item) => item.employeePositionId)}
                  employeePositionName={selectedValues.map((item) => item.employeePositionName)}
                  positionActiveData={positions}
                />
              </div>
          </Modal>
          <Modal open={openInactivateModal} onClose={handleCloseInactivateModal} >
              <div className={styles.modal}>
                <InactivatePositionModal 
                  inactivateSuccessAction={inactivateSuccessAction}
                  selectedValues={selectedValues}
                />
              </div>
          </Modal> */}
      </div>
  )
}
