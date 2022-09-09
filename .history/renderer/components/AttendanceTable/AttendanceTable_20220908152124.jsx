import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { DataGrid } from '@mui/x-data-grid';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import styles from './AttendanceTable.module.scss';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchBar from 'material-ui-search-bar';
import shortid from 'shortid';

import toast, { ToastContainer } from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import BigButton from '../BigButton/BigButton';
import { Button, Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

const headCells = [
  { id: 'attendance_id', label: 'Attendance ID', minWidth: 100 },
  { id: 'employee_name', label: 'Employee Name', minWidth: 120 },
  {
    id: 'time',
    label: 'Time',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Type',
    label: 'Type',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];

export default function AttendanceTable() {
  const rest = new Rest();
  //get attendance
  const [fetchedData, setFetchedData] = useState([]);
  const handleAttendanceData = (data) => {
    setFetchedData(data);
  }
  const getAttendanceData = () => {
    rest.get(`${INITIAL_URL}/attendance`, handleAttendanceData)
  }
  //
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.employeeAttendanceJoinId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, attendance_id) => {
    const selectedIndex = selected.indexOf(attendance_id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, attendance_id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (attendance_id) => selected.indexOf(attendance_id) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fetchedData.length) : 0;
  //  search
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = fetchedData.filter((row) => {
      return String(row.employeeAttendanceJoinId).includes(searchValue) || row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) ;
      });
      setRows(filteredRows);
    };
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
  }
  const getSelectedRow = () => {
    const arrSelected = [];
    for(let i=0; i< selected.length; i++){
      rows.map((row) => {
        if(row.employeeAttendanceJoinId == selected[i]) {
          arrSelected.push(
            {
              employeeAttendanceJoinId: row.employeeAttendanceJoinId,
              employeeName: row.employeeName,
              attendanceTime: row.attendanceTime,
              attendanceType: row.attendanceType
            }
          );
        }
      })
    }

    // for(let i=0; i< arrSelected.length; i++){
    //   return(
    //     <div>
    //       {arrSelected[i]}
    //     </div>
    //   )
    // }

    arrSelected.map((item) => {
    })

    // return (
    //   <>
    //   {JSON.stringify(arrSelected)}
    //   </>
    // )
    
  }
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
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
  });

  const style = {
    position: 'absolute',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
  };

  // return (
  //   <div className={styles.container}>
  //     <div className={styles.header}>
  //       <SearchBar 
  //         placeholder="Search Attendance Table"
  //         value={searched}
  //         onChange={(searchValue) => requestSearch(searchValue)}
  //         onCancelSearch={() => cancelSearch()}
  //       />
  //     </div>
  //     <div className={styles.toolbar}>
  //       <EnhancedTableToolbar numSelected={selected.length} />
  //       <div className={styles.buttons_container}>
  //         {showButtons()}
  //       </div>
  //     </div>
  //       <div className={styles.table}>
  //         <Table
  //           stickyHeader
  //           sx={{ minWidth: 750 }}
  //           aria-labelledby="tableTitle"
  //         >
  //           <EnhancedTableHead
  //             numSelected={selected.length}
  //             order={order}
  //             orderBy={orderBy}
  //             onSelectAllClick={handleSelectAllClick}
  //             onRequestSort={handleRequestSort}
  //             rowCount={rows.length}
  //           />
  //           <TableBody>
  //             {stableSort(rows, getComparator(order, orderBy))
  //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //               .map((row, index) => {
  //                 const isItemSelected = isSelected(row.employeeAttendanceJoinId);
  //                 const labelId = `enhanced-table-checkbox-${index}`;

  //                 return (
  //                   <TableRow
  //                     hover
  //                     onClick={(event) => handleClick(event, row.employeeAttendanceJoinId)}
  //                     role="checkbox"
  //                     aria-checked={isItemSelected}
  //                     tabIndex={-1}
  //                     key={row.employeeAttendanceJoinId}
  //                     selected={isItemSelected}
  //                   >
  //                     <TableCell padding="checkbox">
  //                       <Checkbox
  //                         color="primary"
  //                         checked={isItemSelected}
  //                         inputProps={{
  //                           'aria-labelledby': labelId,
  //                         }}
  //                       />
  //                     </TableCell>
  //                     <TableCell
  //                       component="th"
  //                       id={labelId}
  //                       scope="row"
  //                       padding="none"
  //                     >
  //                       {row.employeeAttendanceJoinId}
  //                     </TableCell>
  //                     <TableCell center="left">{row.employeeName}</TableCell>
  //                     <TableCell left="left">{row.attendanceTime}</TableCell>
  //                     <TableCell left="left">{row.attendanceType}</TableCell>
  //                   </TableRow>
  //                 );
  //               })}
  //             {emptyRows > 0 && (
  //               <TableRow>
  //                 <TableCell colSpan={6} />
  //               </TableRow>
  //             )}
  //           </TableBody>
  //         </Table>
  //       </div>
  //       <div className={styles.footer}>
  //         <div className={styles.print_btn_container}><LocalPrintshopIcon className={styles.print_btn} /></div>
  //         <TablePagination
  //           rowsPerPageOptions={[10, 25]}
  //           component="div"
  //           count={fetchedData.length}
  //           rowsPerPage={rowsPerPage}
  //           page={page}
  //           onPageChange={handleChangePage}
  //           onRowsPerPageChange={handleChangeRowsPerPage}
  //         />
  //       </div>

  //     <Modal open={openDeleteModal} onClose={handleCloseDeleteModal}>
  //       <Box sx={style}>
  //         <Typography id="modal-modal-title" variant="h6" component="h2">
  //           Confirm Delete
  //         </Typography>
  //         <div style={{ overflowY:"scroll" , height: "250px", margin: "1rem 0"}}>
  //               {arrDeleted.map((item) => {
  //                 return (
  //                   <div key={shortid.generate()}>
  //                     {item.employeeName}
  //                     {item.attendanceTime}
  //                     {item.attendanceType}
  //                   </div>
  //                 )
  //               })}
  //         </div>
  //         <Button>
  //           <MediumButton label="Delete" />
  //         </Button>
  //       </Box>
  //     </Modal>
  //   </div>
  // );

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
                    <LocalPrintshopIcon />
                </div>
            </div>
            <div className={styles.right}>
              {showButtons()}
            </div>
        </div>
        <div className={styles.table}>
            <DataGrid
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
