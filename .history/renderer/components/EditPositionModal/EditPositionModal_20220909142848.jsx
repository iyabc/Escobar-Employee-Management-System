import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import MediumButton from '../MediumButton/MediumButton';
import styles from './EditPositionModal.module.scss';

import Rest from "../../rest/Rest.tsx";
import { ToastContainer, toast } from 'react-toastify';
import Position from '../../model/Position.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";


export default function EditPositionModal({ employeePositionId, employeePositionName, positionActiveData }) {

  const [newEmployeeValues, setNewEmployeeValues] = useState({
    employeePositionId: employeePositionId,
    employeePositionName: ""
  })

  const handleChange = (e) => {
    setNewEmployeeValues({...newEmployeeValues, [e.target.name]:e.target.value});
  }

  const checkIfExists = () => {
    console.log("Checking existance")
    positionActiveData.map((item) => {
      if((item.employeePositionName).toLowerCase() == (newEmployeeValues.employeePositionName).toLowerCase()){
        toast.error('Position name already exists @ ID `${item.employeePositionId}`', {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    })
  }
  
  const handleSubmit = () => {
    checkIfExists();
    // console.log(newEmployeeValues)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
            Editing employee position: <span style={{ fontWeight: 700, textTransform: "uppercase"}}>{employeePositionName}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
              Position ID: {employeePositionId}
            </div>
            <div className={styles.textfield}>
              <TextField onChange={handleChange} name="employeePositionName" label="Employee Position Name" variant="standard" fullWidth />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            <MediumButton label="SUBMIT" />
          </button>
        </div>
      </div>
      <ToastContainer 
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </div>
  )
}
