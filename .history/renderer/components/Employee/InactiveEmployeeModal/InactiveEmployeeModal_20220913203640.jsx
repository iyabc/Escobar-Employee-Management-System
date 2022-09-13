import React, { useState, useEffect } from 'react';
import styles from './InactiveEmployeeModal.module.scss';

import shortid from 'shortid';
import { DataGrid } from '@mui/x-data-grid';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactiveEmployeeModal({ inactiveEmployees }) {
  console.log(inactiveEmployees)

  const [rows, setRows] = useState([]);
  const columns = [
    { field: 'employeeId', headerName: 'ID', minWidth: 100 },
    { field: 'employeeFirstName', headerName: 'First Name', minWidth: 160 },
    { field: 'employeeLastName', headerName: 'Last Name', minWidth: 120 },
    { field: 'employeeAddress', headerName: 'Address', minWidth: 160, align: 'right' },
    { field: 'employeeContactNumber', headerName: 'Contact', minWidth: 100, align: 'right' },
    { field: 'dateEmployed', headerName: 'Position', minWidth: 110, align: 'right' },
    { field: 'employeePositionName', headerName: 'Position', minWidth: 110, align: 'right' },
    { field: 'employeeTypeName', headerName: 'Type', minWidth: 110, align: 'right' },
    { field: 'superiorEmployeeName', headerName: 'Type', minWidth: 110, align: 'right' },
  ];
  useEffect(() => {
    setRows(inactiveEmployees);
  }, [inactiveEmployees])


  return (
    <div className={styles.container}>
      <div className={styles.header}>Inactive Employees</div>
        <div className={styles.table_container}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row, index) => {index}}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
    </div>
  )
}
