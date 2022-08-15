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
import AddEmployee from './AddEmployee/AddEmployee';

export default function EmployeeTable() {
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                <div className={styles.title_header}>EMPLOYEE</div>
              </div>
              <div className={styles.content_bottom}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                  <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="VIEW EMPLOYEES" {...a11yProps(0)} />
                    <Tab label="ADD EMPLOYEE" {...a11yProps(1)} />
                    <Tab label="ADD POSITION" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  {/* <AttendanceTable /> */}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <AddEmployee />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <AddEmployee />
                </TabPanel>
              </div>
            </div>
        </div>
    </div>
  );
}
