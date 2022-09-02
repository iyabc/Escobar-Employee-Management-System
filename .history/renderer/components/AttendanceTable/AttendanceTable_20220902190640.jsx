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
// import styles from './AttendanceTable.module.scss';

// const columns = [
//   { id: 'attendance_id', label: 'Attendance ID', minWidth: 170 },
//   { id: 'employee_id', label: 'Employee ID', minWidth: 100 },
//   {
//     id: 'check_in',
//     label: 'Check-in',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'check_out',
//     label: 'Check-out',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
// ];

// function createData(attendance_id, employee_id, check_in, check_out) {
//   return { attendance_id, employee_id, check_in, check_out };
// }

// const originalRows = [
//   createData(123, 'E1', 1324171354, 3287263),
//   createData(2312, 'E2', 1403500365, 9596961),
//   createData(3131, 'E3', 60483973, 301340),
//   createData(7657, 'E4', 327167434, 9833520),
//   createData(3213, 'E1', 37602103, 9984670),
//   createData(5435, 'E3', 25475400, 76 92024),
//   createData(6546, 'E4', 83019200, 357578),
//   createData(5435, 'E2', 4857000, 70273),
//   createData(7567, 'E1', 126577691, 1972550),
//   createData(8768, 'E3', 126317000, 377973),
//   createData(53453, 'E4', 67022000, 640679),
//   createData(32131, 'E3', 67545757, 242495),
//   createData(43242, 'E4', 146793744, 17098246),
//   createData(6546, 'E1', 200962417, 923768),
//   createData(52453, 'E3', 210147125, 8515767),
// ];

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
//   const [rows, setRows] = useState(originalRows);
//   const [searched, setSearched] = useState("");
//   const requestSearch = (searchValue) => {
//     const filteredRows = originalRows.filter((row) => {
//       return String(row.attendance_id).includes(searchValue) || row.employee_id.toLowerCase().includes(searchValue.toLowerCase()) ;
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
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
import Box from '@mui/material/Box';
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
import styles from './AttendanceTable.module.scss';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';

// function createData(attendance_id, employee_id, check_in, check_out) {
//   return { attendance_id, employee_id, check_in, check_out };
// }

// const originalRows = [
//   createData(123, 'E1', 1324171354, 3287263),
//   createData(2312, 'E2', 1403500365, 9596961),
//   createData(3131, 'E3', 60483973, 301340),
//   createData(7657, 'E4', 327167434, 9833520),
//   createData(3213, 'E1', 37602103, 9984670),
//   createData(5435, 'E3', 25475400, 7692024),
//   createData(6546, 'E4', 83019200, 357578),
//   createData(5435, 'E2', 4857000, 70273),
//   createData(7567, 'E1', 126577691, 1972550),
//   createData(8768, 'E3', 126317000, 377973),
//   createData(53453, 'E4', 67022000, 640679),
//   createData(32131, 'E3', 67545757, 242495),
//   createData(43242, 'E4', 146793744, 17098246),
//   createData(6546, 'E1', 200962417, 923768),
//   createData(52453, 'E3', 210147125, 8515767),
// ];


const headCells = [
  { id: 'employee_id', label: 'Attendance ID', minWidth: 100 },
  { id: 'employee_id', label: 'Employee ID', minWidth: 120 },
  {
    id: 'check_in',
    label: 'Check-in',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'check_out',
    label: 'Check-out',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            {/* <FilterListIcon /> */}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  //get attendance
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
        const getData = async () => {
            const data = await axios
            .get("https://my-json-server.typicode.com/iyabc/mockend/ems");
            setFetchedData(data);
        };
        getData();
    }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.attendance_id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fetchedData.data.length) : 0;
  //  search
  const [rows, setRows] = useState(fetchedData.data);
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = fetchedData.data.filter((row) => {
      return String(row.attendance_id).includes(searchValue) || String(row.employee_id).includes(searchValue);
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <div>
      {fetchedData.data && fetchedData.data.map((item) => {
        return (
          <div>
            {item.attendance_id}
          </div>
        )
      })}
    </div>
  )

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
  //     <EnhancedTableToolbar numSelected={selected.length} />
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
  //             // rowCount={fetchedData.data.length}
  //           />
  //           <TableBody>
  //             {/* if you don't need to support IE11, you can replace the `stableSort` call with:
  //                rows.slice().sort(getComparator(order, orderBy)) */}
  //             {stableSort(fetchedData.data, getComparator(order, orderBy))
  //               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  //               .map((row, index) => {
  //                 const isItemSelected = isSelected(row.attendance_id);
  //                 const labelId = `enhanced-table-checkbox-${index}`;

  //                 return (
  //                   <TableRow
  //                     hover
  //                     onClick={(event) => handleClick(event, row.attendance_id)}
  //                     role="checkbox"
  //                     aria-checked={isItemSelected}
  //                     tabIndex={-1}
  //                     key={row.attendance_id}
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
  //                       {row.attendance_id}
  //                     </TableCell>
  //                     <TableCell center="right">{row.employee_id}</TableCell>
  //                     <TableCell left="right">{row.check_in}</TableCell>
  //                     <TableCell left="right">{row.check_out}</TableCell>
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
  //           count={rows.length}
  //           rowsPerPage={rowsPerPage}
  //           page={page}
  //           onPageChange={handleChangePage}
  //           onRowsPerPageChange={handleChangeRowsPerPage}
  //         />
  //       </div>
  //   </div>
  // );
}
