import React, { useState, useEffect } from 'react';
import styles from './EditEmployeeModal.module.scss';
import Select from 'react-select';

import Employee from '../../../model/Employee.tsx';
import Rest from '../../../rest/Rest.tsx';
import { FormControl, InputLabel, TextField, MenuItem } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function EditEmployeeModal({ editSuccessAction, employeeData }) {
  const rest = new Rest();
  const employeeFirstName = '';
  const employeeLastName = '';
  const employeeAddress = '';
  const employeeContactNumber = '';
  const superiorEmployeeName = '';

  //selected employee
  const [selectedEmployee, setSelectedValues] = useState(employeeData[0]);
  //position
  const [activePositions, setActivePositions] = useState([]);
  const handleActivePositions = (data) => {
    setActivePositions(data);
  }
  const getActivePositions = () => {
    rest.get(`${INITIAL_URL}/employee-position`, handleActivePositions);
  }
  const [newPosition, setNewPosition] = useState(selectedEmployee.employeePositionName);
  const handlePositionSelectChange = (e) => {
    setNewPosition(e.value);
  }
  //type
  const [activeTypees, setActiveTypees] = useState([]);
  const handleActiveTypees = (data) => {
    setActiveTypees(data);
  }
  const getActiveTypees = () => {
    rest.get(`${INITIAL_URL}/employee-type`, handleActiveTypees);
  }
  const [newType, setNewType] = useState(selectedEmployee.employeeTypeName);
  const handleTypeSelectChange = (e) => {
    setNewPosition(e.value);
  }
  //input values
  const [values, setValues] = useState(
    new Employee(
      selectedEmployee.employeeId, 
      employeeFirstName,
      employeeLastName,
      employeeAddress,
      employeeContactNumber,
      selectedEmployee.dateEmployed,
      newPosition,
      newType,
      superiorEmployeeName,
      selectedEmployee.isActive
    )
  )
  //submit
  const handleSubmit = () => {
    console.log(values);
  }

  useEffect(() => {
    getActivePositions();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Edit Employee {selectedEmployee.employeeId}
      </div>
      <div className={styles.content}>
        <div className={styles.group}>
          <div className={styles.group_label}>
            Name
          </div>
          <div className={styles.group_textfields}>
            <TextField name="employeeFirstName" label="Last" defaultValue={selectedEmployee.employeeLastName} fullWidth />
            <TextField name="employeeFirstName" label="First" defaultValue={selectedEmployee.employeeFirstName} fullWidth />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.group_label}>
            Personal Details
          </div>
          <div className={styles.group_textfields}>
            <TextField name="employeeAddress" label="Address" defaultValue={selectedEmployee.employeeAddress} fullWidth />
            <TextField name="employeeContactNumber" label="Contact Number" defaultValue={selectedEmployee.employeeContactNumber} fullWidth />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.group_label}>
            Work Details
          </div>
          <div className={styles.group_textfields}>
            <Select
              fullWidth
              options={activePositions.map((item) => {
                return {
                  value: item,
                  label: item
                }
              })}
              defaultValue={selectedEmployee.employeePositionName}
              onChange={handlePositionSelectChange}
            />
            <Select
              options={activePositions.map((item) => {
                return {
                  value: item,
                  label: item
                }
              })}
              defaultValue={selectedEmployee.employeePositionName}
              onChange={handlePositionSelectChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <button onClick={handleSubmit}>
          <MediumButton label="Submit" />
        </button>
      </div>
    </div>
  )
}
