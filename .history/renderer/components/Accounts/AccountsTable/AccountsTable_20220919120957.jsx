import React, { useState, useEffect } from 'react';
import styles from './AccountsTable.module.scss';
import SearchBar from 'material-ui-search-bar';
import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';
import Toast from '../../Shared/Toast/Toast.jsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AccountsTable() {
    const headCells = [
        { field: 'employeeFirstName', headerName: 'First Name', flex: 1, align: 'left' },
        { field: 'employeeLastName', headerName: 'Last Name', flex: 1, align: 'left' },
        { field: 'employeePositionName', headerName: 'Position', flex: 1, align: 'left' }
    ]
    const rest = new Rest();
    //get active employees
    const [employees, setEmployees] = useState([]);
    const handleEmployeesData = (data) => {
        setEmployees(data);
    }
    const getEmployeesData = () => {
        rest.get(`${INITIAL_URL}/employee/active`, handleEmployeesData);
    }
    //add
    const [openAddModal, setOpenAddModal] = useState(false);
    const handleOpenAddModal = () => {
      setDateTime(new Date());
      setOpenAddModal(true);
    };
    const handleCloseAddModal = () => { setOpenAddModal(false)};
    const addSuccessAction = () => {
      handleCloseAddModal();
      getActiveEmployees();
      setRows(activeEmployees);
    }

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
      </div>
  )
}
