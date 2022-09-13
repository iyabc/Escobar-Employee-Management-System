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
  const [activeTypes, setActiveTypes] = useState([]);
  const handleActiveTypes = (data) => {
    setActiveTypes(data);
  }
  const getActiveTypes = () => {
    rest.get(`${INITIAL_URL}/employee-type`, handleActiveTypes);
  }
  const [newType, setNewType] = useState(selectedEmployee.employeeTypeName);
  const handleTypeSelectChange = (e) => {
    setNewType(e.value);
    setValues({...values, [e.label]:e.value})
  }

  const onChange = (e) => {
    if(e.target == undefined){
      setValues({...values, [e.key]:e.value})
    }else{
      setValues({...values, [e.target.label]:e.target.value})
    }
  }
  //input values
  const [values, setValues] = useState(
    new Employee(
      selectedEmployee.employeeId, 
      selectedEmployee.employeeFirstName,
      selectedEmployee.employeeLastName,
      selectedEmployee.employeeAddress,
      selectedEmployee.employeeContactNumber,
      selectedEmployee.dateEmployed,
      selectedEmployee.employeePositionName,
      selectedEmployee.employeeTypeName,
      selectedEmployee.superiorEmployeeName,
      selectedEmployee.isActive
    )
  )
  //submit
  const handleSubmit = () => {
    // console.log(newPosition, newType);
    console.log(values)
  }

  useEffect(() => {
    getActivePositions();
    getActiveTypes();
  }, [])

  useEffect(() => {
    setValues({...values});
  }, [values])

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
          <TextField name="superiorEmployeeName" label="Superior" defaultValue={selectedEmployee.superiorEmployeeName} sx={{ flex: 1 }} />
            <div className={styles.group_textfields_select}>
              <div className={styles.group_textfields_select_label}>Position</div>
              <Select
                placeholder={selectedEmployee.employeePositionName}
                defaultValue={selectedEmployee.employeePositionName}
                options={activePositions.map((item) => {
                  return {
                    key: 'employeePositionName',
                    value: item,
                    label: item
                  }
                })}
                // onChange={handlePositionSelectChange}
                onChange={onChange}
              />
            </div>
            <div className={styles.group_textfields_select}>
              <div className={styles.group_textfields_select_label}>Type</div>
              <Select
                placeholder={selectedEmployee.employeeTypeName}
                defaultValue={selectedEmployee.employeeTypeName}
                options={activeTypes.map((item) => {
                  return {
                    key: 'employeeTypeName',
                    value: item,
                    label: item
                  }
                })}
                // onChange={handleTypeSelectChange}
                onChange={onChange}
              />
            </div>
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
