import React, { useState, useEffect } from 'react';
import styles from './InactiveEmployeeModal.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import Rest from '../../../rest/Rest.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactiveEmployeeModal({ activateSuccessAction, inactiveEmployees }) {
  const rest = new Rest();
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
  //show button
  function showButton(){
    if(selected.length > 0){
      return (
        <Tooltip title="Activate Employee">
          <IconButton onClick={onActivate}>
            <MediumButton label="Activate" />
          </IconButton>
        </Tooltip>
      )
    }
  }
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
  //set active
  const onActivate = () => {
    rest.activate(
      `${INITIAL_URL}/employee/activate`,
      {'employeeListDto': selectedValues},
      activateSuccessAction,
      `Successfully activated ${selectedValues.length} employee/s`
    )
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
          className={styles.datagrid}
            rows={rows}
            columns={columns}
            getRowId={(row) => row.employeeId}
            pageSize={20}
            onSelectionModelChange={handleSelect}
            checkboxSelection
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
    </div>
  )
}
