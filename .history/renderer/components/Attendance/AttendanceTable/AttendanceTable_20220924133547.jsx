import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import styles from './AttendanceTable.module.scss';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchBar from 'material-ui-search-bar';
import { printPdf } from '../../../print/printFunctions';
import Rest from "../../../rest/Rest.tsx";
import { Modal } from '@mui/material';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AttendanceTable() {
  const headCells = [
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
      return row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) || String(row.attendanceTime).includes(searchValue) || row.attendanceType.toLowerCase().includes(searchValue.toLowerCase);
      });
      setRows(filteredRows);
    };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  }

  useEffect(() => {
    getAttendanceData();
  }, []);

  useEffect(() => {
    setRows(fetchedData);
  }, [fetchedData]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.left}>
              <SearchBar 
                placeholder="Search Attendance Table"
                  value={searched}
                  onChange={(searchValue) => requestSearch(searchValue)}
                onCancelSearch={() => cancelSearch()}
              />
              <div className={styles.print_btn}>
                <Tooltip title='Print Attendance Data'>
                  <LocalPrintshopIcon onClick={printPdf('Attendance')} />
                </Tooltip>
              </div>
          </div>
          <div className={styles.right}>
            {/* {showButtons()} */}
          </div>
      </div>
      <div className={styles.table}>
          <DataGrid
            getRowId={(row) => row.employeeAttendanceJoinId}
            rows={rows}
            columns={headCells}
            pageSize={15}
            disableSelectionOnClick
          />
      </div>
    </div>
  )
}
