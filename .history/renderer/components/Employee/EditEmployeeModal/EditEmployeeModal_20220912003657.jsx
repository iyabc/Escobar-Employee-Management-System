import React, { useState, useEffect } from 'react';
import styles from './EditEmployeeModal.module.scss';
import Select from 'react-select';

import Employee from '../../../model/Employee.tsx';
import Rest from '../../../rest/Rest.tsx';
import { FormControl, InputLabel, TextField, MenuItem } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

function onlyLetters(data){
  return (/^[a-zA-Z\s]*$/).test(data);
}

function onlyLettersNumbers(data){
  return (/^[a-zA-Z0-9\s]*$/).test(data);
}

function validNumber(data){
  return (/^0\d{11}/).test(data);
}

export default function EditEmployeeModal({ editSuccessAction, employeeData }) {
  const rest = new Rest();
  //selected employee
  const selectedEmployee = employeeData[0];
  //get active positions data
  const [activePositions, setActivePositions] = useState([]);
  const handleActivePositions = (data) => {
    setActivePositions(data);
  }
  const getActivePositions = () => {
    rest.get(`${INITIAL_URL}/employee-position`, handleActivePositions);
  }
  //get active types data
  const [activeTypes, setActiveTypes] = useState([]);
  const handleActiveTypes = (data) => {
    setActiveTypes(data);
  }
  const getActiveTypes = () => {
    rest.get(`${INITIAL_URL}/employee-type`, handleActiveTypes);
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
  //onChange for all inputs
  const onChange = (e) => {
    if(e.target == undefined){
      setValues({...values, [e.key]:e.value})
    }else{
      if(e.target.name == 'employeeFirstName' || e.target.name == 'employeeLastName' || e.target.name == 'superiorEmployeeName'){
        if(onlyLetters(e.target.value)){
          console.log("yes")
        }else{
          console.log('no')
        }
      }
      if(e.target.name == 'employeeAddress' ){
        if(onlyLettersNumbers(e.target.value)){
          console.log("yes")
        }else{
          console.log('no')
        }
      }
      if(e.target.name == 'employeeContactNumber'){
        if(validNumber(e.target.value)){
          console.log("yes")
        }else{
          console.log('no')
        }
      }
      setValues({...values, [e.target.name]:e.target.value})
    }
  }
  //superior field visible
  const showSuperiorTextfield = () => {
    if(values.employeeTypeName != 'Owner'){
      return (
        <TextField name="superiorEmployeeName" label="Superior" defaultValue={selectedEmployee.superiorEmployeeName} sx={{ flex: 1 }} />
      )
    }
  }
  //submit
  const handleSubmit = () => {
    console.log(values)
  }

  useEffect(() => {
    getActivePositions();
    getActiveTypes();
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
            <TextField onChange={onChange} name="employeeLastName" label="Last" defaultValue={selectedEmployee.employeeLastName} fullWidth />
            <TextField onChange={onChange} name="employeeFirstName" label="First" defaultValue={selectedEmployee.employeeFirstName} fullWidth />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.group_label}>
            Personal Details
          </div>
          <div className={styles.group_textfields}>
            <TextField onChange={onChange} name="employeeAddress" label="Address" defaultValue={selectedEmployee.employeeAddress} fullWidth />
            <TextField onChange={onChange} name="employeeContactNumber" label="Contact Number" defaultValue={selectedEmployee.employeeContactNumber} fullWidth />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.group_label}>
            Work Details
          </div>
          <div className={styles.group_textfields}>
            {showSuperiorTextfield()}
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
