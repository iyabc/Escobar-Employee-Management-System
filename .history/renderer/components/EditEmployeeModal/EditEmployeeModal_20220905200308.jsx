import { FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './EditEmployeeModal.module.scss';

import Rest from "../../rest/Rest.tsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_URL = "http://localhost:8080/api/v1";
const isError = false;

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function onlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

function onlyLettersNumbers(str) {
  return /^[a-zA-Z0-9\s]+$/.test(str);
}

function checkSuperiorFormat(str) {
  return /^[A-za-z]+, [A-za-z]+$/.test(str);
}

function EditEmployeeModal({id, last_name, first_name, employee_contact, employee_address, employee_type, employee_position, superior_employee, date_employed}) {
  date_employed = formatDate(date_employed);
  //
  const rest = new Rest();
  const [positions, setPositions] = useState([]);
  const [types, setTypes] = useState([]);
  //get positions data
  const handlePositions = (data) => {
    setPositions(data);
  };
  const getPositions = () => {
    rest.get(`${INITIAL_URL}/employee-position`, handlePositions);
  };
  const [position, setPosition] = useState(employee_position);
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };
  //get types data
  const handleTypes = (data) => {
    setTypes(data);
  }
  const getTypes = () => {
    rest.get(`${INITIAL_URL}/employee-type`, handleTypes);
  }
  const [type, setType] = useState(employee_type);
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  //check if required superior
  function checkIfSuperior(emp_type) {
    if(emp_type != "Owner"){
      return (
        <TextField name="superior_employee" label="Superior Name" variant="standard" defaultValue={superior_employee} onChange={onChangeInput} helperText="Last Name, First Name" fullWidth required />
      )
    }
  }
  //handle input
  const [values, setValues] = useState({
    last_name:last_name,
    first_name:first_name,
    employee_contact:employee_contact,
    employee_address:employee_address,
    employee_type:employee_type,
    employee_position:employee_position,
    date_employed:date_employed,
    superior_employee:superior_employee
  });
  const [error_last_name, set_error_last_name] = useState(false);
  const [error_first_name, set_error_first_name] = useState(false);
  const errorMessages = [
    {
      last_name:"Must contain letters only.",
      first_name:"Must contain letters only.",
      employee_contact:"Must contain numbers only.",
      employee_address:"Must contain letters and numbers only.",
      superior_employee:"Must contain letters only."
    }
  ]
  const textFields = [
    {
      id:1,
      name:"last_name",
      type:"text",
      label:"Last Name",
      errorMessage:"Should not contain numbers and special characters."
    },
    {
      id:2,
      name:"first_name",
      type:"text",
      label:"First Name",
      errorMessage:"Should not contain numbers and special characters.",
    },
    {
      id:3,
      name:"employee_address",
      type:"text",
      label:"Address",
      errorMessage:"Should not contain special characters.",
    },
    {
      id:4,
      name:"employee_contact",
      type:"text",
      label:"Contact Number",
      errorMessage:"Should not contain letters and special characters.",
    },
    {
      id:5,
      name:"date_employed",
      type:"date",
      label:"Date Employed",
      defaultValue:date_employed
    }
  ];
  const onChangeInput = (e) => {
    if(e.target.name == "last_name") {  
      if(!(onlyLetters(e.target.value))){
        toast(e.target.value, "must be all numbers.")
      }
    }
    if(e.target.name == "first_name") {  
      if(!(onlyLetters(e.target.value))){
        console.log("first name = all letters")
      }
    }
    if(e.target.name == "employee_address") {  
      if(!(onlyLettersNumbers(e.target.value))){
        console.log("address = all letters numbers")
      }
    }
    if(e.target.name == "employee_contact") {  
      if(!(onlyNumbers(e.target.value))){
        console.log("contact = all numbers")
      }
    }
    if(e.target.name == "superior_employee") {  
      if(!(checkSuperiorFormat(e.target.value))){
        console.log("superior employee = correct format")
      }
    }
    setValues({...values, [e.target.name]: e.target.value});
  }
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    getPositions();
    getTypes();
  })

  return (
    <div className={styles.container}>
      <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
      <form onSubmit={handleSubmit} className={styles.form_box}>
          {textFields.map((item) => {
            if(item.id < 4){
              return (
                <div className={styles.row}>
                  <div className={styles.textfield}>
                    <TextField 
                      key={item.id}
                      {...item}  
                      value={values[item.name]} 
                      variant="standard" 
                      onChange={onChangeInput} 
                      fullWidth 
                      required
                    />
                  </div>
                </div>
              )
            }
          })}
          <div className={styles.row}>
          {textFields.map((item) => {
            if(item.id >= 4){
              return (
                <div className={styles.textfield}>
                  <TextField 
                    key={item.id}
                    {...item}  
                    value={values[item.name]} 
                    variant="standard" 
                    onChange={onChangeInput} 
                    fullWidth 
                    required
                  />
                </div>
              )
            }
          })}
          </div>
        <div className={styles.row}>
          {checkIfSuperior(employee_type)}
          <FormControl fullWidth>
                <InputLabel>Position</InputLabel>
                <Select
                  name='position'
                  value={position}
                  label="Position"
                  onChange={handlePositionChange}
                  required
                >
                  {positions.map((item, index) => {
                    return ( 
                      <MenuItem value={item} key={index} >{item}</MenuItem>
                    )
                  })}
                </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Types</InputLabel>
            <Select
              name='type'
              value={type}
              label="Type"
              onChange={handleTypeChange}
              required
            >
              {types.map((item, index) => {
                return ( 
                  <MenuItem value={item} key={index} >{item}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </div>
        <div className={styles.row}>
          <BigButton label="SUBMIT" link="" type="submit" />
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default EditEmployeeModal