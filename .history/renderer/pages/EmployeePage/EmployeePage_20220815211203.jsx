import { React, useState} from 'react';
import styles from './EmployeePage.module.scss';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import { Box, Tab, Tabs, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import AddAttendance from '../AttendancePage/AddAttendance/AddAttendance'
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
