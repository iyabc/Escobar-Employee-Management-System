import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchBar from 'material-ui-search-bar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Attendance from '../../data/attendance.json';
import styles from './AttendanceTable.module.scss';

function AttendanceTable() {

  function createData(attendance_id, emp_id, check_in, check_out) {
    return { attendance_id, emp_id, check_in, check_out };
  }
  
  const originalRows = [
    createData('123', 159, 6.0, 24, 4.0),
    createData('234', 237, 9.0, 37, 4.3),
    createData('345', 262, 16.0, 24, 6.0),
    createData('678', 305, 3.7, 67, 4.3),
    createData('567', 356, 16.0, 49, 3.9),
    createData('8910', 159, 6.0, 24, 4.0),
    createData('111213', 237, 9.0, 37, 4.3),
    createData('141516', 262, 16.0, 24, 6.0),
    createData('171819', 305, 3.7, 67, 4.3),
    createData('202122', 356, 16.0, 49, 3.9),
    createData('123', 159, 6.0, 24, 4.0),
    createData('234', 237, 9.0, 37, 4.3),
    createData('345', 262, 16.0, 24, 6.0),
    createData('678', 305, 3.7, 67, 4.3),
    createData('567', 356, 16.0, 49, 3.9),
    createData('8910', 159, 6.0, 24, 4.0),
    createData('111213', 237, 9.0, 37, 4.3),
    createData('141516', 262, 16.0, 24, 6.0),
    createData('171819', 305, 3.7, 67, 4.3),
    createData('202122', 356, 16.0, 49, 3.9),
  ];
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = originalRows.filter((row) => {
      return row.attendance_id.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRows(filteredRows);
    
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.search_bar}>
            <SearchBar 
                placeholder="Search Attendance Table"
                value={searched}
                onChange={(searchValue) => requestSearch(searchValue)}
                onCancelSearch={() => cancelSearch()}
            />
          </div>
          <div className={styles.print_btn_container}><LocalPrintshopIcon className={styles.print_btn} /></div>
        </div>
        <div className={styles.table}>
            <Table stickyHeader>
                <TableHead>
                <TableRow>
                    {Attendance.attendance.map((item) => (
                        <TableCell
                        key={item.id}
                        align="left"
                        style={{ minWidth: item.minWidth }}
                        >
                          {item.label}
                        </TableCell>
                    ))}
                    <TableCell></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.attendance_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{row.attendance_id}</TableCell>
                    <TableCell align="left">{row.emp_id}</TableCell>
                    <TableCell align="left">{row.check_in}</TableCell>
                    <TableCell align="left">{row.check_out}</TableCell>
                    <TableCell align="center"><RemoveCircleRoundedIcon sx={{ color:"red " }}/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default AttendanceTable