import { Select, FormControl, InputLabel, MenuItem, Modal, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddAttendanceModal from '../AddAttendanceModal/AddAttendanceModal';
import BigButton from '../BigButton/BigButton';
import styles from './AttendanceForm.module.scss';

import Attendance from "../../model/Attendance.tsx";
import { ToastContainer, toast } from 'react-toastify';
import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

//NO ATTENDANCE ID YET

function AttendanceForm({ datetime }) {
  const rest = new Rest();
  //select
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const handleChange = (e) => {
    setSelectedEmployee(e.target.value);
    setValues({ ...values, [e.target.name] : e.target.value })
  };
  //get input values
  const [values, setValues] = useState({
    employeeFullName: selectedEmployee,
    attendanceTime: datetime,
    attendanceType: ""
  })
  //confirm add attendance modal
  const [openAddAttendanceModal, setOpenAddAttendanceModal] = useState(false);
  const handleOpenAddAttendanceModal = () => { setOpenAddAttendanceModal(true) };
  const handleCloseAddAttendanceModal = () => { setOpenAddAttendanceModal(false) };
  //get employee data
  const [employeeData, setEmployeeData] = useState([]);
  const handleEmployeeData = (data) => {
    setEmployeeData(data)
  }
  const getEmployeeData = () => {
    rest.get(`${INITIAL_URL}/employee/active`, handleEmployeeData);
  }
  //post check in
  const postCheckIn = () => {
    if(selectedEmployee == ""){
      // toast.success('Success Notification !', {
      //   position: toast.absolute
      // });
      alert("aaaaaaaaaaa");
    }else {
      setValues({
        ...values,
        attendanceTime: datetime,
        attendanceType: "CHECK_IN"
      });
      handleOpenAddAttendanceModal();
    }
  }
  //post check out
  const postCheckOut = () => {
    setValues({
      ...values,
      attendanceTime: datetime,
      attendanceType: "CHECK_OUT"
    });
    handleOpenAddAttendanceModal();
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
            name="employeeFullName"
            value={selectedEmployee}
            label="Select Employee"
            onChange={handleChange}
            required
          >
            {employeeData.map((item) => {
              const employeeFullName = item.employeeLastName.concat(", ").concat(item.employeeFirstName);
              return (
                <MenuItem value={employeeFullName}> {item.employeeLastName}, {item.employeeFirstName}</MenuItem>
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
            <AddAttendanceModal values={values} />
          </Box>
        </Modal>
      <ToastContainer />
    </div>
  )
}

export default AttendanceForm