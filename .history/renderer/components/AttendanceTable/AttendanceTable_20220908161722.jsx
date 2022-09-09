import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import styles from './AttendanceTable.module.scss';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchBar from 'material-ui-search-bar';
import shortid from 'shortid';

import Rest from "../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AttendanceTable() {
  const headCells = [
    { field: 'employeeAttendanceJoinId', headerName: 'ID', flex: 1, align: 'left' },
    { field: 'employeeName', headerName: 'Employee Name', flex: 1, align: 'left' },
    { field: 'attendanceTime', headerName: 'Time', flex: 1, align: 'left' },
    { field: 'attendanceType', headerName: 'Type', flex: 1, align: 'left' },
  ]

  const rest = new Rest();
  //get attendance
  const [fetchedData, setFetchedData] = useState([]);
  const handleAttendanceData = (data) => {
    setFetchedData(data);
  }
  const getAttendanceData = () => {
    rest.get(`${INITIAL_URL}/attendance`, handleAttendanceData)
  }
  //  search
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
   
    const filteredRows = fetchedData.filter((row) => {
      console.log(typeof(row.attendanceTime))
      return String(row.employeeAttendanceJoinId).includes(searchValue) || row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) || row.attendanceType.toLowerCase.includes(searchValue.toLowerCase);
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
  //delete modal
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [arrDeleted, setArrDeleted] = useState([]);
  const handleOpenDeleteModal = () => { 
    setOpenDeleteModal(true);
    const arrDelete = [];
    for(let i=0; i < selected.length; i++){
      rows.forEach((item) => {
        if(item.employeeAttendanceJoinId == selected[i]){
          arrDelete.push(item)
        }
      })
    }
    setArrDeleted(arrDelete);
  };
  const handleCloseDeleteModal = () => { setOpenDeleteModal(false) };
  //show buttons
  function showButtons() {
    if(selected.length > 0 ){
      return (
        <>
        <Tooltip title="Delete Attendance">
          <IconButton onClick={handleOpenDeleteModal}>
            <MediumButton label="Delete" />
          </IconButton>
        </Tooltip>
        </>
      )
    }
  };
  //show rows
  const setShownRows = () => {
    if(rows.length == 0){
      setRows(fetchedData);
    }
  };
  //get data
  useEffect(() => {
    getAttendanceData();
    setShownRows();
  }, [rows]);

  return (
    <div className={styles.container}>
      {console.log(rows)}
        <div className={styles.header}>
            <div className={styles.left}>
                <SearchBar 
                    placeholder="Search Attendance Table"
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
              getRowId={(row) => row.employeeAttendanceJoinId}
              rows={rows}
              columns={headCells}
              pageSize={10}
              onSelectionModelChange={handleSelect}
              checkboxSelection
            />
        </div>

        <Modal open={openDeleteModal} onClose={handleCloseDeleteModal} >
            <div className={styles.modal}>
                <div className={styles.header}>
                    Confirm Delete
                </div>
                <div className={styles.content}>
                  {arrDeleted.map((item) => {
                    return (
                      <div key={shortid.generate()}>
                        {item.employeeName}
                        {item.attendanceTime}
                        {item.attendanceType}
                      </div>
                    )
                  })}
                </div>
                <div className={styles.footer}>
                    <MediumButton label="Delete" />
                </div>
            </div>
        </Modal>
    </div>
  )
}
