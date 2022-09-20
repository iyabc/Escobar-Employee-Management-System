import React, { useState, useEffect } from 'react';
import styles from './ActiveAccountsTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function ActiveAccountsTable({ reload, activeAccounts }) {
    const headCells = [
        { field: 'accountUsername', headerName: 'Username', flex: 1, align: 'left' },
        { field: 'employeeName', headerName: 'Name', flex: 1, align: 'left' }
    ]
    const rest = new Rest();
    const [rows,setRows] = useState=([]);
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
     //  search
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
      const filteredRows = activeAccounts.filter((row) => {
        return row.accountUsername.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) ||  row.employeeLastName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeContactNumber.includes(searchValue) || row.employeeAddress.toLowerCase().includes(searchValue.toLowerCase);
        });
        setRows(filteredRows);
      };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
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
    getActiveAccounts();
    setRows(activeAccounts);
  }
    //show buttons
  // function showButtons() {
  //   if(selected.length == 1 ){
  //     return (
  //       <>
  //         <Tooltip title="Edit Employee">
  //           <IconButton onClick={handleOpenEditModal}>
  //             <MediumButton label="Edit" />
  //           </IconButton>
  //         </Tooltip>
  //       </>
  //     )
  //   }else if(selected.length > 1){
  //     return (
  //       <>
  //         <Tooltip title="Edit Employee">
  //           <IconButton disabled onClick={handleOpenEditModal}>
  //             <MediumButton label="Edit" />
  //           </IconButton>
  //         </Tooltip>
  //       </>
  //     )
  //   }else if(selected.length == 0){
  //     return (
  //       <>
  //         <Tooltip title="Edit Employee">
  //           <IconButton disabled onClick={handleOpenEditModal}>
  //             <MediumButton label="Edit" />
  //           </IconButton>
  //         </Tooltip>
  //       </>
  //     )
  //   }
  // };

  useEffect(() => {
    getActiveAccounts();
  }, [])

  useEffect(() => {
    setRows(activeAccounts);
  }, [activeAccounts]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          Active Accounts
        </div>
        <div className={styles.right}>
          {/* {showButtons()} */}
        </div>
      </div>
      <div className={styles.sub_header}>
        <div className={styles.left}>
          <SearchBar 
            placeholder="Search Active Accounts Table"
            value={searched}
            onChange={searchBarInputOnChange}
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
      {/* <Modal open={openEditModal} onClose={handleCloseEditModal} >
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
      </Modal>  */}
    </div>
  )
}
