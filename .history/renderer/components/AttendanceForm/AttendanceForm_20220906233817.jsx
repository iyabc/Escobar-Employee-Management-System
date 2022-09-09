import { Select, FormControl, InputLabel, MenuItem, Modal, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddAttendanceModal from '../AddAttendanceModal/AddAttendanceModal';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

import Attendance from "../../model/Attendance.tsx";
import Toast from "../Toast/Toast.jsx";
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

//NO ATTENDANCE ID YET

function AttendanceForm({ datetime }) {
  const rest = new Rest();
  //confirm add attendance modal
  const [openAddAttendanceModal, setOpenAddAttendanceModal] = useState(false);
  const handleOpenAddAttendanceModal = () => { setOpenAddAttendanceModal(true) };
  const handleCloseAddAttendanceModal = () => { setOpenAddAttendanceModal(false) };
  //select
  const [selectData, setSelectData] = useState('');
  const handleChange = (event) => {
    setSelectData(event.target.value);
  };
  //get employee data
  const [employeeData, setEmployeeData] = useState([]);
  const handleEmployeeData = (data) => {
    setEmployeeData(data)
  }
  const getEmployeeData = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleEmployeeData);
  }
  //post check in
  const postCheckIn = (e) => {
    e.preventDefault();
    handleOpenAddAttendanceModal()''
  }
  //post check out
  const postCheckOut = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    getEmployeeData();
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>ATTENDANCE</div>
      <div className={styles.form}>
        <div className={styles.row}>
        <FormControl fullWidth>
          <InputLabel>Select Employee</InputLabel>
          <Select
            className={styles.select}
            value={selectData}
            label="Select Employee"
            onChange={handleChange}
            required
          >
            {employeeData.map((item) => {
              return (
                <MenuItem value={item.employeeId}> {item.employeeLastName}, {item.employeeFirstName}</MenuItem>
              )
            })}
            </Select>
        </FormControl>
        </div>
       <div className={styles.row}>
        <div className={styles.btn_container} onClick={postCheckIn}><BigButton label="IN" link=""/></div>
        <div className={styles.btn_container} onClick={postCheckOut}><BigButton label="OUT" link=""/></div>
       </div>
      </div>

      {/* confirm add attendance modal */}
      <Modal open={openAddAttendanceModal} onClose={handleCloseAddAttendanceModal}>
          <Box className={styles.modal}>
            <AddAttendanceModal />
          </Box>
        </Modal>
    </div>
  )
}

export default AttendanceForm