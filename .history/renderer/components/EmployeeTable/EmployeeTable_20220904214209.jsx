// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
// import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
// import SearchBar from 'material-ui-search-bar';
// import Employee from '../../data/employeeData.json';
// //
// const columns = [
//   { id: 'employeeId', label: 'ID', minWidth: 100 },
//   { id: 'employeeLastName', label: 'Last Name', minWidth: 120 },
//   { id: 'employeeFirstName', label: 'First Name', minWidth: 160 },
//   {
//     id: 'employeeContact',
//     label: 'Contact',
//     minWidth: 100,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   { id: 'employeeAddress', label: 'Address', minWidth: 160, align: 'right' },
//   {
//     id: 'employeeDailyWage',
//     label: 'Daily',
//     minWidth: 100,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   { id: 'employeeType', label: 'Type', minWidth: 110, align: 'right' },
// ];
// // function createData(employeeId, employeeLastName, employeeFirstName, employeeContact, employeeAddress, employeeDailyWage, employeeType) {
// //   return { employeeId, employeeLastName, check_in, check_out };
// // }

// export default function StickyHeadTable() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   //search
//   const [rows, setRows] = useState(Employee.employeeData);
//   const [searched, setSearched] = useState("");
//   const requestSearch = (searchValue) => {
//     const filteredRows = Employee.employeeData.filter((row) => {
//       return row.employeeLastName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeFirstName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeType.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeAddress.toLowerCase().includes(searchValue.toLowerCase());
//     });
//     setRows(filteredRows);
//   };
//   const cancelSearch = () => {
//     setSearched("");
//     requestSearch(searched);
//   };
  
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <div className={styles.search_bar}>
//           <SearchBar 
//           placeholder="Search Attendance Table"
//           value={searched}
//           onChange={(searchValue) => requestSearch(searchValue)}
//           onCancelSearch={() => cancelSearch()}
//           />
//         </div>
//       </div>
//       <div className={styles.table}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//               <TableCell></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.employeeId}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                     <TableCell align='right'><RemoveCircleRoundedIcon sx={{color:"red", cursor:"pointer"}} /></TableCell>
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </div>
//       <div className={styles.footer}>
//         <div className={styles.print_btn_container}><LocalPrintshopIcon className={styles.print_btn} /></div>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
// import Employee from '../../data/employeeData.json';
import styles from './EmployeeTable.module.scss';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchBar from 'material-ui-search-bar';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Button, Modal } from '@mui/material';
import EditEmployeeModal from '../EditEmployeeModal/EditEmployeeModal';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import MediumButton from '../MediumButton/MediumButton';
import AddEmployeeModal from '../AddEmployeeModal/AddEmployeeModal';
import InactiveEmployeeModal from '../InactiveEmployeeModal/InactiveEmployeeModal';
import Employee from '../../data/employeeData.json';

import Toast from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";
import { DataGrid } from '@mui/x-data-grid';

const INITIAL_URL = "http://localhost:8080/api/v1";

