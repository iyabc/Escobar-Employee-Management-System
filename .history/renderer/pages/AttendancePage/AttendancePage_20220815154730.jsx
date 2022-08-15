import React from 'react';
import styles from './AttendancePage.module.scss';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import { Box, Tab, Tabs, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function AttendancePage() {
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
                <div className={styles.header}>
                  {/* <div className={styles.title}>ATTENDANCE</div> */}
                  <div className={styles.search_bar}><TextField id="standard-basic" label="Search Attendance" variant="standard" /></div>  
                </div>
              </div>
              <div className={styles.content_bottom}>
                {/* <AttendanceTable /> */}
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                  </Tabs>
                </Box>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AttendancePage