import React, { useState, useEffect } from 'react';
import styles from './ActiveAccountsTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import MoreInfoModal from '../MoreInfoModal/MoreInfoModal';
import InactivateAccountModal from '../InactivateAccountModal/InactivateAccountModal';

export default function ActiveAccountsTable({ reload, activeAccounts }) {
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
  //edit
  const [openMoreInfoModal, setOpenMoreInfoModal] = useState(false);
  const handleOpenMoreInfoModal = () => { 
    handleSelectedValues();
    setOpenMoreInfoModal(true); 
  };
  const handleCloseMoreInfoModal = () => { setOpenMoreInfoModal(false) };
  //edit
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => { 
    handleSelectedValues();
    setOpenEditModal(true); 
  };
  const handleCloseEditModal = () => { setOpenEditModal(false) };
  const editSuccessAction = () => {
    handleCloseEditModal();
    reload();
    setRows(activeCategories);
  }
  //inactivate modal
  const [openInactivateModal, setOpenInactivateModal] = useState(false);
  const handleOpenInactivateModal = () => {
    handleSelectedValues(); 
    setOpenInactivateModal(true); 
  };
  const handleCloseInactivateModal = () => { setOpenInactivateModal(false); };
  const inactivateSuccessAction = () => {
    handleCloseInactivateModal();
    reload();
  }
  //get shown buttons
  function showButtons() {
    if(selected.length == 1 ){
      return (
        <>
          <Tooltip title="More Account Information">
            <IconButton onClick={handleOpenMoreInfoModal}>
              <MediumButton label="More Info" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Employee Position">
            <IconButton onClick={handleOpenEditModal}>
              <MediumButton label="Edit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Inactivate Employee Position/s">
            <IconButton onClick={handleOpenInactivateModal}>
              <MediumButton label="Inactivate" />
            </IconButton>
          </Tooltip>
        </>
      )
    }else if(selected.length > 1){
      return (
        <>
        <Tooltip title="More Account Information">
            <IconButton disabled onClick={handleOpenMoreInfoModal}>
              <MediumButton label="More Info" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Employee Position">
            <IconButton disabled onClick={handleOpenEditModal}>
              <MediumButton label="Edit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Inactivate Employee Position/s">
            <IconButton onClick={handleOpenInactivateModal}>
              <MediumButton label="Inactivate" />
            </IconButton>
          </Tooltip>
        </>
      )
    }else if(selected.length == 0){
      return (
        <>
        <Tooltip title="More Account Information">
            <IconButton disabled onClick={handleOpenMoreInfoModal}>
              <MediumButton label="More Info" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit Expense Category">
            <IconButton disabled onClick={handleOpenEditModal}>
              <MediumButton label="Edit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Inactivate Expense Categories">
            <IconButton disabled onClick={handleOpenInactivateModal}>
              <MediumButton label="Inactivate" />
            </IconButton>
          </Tooltip>
        </>
      )
    }
  };

  useEffect(() => {
    handleSelectedValues();
  }, [selected])

  useEffect(() => {
    setRows(activeAccounts);
  }, [activeAccounts])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          Active Accounts
        </div>
        <div className={styles.right}>
          {showButtons()}
        </div>
      </div>
      <div className={styles.sub_header}>
        <div className={styles.left}>
          <SearchBar 
            placeholder="Search Active Accounts Table"
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
        <Modal open={openMoreInfoModal} onClose={handleCloseMoreInfoModal}>
            <div className={styles.modal}>
                <MoreInfoModal
                selectedValues={selectedValues}
                />
            </div>
        </Modal>
        <Modal open={openInactivateModal} onClose={handleCloseInactivateModal}>
            <div className={styles.modal}>
                <InactivateAccountModal
                inactivateSuccessAction={inactivateSuccessAction}
                selectedValues={selectedValues}
                />
            </div>
        </Modal>
    </div>
  )
}
