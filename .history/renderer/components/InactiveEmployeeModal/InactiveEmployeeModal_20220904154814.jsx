import React, { useState, useEffect } from 'react';
import styles from './InactiveEmployeeModal.module.scss';

import Toast from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';



export default function InactiveEmployeeModal() {
  const rest = new Rest();
  const [rows, setRows] = useState([]);
  const handleInactiveEmployees = (data) => {
    setRows(data);
  };
  const getAllInactiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/inactive`, handleInactiveEmployees);
  };

  useEffect(() => {
    getAllInactiveEmployees();
  })

  return (
    // <div className={styles.container}>
    //     <div className={styles.form_box}>
    //         <div className={styles.header}>Inactive Employees</div>
    //     </div>
    // </div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}
