import TextField from '@mui/material/TextField';
import React from 'react';
import MediumButton from '../MediumButton/MediumButton';
import styles from './EditPositionModal.module.scss';

import Rest from "../../rest/Rest.tsx";
import { ToastContainer, toast } from 'react-toastify';
import Position from '../../model/Position.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";


export default function EditPositionModal({ employeePositionId, employeePositionName, positionActiveData }) {

  const checkIfExists = () => {
    positionActiveData.map((item) => {
      if(item.employeePositionName == employeePositionName){
        toast.alert("Position name already exists.");
      }else {
        toast.success("Position name added.");
      }
    })
  }
  
  const handleSubmit = () => {
    checkIfExists();
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
              <TextField name="employeePositionName" value={employeePositionName} label="Employee Position Name" variant="standard" fullWidth />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            <MediumButton label="SUBMIT" />
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
