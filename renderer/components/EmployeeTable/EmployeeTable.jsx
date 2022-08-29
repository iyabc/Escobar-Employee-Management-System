import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Employee from '../../data/employee.json';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmployeeData from '../../data/employeeData.json';
import EmployeeModal from '../EmployeeModal/EmployeeModal';
import SearchBar from 'material-ui-search-bar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import styles from './EmployeeTable.module.scss';

function EmployeeTable() {
  const [rows, setRows] = useState(EmployeeData.employeeData);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
  const filteredRows = EmployeeData.employeeData.filter((row) => {
    return row.first_name.toLowerCase().includes(searchValue.toLowerCase());
  });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  const [open, setOpen] = useState(EmployeeData.employeeData.map((item) => false));
  const handleOpen = (currentIndex) =>
    setOpen(
      open.map((item, index) => (index === currentIndex ? true : item))
    );
  const handleClose = (currentIndex) =>
    setOpen(
      open.map((item, index) => (index === currentIndex ? false : item))
    );

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.search_bar}>
            <SearchBar 
                placeholder="Search Employee ID"
                value={searched}
                onChange={(searchValue) => requestSearch(searchValue)}
                onCancelSearch={() => cancelSearch()}
            />
          </div>
          <div className={styles.add_btn_container}>
            <AddCircleOutlinedIcon sx={{ color:"green" }} />
          </div>
          <div className={styles.print_btn_container}><LocalPrintshopIcon className={styles.print_btn} /></div>
        </div>
        <div className={styles.table}>
            <Table stickyHeader>
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
                  <TableCell></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.employee_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                      <TableCell align="center">
                        <Button
                            className={styles.edit_button}
                            // variant="contained"
                            color="primary"
                            onClick={() => handleOpen(index)}
                        >
                          <EditIcon background='none'/>
                        </Button>
                        <Modal open={open[index]} onClose={() => handleClose(index)}>
                            <Box className={styles.modal}>
                                <div className={styles.close_btn} onClick={() => handleClose(index)}><CloseIcon /></div>
                                <EmployeeModal
                                  id={row.employee_id}
                                  last_name={row.last_name}
                                  first_name={row.first_name}
                                  employee_contact={row.employee_contact}
                                  employee_address={row.employee_address}
                                  daily_wage={row.daily_wage}
                                  employee_type={row.employee_type}
                                />
                            </Box>
                        </Modal>
                      </TableCell>
                      <TableCell component="th" scope="row">{row.employee_id}</TableCell>
                      <TableCell align="left">{row.last_name}</TableCell>
                      <TableCell align="left">{row.first_name}</TableCell>
                      <TableCell align="left">{row.employee_contact}</TableCell>
                      <TableCell align="left">{row.employee_address}</TableCell>
                      <TableCell align="left">{row.daily_wage}</TableCell>
                      <TableCell align="left">{row.employee_type}</TableCell>
                      <TableCell align="center"><RemoveCircleRoundedIcon sx={{ color:"red" }}/></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default EmployeeTable