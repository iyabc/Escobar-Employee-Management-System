import React from 'react';
import styles from './AttendancePage.module.scss';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';
import DataTable from '../../components/DataTable/DataTable';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import { TextField } from '@mui/material';
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
                    <TextField id="standard-basic" label="Search" variant="standard" />
                </div>
              </div>
              <div className={styles.content_bottom}>
              <DataTable />
              </div>
            </div>
        </div>
    </div>
  )
}

export default AttendancePage