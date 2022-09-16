import React, { useState, useEffect } from 'react';
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

import Rest from '../../../rest/Rest.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

function createData(employeeId, employeeFirstName, employeeLastName, employeePositionName, employeeTypeName, employeeAddress, employeeContactNumber, dateEmployed, superiorEmployeeName ) {
  return {
    employeeId,
    employeeFirstName,
    employeeLastName,
    employeePositionName,
    employeeTypeName,
    more: [
        employeeAddress,
        employeeContactNumber,
        dateEmployed,
        superiorEmployeeName
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
          {row.employeeId}
        </TableCell>
        <TableCell align="right">{row.employeeFirstName}</TableCell>
        <TableCell align="right">{row.employeeLastName}</TableCell>
        <TableCell align="right">{row.employeePositionName}</TableCell>
        <TableCell align="right">{row.employeeTypeName}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More Information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    {more.map((item) => {
                        console.log(item)
                        // return (
                        //     <TableRow>
                        //         {item.employeeAddress}
                        //     </TableRow>
                        // )
                    })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
    //get active employees data
  const [activeEmployees, setActiveEmployees] = useState([]);
  const rest = new Rest();
  const handleActiveEmployees = (data) => {
    setActiveEmployees(data);
  }
  const getActiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleActiveEmployees)
  }

  const rows = [
    activeEmployees.map((item) => {
        createData(
            item.employeeId, 
            item.employeeFirstName, 
            item.employeeLastName, 
            item.employeePositionName, 
            item.employeeTypeName, 
            item.employeeAddress, 
            item.employeeContactNumber, 
            item.dateEmployed, 
            item.superiorEmployeeName 
        )
    })
  ];

  useEffect(() => {
    getActiveEmployees();
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
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
