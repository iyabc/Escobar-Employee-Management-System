import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Employee from '../../data/employee.json';
import SearchBar from 'material-ui-search-bar';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import styles from './EmployeeTable.module.scss';
import { Box, Button } from '@mui/material';

function createData(employee_id, last_name, first_name, contact_num, address, daily_wage, employee_type) {
  return { employee_id, last_name, first_name, contact_num, address, daily_wage, employee_type};
}

const originalRows = [
  createData(100, 'Panes', 'Julienne Andrea', '09218186805', 'Blk 7 L5 Luzville Subdivision, Panacan, Davao City, Davao del Sur, Philippines', 356.90, ' Admin'),
  createData(200, 'Sentorias', 'Andrea Januarius', '09218186805', 'Davao City', 356.90, ' Admin')
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };

export default function EmployeeTable() {
    const [rows, setRows] = useState(originalRows);
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
        const filteredRows = originalRows.filter((row) => {
            return row.first_name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setRows(filteredRows);
      
    };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
    <TableContainer component={Paper}>
        <SearchBar 
            placeholder='Search Employee ID'
            value={searched}
            onChange={(searchValue) => requestSearch(searchValue)}
            onCancelSearch={() => cancelSearch()}
        />
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                <TableCell />
                {Employee.employee.map((item) => (
                    <TableCell
                        key={item.id}
                        align='left'
                        style={{ minWidth: item.minWidth }}
                    >
                    {item.label}
                  </TableCell>
                ))}
            </TableRow>
            </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.employee_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left">
                    <Button
                        className={styles.edit_button}
                        onClick={() => handleOpen}
                    >
                        <EditIcon />
                    </Button>
                </TableCell>
                <TableCell component="th" scope="row">{row.employee_id}</TableCell>
                <TableCell align="left">{row.last_name}</TableCell>
                <TableCell align="left">{row.first_name}</TableCell>
                <TableCell align="left">{row.contact_num}</TableCell>
                <TableCell align="left">{row.address}</TableCell>
                <TableCell align="left">{row.daily_wage}</TableCell>
                <TableCell align="left">{row.employee_type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Modal open={open} onClose={() => handleClose}>
        <Box style={style}>
            <div className={styles.close_btn} onClick={() => handleClose}>X</div>
            {/* <CalendarModalContent
                title={item.title}
                sched={item.sched}
                itemNum={item.itemNum}
            /> */}
        </Box>
    </Modal>
    </div>
  );
}

