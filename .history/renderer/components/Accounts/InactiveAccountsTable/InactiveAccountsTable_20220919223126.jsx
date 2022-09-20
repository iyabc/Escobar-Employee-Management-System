import React, { useState, useEffect } from 'react';
import styles from './InactiveAccountsTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

export default function InactiveAccountsTable({ reload, inactiveAccounts }) {
  //columns
  const headCells = [
    { field: 'accountUsername', headerName: 'Username', flex: 1, align: 'left'},
    { field: 'employeeName', headerName: 'Name', flex: 1, align: 'left'},
    { field: 'accessInventoryManagementSystem', headerName: 'IMS', flex: 1, align: 'left'},
    { field: 'accessEmployeeManagementSystem', headerName: 'EMS', flex: 1, align: 'left'},
    { field: 'accessIncomeAndExpenseSystem', headerName: 'IES', flex: 1, align: 'left'},
    { field: 'accessOrderingSystem', headerName: 'OS', flex: 1, align: 'left'}
  ];
  const [rows, setRows] = useState([]);
  //  search
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = inactiveAccounts.filter((row) => {
      return row.username.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeTypeName.toLowerCase().includes(searchValue.toLowerCase());
      });
      setRows(filteredRows);
    };
  const cancelSearch = () => {
    setSearched("");
    setRows(inactiveAccounts);
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
        if(item.accountId == selected[i]){
          arr.push(item);
        }
      })
    }
    setSelectedValues(arr);
  }
  //activate modal
  const [openActivateModal, setOpenActivateModal] = useState(false);
  const handleOpenActivateModal = () => { setOpenActivateModal(true) };
  const handleCloseActivateModal = () => { setOpenActivateModal(false) };
  const activateSuccessAction = () => {
    handleCloseActivateModal();
    reload();
  }
  //get shown buttons
  function showButtons() {
    if(selected.length == 1 ){
      return (
        <>
          <Tooltip title="Inactivate Employee Position/s">
            <IconButton onClick={handleOpenInactivateModal}>
              <MediumButton label="Activate" />
            </IconButton>
          </Tooltip>
        </>
      )
    }else if(selected.length > 1){
      return (
        <>
          <Tooltip title="Activate Employee Position/s">
            <IconButton onClick={handleOpenActivateModal}>
              <MediumButton label="Activate" />
            </IconButton>
          </Tooltip>
        </>
      )
    }else if(selected.length == 0){
      return (
        <>
          <Tooltip title="Activate Expense Categories">
            <IconButton disabled onClick={handleOpenActivateModal}>
              <MediumButton label="Activate" />
            </IconButton>
          </Tooltip>
        </>
      )
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          Inactive Accounts
        </div>
        <div className={styles.right}>
          {showButtons()}
        </div>
      </div>
      <div className={styles.sub_header}>
        <div className={styles.left}>
          <SearchBar 
            placeholder="Search Inactive Accounts Table"
            value={searched}
            onChange={(searchValue) => requestSearch(searchValue)}
            onCancelSearch={() => cancelSearch()}
          />
        </div>
      </div>
      <div className={styles.table}>
        <DataGrid
          getRowId={(row) => row.accountId}
          rows={rows}
          columns={headCells}
          pageSize={10}
          onSelectionModelChange={handleSelect}
          checkboxSelection
        />
      </div>
        {/* <Modal open={openInactivateModal} onClose={handleCloseInactivateModal}>
          <div className={styles.modal}>
            <InactivateTypes
            inactivateSuccessAction={inactivateSuccessAction}
            selectedValues={selectedValues}
            />
          </div>
        </Modal> */}
    </div>
  )
}