const headCells = [
  { id: 'employeeId', label: 'ID', minWidth: 100 },
  { id: 'employeeFirstName', label: 'First Name', minWidth: 160 },
  { id: 'employeeLastName', label: 'Last Name', minWidth: 120 },
  { id: 'employeeAddress', label: 'Address', minWidth: 160, align: 'right' },
  {
    id: 'employeeContactNumber',
    label: 'Contact',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  { id: 'dateEmployed', label: 'Date Employed', minWidth: 110, align: 'right' },
  { id: 'employeePositionName', label: 'Position', minWidth: 110, align: 'right' },
  { id: 'employeeTypeName', label: 'Type', minWidth: 110, align: 'right' },
  { id: 'superiorEmployeeName', label: 'Supperior', minWidth: 110, align: 'right' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [ activeEmployees, setActiveEmployees] = useState([]);
  const rest = new Rest();  

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
      const newSelected = rows.map((n) => n.employeeId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };
  const handleClick = (event, employeeId) => {
    const selectedIndex = selected.indexOf(employeeId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, employeeId);
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
  const isSelected = (employeeId) => selected.indexOf(employeeId) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - activeEmployees.length) : 0;
  //get employee data
  const handleActiveEmployees = (data) => {
    setActiveEmployees(data);
    // setRows(activeEmployees);
  };
  const getAllActiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleActiveEmployees);
  };
  //  search
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = activeEmployees.filter((row) => {
      return String(row.employeeId).includes(searchValue) || row.employeeLastName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeFirstName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeTypeName.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeAddress.toLowerCase().includes(searchValue.toLowerCase());
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    setRows(activeEmployees);
    // requestSearch(searched);
  };
  //set rows 
  const setShownRows = () => {
    if(rows.length == 0){
      setRows(activeEmployees);
    }
  };
  //edit modal
  // const [openEditModal, setOpenEditModal] = useState(false);
  // const handleOpenEditModal = () => { setOpenEditModal(true); };
  // const handleCloseEditModal = () => { setOpenEditModal(false); };
  //add modal
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => { setOpenAddModal(true); };
  const handleCloseAddModal = () => { setOpenAddModal(false); };
  //inactive modal
  const [openInactiveModal, setOpenInactiveModal] = useState(false);
  const handleOpenInactiveModal = () => { setOpenInactiveModal(true); };
  const handleCloseInactiveModal = () => { setOpenInactiveModal(false); };

  //
  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Employee
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Inactivate Employee/s">
            <IconButton>
              <MediumButton label="Inactivate" />
            </IconButton>
          </Tooltip>
        ): (
          <Tooltip title="">
            <IconButton>
            </IconButton>
          </Tooltip>
        )}
  
        {numSelected == 1 ? (
            <Tooltip title="Edit Employee">
              <IconButton onClick={() => handleClickEdit(selected)}>
                <MediumButton label="Edit" />
              </IconButton>
            </Tooltip>
          ): (
            <Tooltip title="Dashboard">
              <IconButton>
              </IconButton>
            </Tooltip>
          )}
      </Toolbar>
    );
  };
  const handleClickEdit = () => {
    rows.map((item) => {
      if(selected == item.employeeId){
        return (
          <>
            {item.employeeFirstName}
            {item.employeeLastName}
          </>
        )
      }
    })
  }
  

  useEffect(() => {
    getAllActiveEmployees();
    setShownRows();
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <SearchBar 
            placeholder="Search Employee Table"
            value={searched}
            onChange={(searchValue) => requestSearch(searchValue)}
            onCancelSearch={() => cancelSearch()}
          />
        </div>
        <div className={styles.right}>
          <Button onClick={handleOpenAddModal}><MediumButton label="add employee" /></Button>
          <Button onClick={handleOpenInactiveModal}><MediumButton label="View Inactive" /></Button>
        </div>
      </div>
        <EnhancedTableToolbar numSelected={selected.length} />
        <div className={styles.table}>
          <Table
            stickyHeader
            sx={{ minWidth: "fit-content" }}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.employeeId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.employeeId)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.employeeId}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.employeeId}
                      </TableCell>
                      <TableCell align="left">{row.employeeLastName}</TableCell>
                      <TableCell align="left">{row.employeeFirstName}</TableCell>
                      <TableCell align="left">{row.employeeAddress}</TableCell>
                      <TableCell align="left">{row.employeeContactNumber}</TableCell>
                      <TableCell align="left">{row.dateEmployed}</TableCell>
                      <TableCell align="left">{row.employeePositionName}</TableCell>
                      <TableCell align="left">{row.employeeTypeName}</TableCell>
                      <TableCell align="left">{row.superiorEmployeeName}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className={styles.footer}>
          <div className={styles.print_btn_container}>
            <LocalPrintshopIcon className={styles.print_btn} />
          </div>
          <TablePagination
                rowsPerPageOptions={[10, 25]}
                component="div"
                count={activeEmployees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
        </div>
        {/* add,edit, and inactive modals */}
        {/* <Modal open={openEditModal} onClose={handleCloseEditModal}>
          <Box className={styles.modal}>
            <EditEmployeeModal
              id={row.employeeId}
              last_name={row.employeeLastName}
              first_name={row.employeeFirstName}
              employee_contact={row.employeeContact}
              employee_address={row.employeeAddress}
              daily_wage={row.employeeDailyWage}
              employee_type={row.employeeType}
              />
          </Box>
        </Modal>   */}
        <Modal open={openAddModal} onClose={handleCloseAddModal}>
          <Box className={styles.modal}>
            <div className={styles.close_btn} onClick={handleCloseAddModal}><CloseIcon /></div>
            <AddEmployeeModal />
          </Box>
        </Modal>
        <Modal open={openInactiveModal} onClose={handleCloseInactiveModal}>
          <Box className={styles.modal}>
            <div className={styles.close_btn} onClick={handleCloseInactiveModal}><CloseIcon /></div>
            <InactiveEmployeeModal />
          </Box>
        </Modal>
    </div>
  );
}
