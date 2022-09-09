import React, { useState, useEffect } from 'react';
import styles from './PositionsTable.module.scss';
import SearchBar from 'material-ui-search-bar';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import shortid from 'shortid';

import Rest from "../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';

export default function PositionsTable() {
     //  search
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = fetchedData.filter((row) => {
      return String(row.employeeAttendanceJoinId).includes(searchValue) || row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) || row.attendanceTime.includes(searchValue) || row.attendanceType.toLowerCase().includes(searchValue.toLowerCase);
      });
      setRows(filteredRows);
    };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  }
    return (
        <div className={styles.container}>
          {/* {console.log(rows)} */}
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
                  {/* {showButtons()} */}
                </div>
            </div>
            <div className={styles.table}>
                {/* <DataGrid
                  getRowId={(row) => row.employeeAttendanceJoinId}
                  rows={rows}
                  columns={headCells}
                  pageSize={20}
                  disableSelectionOnClick
                  // onSelectionModelChange={handleSelect}
                  // checkboxSelection
                /> */}
            </div>
    
            {/* <Modal open={openDeleteModal} onClose={handleCloseDeleteModal} >
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
            </Modal> */}
        </div>
      )
}
