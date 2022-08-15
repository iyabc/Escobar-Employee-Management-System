import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Attendance from '../../data/attendance.json';
import SearchBar from 'material-ui-search-bar';

function createData(attendance_id, emp_id, check_in, check_out) {
  return { attendance_id, emp_id, check_in, check_out};
}

const originalRows = [
  createData('123', 159, 6.0, 24, 4.0),
  createData('234', 237, 9.0, 37, 4.3),
  createData('345', 262, 16.0, 24, 6.0),
  createData('678', 305, 3.7, 67, 4.3),
  createData('567', 356, 16.0, 49, 3.9),
];

export default function AttendanceTable() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = rows.filter((row) => {
      return row.attendance_id.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRows(filteredRows);
    
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <TableContainer component={Paper}>
      <SearchBar 
        value={searched}
        onChange={(searchValue) => requestSearch(searchValue)}
        onCancelSearch = {() => cancelSearch()}
      />
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                {Attendance.attendance.map((item) => (
                    <TableCell
                    key={item.id}
                    align={item.align}
                    style={{ minWidth: item.minWidth }}
                  >
                    {item.label}
                  </TableCell>
                ))}
            </TableRow>
            </TableHead>
        <TableBody>
          {originalRows.map((row) => (
            <TableRow
              key={row.attendance_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.attendance_id}</TableCell>
              <TableCell align="right">{row.emp_id}</TableCell>
              <TableCell align="right">{row.check_in}</TableCell>
              <TableCell align="right">{row.check_out}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

