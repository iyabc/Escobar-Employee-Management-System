import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Attendance from '../../data/attendance.json';
import Employee from '../../data/employee.json'

function DataTable({type}) {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Email</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                {{type}.map((list, index) => (
                  <TableRow key={index}>
                    <TableCell>{list.first_name}</TableCell>
                    <TableCell>{list.email}</TableCell>
                    </TableRow>
                    ))}
                    </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
  )
}

export default DataTable