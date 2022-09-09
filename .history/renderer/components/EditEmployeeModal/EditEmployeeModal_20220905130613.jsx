import { FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './EditEmployeeModal.module.scss';

import Rest from "../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

function EditEmployeeModal({id, last_name, first_name, employee_contact, employee_address, employee_type, employee_position, superior_employee}) {
  const rest = new Rest();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [positions, setPositions] = useState([]);
  const [types, setTypes] = useState([]);
  const [superior, setSuperior] = useState("");
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
        <TextField name="last_name" label="Superior Name" variant="standard" value={superior_employee} fullWidth required />
      )
    }
  }
  //handle input
  const handleInput = (event) => {
    
  }
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  useEffect(() => {
    getPositions();
    getTypes();
  })

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form_box}>
        <div className={styles.header}>Employee <span style={{ color:'black', fontWeight:'800' }}>{id}</span>'s Information</div>
        <div className={styles.row}>
          <TextField name="last_name" label="Last Name" variant="standard" defaultValue={last_name} fullWidth required />
          <TextField name="first_name" label="First Name" variant="standard" defaultValue={first_name} fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField name="employee_address" label="Address" variant="standard" defaultValue={employee_address} fullWidth required />
          <TextField name="employee_contact" label="Contact Number" variant="standard" defaultValue={employee_contact} fullWidth required />
        </div>
        <div className={styles.row}>
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
          {checkIfSuperior(employee_type)}
        </div>
        <div className={styles.row}>
          <BigButton label="SUBMIT" link="" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default EditEmployeeModal