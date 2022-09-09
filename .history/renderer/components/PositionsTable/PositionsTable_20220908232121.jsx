import React, { useState, useEffect } from 'react';
import styles from './PositionsTable.module.scss';
import SearchBar from 'material-ui-search-bar';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import shortid from 'shortid';

import Rest from "../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function PositionsTable() {
    const headCells = [
        { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'left' },
        { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'left' }
    ]
    const rest = new Rest();
    //get positions
    const [positions, setPositions] = useState([]);
    const handlePositionsData = (data) => {
        setPositions(data);
    }
    const getPositionsData = () => {
        rest.get(`${INITIAL_URL}/employee-position/active`, handlePositionsData);
    }
     //search
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
     //show rows
  const setShownRows = () => {
    if(rows.length == 0){
      setRows(positions);
    }
  };

  useEffect(() => {
    getPositionsData();
    setShownRows();
  })

    return (
        <div className={styles.container}>
          {/* {console.log(rows)} */}
            <div className={styles.content}>
                <div className={styles.card}>
                    <div className={styles.left_content}>
                        <div className={styles.add_form}>
                            
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.right_content}>
                        <div className={styles.header}>
                            <div className={styles.left}>
                                <SearchBar 
                                    placeholder="Search Position Table"
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
                        <DataGrid
                        getRowId={(row) => row.employeePositionId}
                        rows={rows}
                        columns={headCells}
                        pageSize={20}
                        onSelectionModelChange={handleSelect}
                        checkboxSelection
                        />
                    </div>
                </div>
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
