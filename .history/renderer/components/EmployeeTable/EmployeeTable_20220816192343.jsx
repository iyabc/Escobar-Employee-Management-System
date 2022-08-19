import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchBar from 'material-ui-search-bar';
import Employee from '../../data/employee.json'

function createData(employee_id, last_name, first_name, contact_num) {
  return {
    employee_id,
    last_name,
    first_name,
    contact_num,
    more: [
      {
        address: 'Davao City',
        daily_wage: '11091700',
        type: 3,
      }
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.more.map((moreRow) => (
                    <TableRow key={moreRow.date}>
                      <TableCell component="th" scope="row">
                        {moreRow.date}
                      </TableCell>
                      <TableCell>{moreRow.customerId}</TableCell>
                      <TableCell align="right">{moreRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(moreRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    employee_id: PropTypes.number.isRequired,
    contact_num: PropTypes.number.isRequired,
    more: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.number.isRequired,
        daily_wage: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
      }),
    ).isRequired,
    last_name: PropTypes.string.isRequired,
    first_name: PropTypes.number.isRequired,
    address: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(100, 'Panes', 'Julienne', 1),
  createData(100, 'Panes', 'Julienne', 2),
  createData(100, 'Panes', 'Julienne', 3),
];

export default function EmployeeTable() {
  return (
    <TableContainer component={Paper}>
        <SearchBar />
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
                {Employee.employee.map((item) => (
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
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
