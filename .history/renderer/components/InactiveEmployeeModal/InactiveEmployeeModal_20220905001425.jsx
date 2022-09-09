import React, { useState, useEffect } from 'react';
import styles from './InactiveEmployeeModal.module.scss';

import Toast from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactiveEmployeeModal() {
  const rest = new Rest();

  const [rows, setRows] = useState([]);
  const handleInactiveEmployees = (data) => {
    setRows(data);
  };
  const getAllInactiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/inactive`, handleInactiveEmployees);
  };

  const columns = [
    { id: 'employeeId', label: 'ID', minWidth: 100 },
    { id: 'employeeFirstName', label: 'First Name', minWidth: 160 },
    { id: 'employeeLastName', label: 'Last Name', minWidth: 120 },
    { id: 'employeeAddress', label: 'Address', minWidth: 160, align: 'right' },
    {
      id: 'employeeContactNumber',
      label: 'Contact',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'dateEmployed', label: 'Position', minWidth: 110, align: 'right' },
    { id: 'employeePositionName', label: 'Position', minWidth: 110, align: 'right' },
    { id: 'employeeTypeName', label: 'Type', minWidth: 110, align: 'right' },
    { id: 'superiorEmployeeName', label: 'Type', minWidth: 110, align: 'right' },
  ];

  useEffect(() => {
    getAllInactiveEmployees();
  })

  return (
    // <div className={styles.container}>
    //     <div className={styles.form_box}>
    //         <div className={styles.header}>Inactive Employees</div>
    //     </div>
    // </div>
    <div className={styles.container}>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => {row.employeeId}}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  )
}
