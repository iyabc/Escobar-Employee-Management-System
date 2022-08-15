import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Employee from '../../data/employee.json';

export default function EmployeeTable() {
  return (
    <div className={styles.section}>
        <TitleBar />
        <Header />
        <div className={styles.outer_container}>
            <div className={styles.inner_container}>
              <div className={styles.content_top}>
                <div className={styles.back_btn}>
                  <Link href='../../HomePage/HomePage'>
                    <ArrowBackIosNewIcon />
                  </Link>
                </div>
                <div className={styles.title_header}>ATTENDANCE</div>
              </div>
              <div className={styles.content_bottom}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                  <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="ADD" {...a11yProps(0)} />
                    <Tab label="VIEW" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <AddAttendance />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <AttendanceTable />
                </TabPanel>
              </div>
            </div>
        </div>
    </div>
  );
}
