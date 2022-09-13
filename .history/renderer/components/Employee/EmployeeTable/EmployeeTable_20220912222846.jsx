import React, { useState, useEffect } from 'react';
import styles from './EmployeeTable.module.scss';
import SearchBar from 'material-ui-search-bar';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';
import shortid from 'shortid';
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function EmployeeTable() {
  //get data
  const [activeEmployees, setActiveEmployees] = useState([]);
  const rest = new Rest();
  const handleActiveEmployees = (data) => {
    setActiveEmployees(data);
  }
  const getActiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleActiveEmployees)
  }
  //datagrid
  const headCells = [
    { field: 'employeeId', headerName: 'ID', flex: 1, align: 'left'},
    { field: 'employeeFirstName', headerName: 'First', flex: 1, align: 'left'},
    { field: 'employeeLastName', headerName: 'Last', flex: 1, align: 'left'},
    { field: 'employeeAddress', headerName: 'Address', flex: 1, align: 'left'},
    { field: 'employeeContactNumber', headerName: 'Contact', flex: 1, align: 'left'},
    { field: 'dateEmployed', headerName: 'Date Employed', flex: 1, align: 'left'},
    { field: 'employeePositionName', headerName: 'Position', flex: 1, align: 'left'},
    { field: 'employeeTypeName', headerName: 'Type', flex: 1, align: 'left'},
    { field: 'superiorEmployeeName', headerName: 'Superior', flex: 1, align: 'left'}
  ]
  const [rows, setRows] = useState([]);
  //  search
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = activeEmployees.filter((row) => {
      return String(row.employeeId).includes(searchValue) || row.employeeFirstName.toLowerCase().includes(searchValue.toLowerCase()) ||  row.employeeLastName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeContactNumber.includes(searchValue) || row.employeeAddress.toLowerCase().includes(searchValue.toLowerCase);
      });
      setRows(filteredRows);
    };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  }
  //selected rows
  const [selected, setSelected] = useState("");
  const handleSelect = (ids) => {
    setSelected(ids);
  }
  const [selectedValues, setSelectedValues] = useState([]);
  const handleSelectedValues = () => {
    const arr = [];
    if(selected.length == 1){
      rows.map((item) => {
        if(item.employeeId == selected[0]){
          arr.push(item);
        }
      })
    }else if(selected.length > 1){
      for(let i=0; i < selected.length; i++){
        rows.map((item) => {
          if(item.employeeId == selected[i]){
            arr.push(item);
          }
        })
      }
    }
    setSelectedValues(arr);
  }
  //edit modal
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => {
    handleSelectedValues();
    setOpenEditModal(true);
  }
  const handleCloseEditModal = () => {setOpenEditModal(false);}
  const editSuccessAction = () => {
    handleCloseEditModal();
    getActiveEmployees();
    setRows(activeEmployees);
  }
  //inactive
  const [openInactivateModal, setOpenInactivateModal] = useState(false);
  const handleOpenInactivateModal = () => { setOpenInactivateModal(true)};
  const handleCloseInactivateModal = () => { setOpenInactivateModal(false)};
   //show buttons
  function showButtons() {
    if(selected.length == 1 ){
      return (
        <>
        <Tooltip title="Edit Employee">
          <IconButton onClick={handleOpenEditModal}>
            <MediumButton label="Edit" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Inactivate Employee">
          <IconButton>
            <MediumButton label="Inactivate" />
          </IconButton>
        </Tooltip>
        </>
      )
    }else if(selected.length > 1){
      return (
        <Tooltip title="Inactivate Employee">
          <IconButton>
            <MediumButton label="Inactivate" />
          </IconButton>
        </Tooltip>
      )
    }
  };

  useEffect(() => {
    getActiveEmployees();
  }, [])

  useEffect(() => {
    setRows(activeEmployees);
  }, [activeEmployees]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header_left}>
          <MediumButton label='Add Employee' />
        </div>
        <div className={styles.header_right}>
          <MediumButton label='Inactive Employee/s' />
        </div>
      </div>
      <div className={styles.sub_header}>
        <div className={styles.left}>
            <SearchBar 
              placeholder="Search Employee Table"
                value={searched}
                onChange={(searchValue) => requestSearch(searchValue)}
              onCancelSearch={() => cancelSearch()}
            />
            <div className={styles.print_btn}>
                <LocalPrintshopIcon />
            </div>
        </div>
        <div className={styles.right}>
          {showButtons()}
        </div>
      </div>
      <div className={styles.table}>
        <DataGrid
          getRowId={(row) => row.employeeId}
          rows={rows}
          columns={headCells}
          pageSize={20}
          onSelectionModelChange={handleSelect}
          checkboxSelection
        />
      </div>
      {/* modal */}
      <Modal open={openInactivateModal} onClose={handleCloseInactivateModal}>
        <div className={styles.modal}>
          <EditEmployeeModal
            editSuccessAction={editSuccessAction}
            employeeData={selectedValues}
          />
        </div>
      </Modal>
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <div className={styles.modal}>
          <EditEmployeeModal
            editSuccessAction={editSuccessAction}
            employeeData={selectedValues}
          />
        </div>
      </Modal>
    </div>
  )
}
