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
   //handle input
   const [isFormValid, setisFormValid] = useState("");
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
   const errorMessages = [
     {
       last_name:"Must contain letters only.",
       first_name:"Must contain letters only.",
       employee_contact:"Must contain 11 digits only.",
       employee_address:"Must contain letters and digits only.",
       superior_employee:"Must contain letters only."
     }
   ]
   const textFields = [
     {
       id:1,
       name:"last_name",
       type:"text",
       label:"Last Name",
       helperText:"Must contain letters only."
     },
     {
       id:2,
       name:"first_name",
       type:"text",
       label:"First Name",
       helperText:"Must contain letters only."
     },
     {
       id:3,
       name:"employee_address",
       type:"text",
       label:"Address",
       helperText:"Must contain letters and numbers only."
     },
     {
       id:4,
       name:"employee_contact",
       type:"text",
       label:"Contact Number",
       helperText:"Must contain digits only."
     },
     {
       id:5,
       name:"date_employed",
       type:"date",
       label:"Date Employed",
       defaultValue:date_employed,
       error: false
     }
   ];
   const onChangeInput = (e) => {
     // if(e.target.name == "last_name") {  
     //   if(!(onlyLetters(e.target.value))){
         
     //   }
     // }
     // if(e.target.name == "first_name") {  
     //   if(!(onlyLetters(e.target.value))){
     
     //   }
     // }
     // if(e.target.name == "employee_address") {  
     //   if(!(onlyLettersNumbers(e.target.value))){
    
     //   }
     // }
     // if(e.target.name == "employee_contact") {  
     //   if(!(onlyNumbers(e.target.value))){
 
     //   }
     // }
     // if(e.target.name == "superior_employee") {  
     //   if(!(checkSuperiorFormat(e.target.value))){
    
     //   }
     // }
     const { name, value } = e.target;
     setValues({ ...values, [name] : value });
   }
   const validate = () => {
     console.log(values)
   }
   //handle submit
   const handleSubmit = (e) => {
     validate();
     e.preventDefault();
   }
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
  const handlePositionChange = (e) => {
    setPosition(e.target.value);
    setValues({...values, [e.target.name] : e.target.value});
  };
  //types data
  const handleTypes = (data) => {
    setTypes(data);

  }
  const getTypes = () => {
    rest.get(`${INITIAL_URL}/employee-type`, handleTypes);
  }
  const [type, setType] = useState(employee_type);
  const handleTypeChange = (e) => {
    setType(e.target.value);
    setValues({...values, [e.target.name] : e.target.value})
  };
  // console.log(type)

  //check if required superior
  function checkIfSuperior(emp_type) {
    if(emp_type != "Owner"){
      return (
        <TextField name="superior_employee" label="Superior Name" variant="standard" defaultValue={superior_employee} onChange={onChangeInput} helperText="Last Name, First Name" fullWidth required />
      )
    }
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
                      error
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
                    error
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
                  name='employee_position'
                  value={position}
                  label="Position"
                  onChange={handlePositionChange}
                  required
                >
                  {positions.map((item) => {
                    return ( 
                      <MenuItem value={item}>{item}</MenuItem>
                    )
                  })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Types</InputLabel>
            <Select
              name='employee_type'
              value={type}
              label="Type"
              onChange={handleTypeChange}
              required
            >
              {types.map((item) => {
                return ( 
                  <MenuItem value={item}>{item}</MenuItem>
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