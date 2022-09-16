import React, { useState, useEffect } from 'react';
import styles from './InactiveEmployeeModal.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Modal } from '@mui/material';

export default function InactiveEmployeeModal({ inactiveEmployees }) {
  //table
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
  //selected rows
  const [selected, setSelected] = useState("");
  const handleSelect = (ids) => {
    setSelected(ids);
  }
  const [selectedValues, setSelectedValues] = useState([]);
  const handleSelectedValues = () => {
    const arr = [];
    for(let i=0; i < selected.length; i++){
      rows.map((item) => {
        if(item.employeeId == selected[i]){
          arr.push(item);
        }
      })
    }
    setSelectedValues(arr);
  }
  //confirm activate modal
  const [openActivateModal, setOpenActivateModal] = useState(false);
  const handleOpenActivateModal = () => { setOpenActivateModal(true); }
  const handleCloseActivateModal = () => { setOpenActivateModal(false); }
  //show button
  function showButton(){
    if(selected.length > 0){
      return (
        <Tooltip title="Activate Employee">
          <IconButton onClick={handleOpenActivateModal}>
            <MediumButton label="Edit" />
          </IconButton>
        </Tooltip>
      )
    }
  }

  useEffect(() => {
    handleSelectedValues();
  }, [handleSelect])

  useEffect(() => {
    setRows(inactiveEmployees);
  }, [inactiveEmployees])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          Inactive Employees
        </div>
        <div className={styles.right}>
          {showButton()}
        </div>
      </div>
        <div className={styles.table_container}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.employeeId}
            pageSize={20}
            onSelectionModelChange={handleSelect}
            checkboxSelection
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
        <Modal open={openActivateModal} onClose={handleCloseActivateModal}>
          <div className={styles.modal}>

          </div>
        </Modal>
    </div>
  )
}
