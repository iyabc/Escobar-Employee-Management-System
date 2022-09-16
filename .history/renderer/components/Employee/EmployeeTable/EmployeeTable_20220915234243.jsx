import React, { useState, useEffect } from 'react';
import styles from './EmployeeTable.module.scss';
import SearchBar from 'material-ui-search-bar';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal';
import InactivateEmployeeModal from '../InactivateEmployeeModal/InactivateEmployeeModal';
import InactiveEmployeeModal from '../InactiveEmployeeModal/InactiveEmployeeModal';
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function EmployeeTable() {
  //get active employees data
  const [activeEmployees, setActiveEmployees] = useState([]);
  const rest = new Rest();
  const handleActiveEmployees = (data) => {
    setActiveEmployees(data);
  }
  const getActiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleActiveEmployees)
  }
  //get inactive employees data
  const [inactiveEmployees, setInactiveEmployees] = useState([]);
  const handleInactiveEmployees = (data) => {
    setInactiveEmployees(data);
  }
  const getInactiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/inactive`, handleInactiveEmployees)
  }
  //datagrid
  const headCells = [
    // { field: 'employeeId', headerName: 'ID', flex: 1, align: 'left'},
    // { field: 'employeeFirstName', headerName: 'First', flex: 1, align: 'left'},
    // { field: 'employeeLastName', headerName: 'Last', flex: 1, align: 'left'},
    // { field: 'employeeAddress', headerName: 'Address', flex: 1, align: 'left'},
    // { field: 'employeeContactNumber', headerName: 'Contact', flex: 1, align: 'left'},
    // { field: 'dateEmployed', headerName: 'Date Employed', flex: 1, align: 'left'},
    // { field: 'employeePositionName', headerName: 'Position', flex: 1, align: 'left'},
    // { field: 'employeeTypeName', headerName: 'Type', flex: 1, align: 'left'},
    // { field: 'superiorEmployeeName', headerName: 'Superior', flex: 1, align: 'left'}
    { field: 'employeeId', headerName: 'ID' },
    { field: 'employeeFirstName', headerName: 'First Name' },
    { field: 'employeeLastName', headerName: 'Last Name',},
    { field: 'employeeAddress', headerName: 'Address' },
    { field: 'employeeContactNumber', headerName: 'Contact' },
    { field: 'dateEmployed', headerName: 'Date Employed' },
    { field: 'employeePositionName', headerName: 'Position' },
    { field: 'employeeTypeName', headerName: 'Type' },
    { field: 'superiorEmployeeName', headerName: 'Superior' }
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
    // if(selected.length == 1){
    //   rows.map((item) => {
    //     if(item.employeeId == selected[0]){
    //       arr.push(item);
    //     }
    //   })
    // }else if(selected.length > 1){
    //   for(let i=0; i < selected.length; i++){
    //     rows.map((item) => {
    //       if(item.employeeId == selected[i]){
    //         arr.push(item);
    //       }
    //     })
    //   }
    // }
    for(let i=0; i < selected.length; i++){
      rows.map((item) => {
        if(item.employeeId == selected[i]){
          arr.push(item);
        }
      })
    }
    setSelectedValues(arr);
  }
  //add
  const [dateTime, setDateTime] = useState('')
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
  //inactivate
  const [openInactivateModal, setOpenInactivateModal] = useState(false);
  const handleOpenInactivateModal = () => { 
    handleSelectedValues();
    setOpenInactivateModal(true);
  };
  const handleCloseInactivateModal = () => { setOpenInactivateModal(false)};
  const inactivateSuccessAction = () => {
    handleCloseInactivateModal();
    getActiveEmployees();
    setRows(activeEmployees);
  }
  //show inactive
  const [openInactiveModal, setOpenInactiveModal] = useState(false);
  const handleOpenInactiveModal = () => { 
    getInactiveEmployees();
    setOpenInactiveModal(true);
  };
  const handleCloseInactiveModal = () => { setOpenInactiveModal(false) };
  const activateSuccessAction = () => {
    handleCloseInactiveModal();
    getActiveEmployees();
    getInactiveEmployees();
  }
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
          <IconButton onClick={handleOpenInactivateModal}>
            <MediumButton label="Inactivate" />
          </IconButton>
        </Tooltip>
        </>
      )
    }else if(selected.length > 1){
      return (
        <Tooltip title="Inactivate Employee">
          <IconButton onClick={handleOpenInactivateModal}>
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
          <button onClick={handleOpenAddModal}>
            <MediumButton label='Add Employee' />
          </button>
        </div>
        <div className={styles.header_right}>
          <button onClick={handleOpenInactiveModal}>
          <MediumButton label='View Inactive Employee' />
          </button>
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
        
      </div>
      <DataGrid
          getRowId={(row) => row.employeeId}
          rows={rows}
          columns={headCells}
          pageSize={20}
          onSelectionModelChange={handleSelect}
          checkboxSelection
        />
      {/* modal */}
      <Modal open={openAddModal} onClose={handleCloseAddModal}>
        <div className={styles.modal}>
          <AddEmployeeModal
            dateTime={dateTime}
            addSuccessAction={addSuccessAction}
            activeEmployees={activeEmployees}
            inactiveEmployees={inactiveEmployees}
          />
        </div>
      </Modal>
      <Modal open={openInactiveModal} onClose={handleCloseInactiveModal}>
        <div className={styles.modal}>
          <InactiveEmployeeModal 
            activateSuccessAction={activateSuccessAction}
            inactiveEmployees={inactiveEmployees}
          />
        </div>
      </Modal>
      <Modal open={openInactivateModal} onClose={handleCloseInactivateModal}>
        <div className={styles.modal}>
          <InactivateEmployeeModal
            inactivateSuccessAction={inactivateSuccessAction}
            selectedValues={selectedValues}
          />
        </div>
      </Modal>
      <Modal open={openEditModal} onClose={handleCloseEditModal}>
        <div className={styles.modal}>
          <EditEmployeeModal
            editSuccessAction={editSuccessAction}
            employeeData={selectedValues}
            activeEmployees={activeEmployees}
            inactiveEmployees={inactiveEmployees}
          />
        </div>
      </Modal>
    </div>
  )
}
