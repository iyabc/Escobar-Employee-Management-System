import { FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './EditEmployeeModal.module.scss';

import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

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
        <TextField name="superior_employee" label="Superior Name" variant="standard" defaultValue={superior_employee} onChange={onChangeInput} fullWidth required />
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
  const [errorlast_name, seterrorlast_name] = useState(false);
  const [errorfirst_name, seterrorfirst_name] = useState(false);
  const [erroremployee_address, seterroremployee_address] = useState(false);
  const [erroremployee_contact, seteerroremployee_contact] = useState(false);
  const [errorsuperior_employee, seterrorsuperior_employee] = useState(false);
  const textFields = [
    {
      id:1,
      name:"last_name",
      type:"text",
      label:"Last Name",
      errorMessage:"Should not contain numbers and special characters.",
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
  ]
  const onChangeInput = (e) => {
    // if(e.target.name == "last_name") {  
    //   if((/^[a-zA-Z]*/.test(e.target.value))){
    //     seterrorlast_name(false);
    //     console.log("all letters");
    //   }else {
    //     seterrorlast_name(true);
    //     console.log("not all letters");
    //   }
    //   console.log(/^[a-zA-Z]+/.test(e.target.value));
    // }else if(e.target.name == "first_name"){
    //   if(!(/^[a-zA-Z]*/.test(e.target.value))){
    //     seterrorfirst_name(true);
    //   }
    // }else if(e.target.name == "employee_address"){
    //   if(!(/^[a-zA-Z0-9]*/.test(e.target.value))){
    //     seterroremployee_address(true);
    //   }
    // }else if(e.target.name == "employee_contact"){
    //   if(!(/^[0-9]*/.test(e.target.value))){
    //     seteerroremployee_contact(true);
    //   }
    // }else if(e.target.name == "superior_employee"){
    //   if(!(/^[a-zA-Z]*/.test(e.target.value))){
    //     seterrorsuperior_employee(true);
    //   }
    // }
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
                      error={"error"+item.name}
                    />
                    {/* <div className={styles.error}>{item.errorMessage}</div> */}
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
                    error={"error"+item.name}
                  />
                  {/* <div className={styles.error}>{item.errorMessage}</div> */}
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
    </div>
  )
}

export default EditEmployeeModal