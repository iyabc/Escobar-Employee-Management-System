import React from 'react';
import Attendance from '../../data/attendance.json';
import Employee from '../../data/employee.json'

function DataTable() {
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
                      {PostData.map((list, index) => (
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