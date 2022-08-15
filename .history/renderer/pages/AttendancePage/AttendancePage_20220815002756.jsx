import React from 'react';
import styles from './AttendancePage.module.scss';
import Header from '../../components/Header/Header';
import TitleBar from '../../components/TitleBar/TitleBar';
import DataTable from '../../components/DataTable/DataTable';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function AttendancePage() {
  return (
    <div className={styles.section}>
        <TitleBar />
        <Header />
        <div className={styles.outer_container}>
            <div className={styles.inner_container}>
              <div className={styles.content_top}>
                <div className={styles.back_btn}>
                  <ArrowBackIosNewIcon href='../HomePage/HomePage'/>
                </div>
              </div>
              <div className={styles.content_top}>
              <DataTable />
              </div>
            </div>
        </div>
    </div>
  )
}

export default AttendancePage