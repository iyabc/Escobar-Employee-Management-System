import { InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AddEmployeeModal.module.scss';
import axios from 'axios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

export default function AddEmployeeModal() {
  ////////////// get input////////////////////////
  //get first name textfield
  const [firstName, setFirstName] = useState("");
  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  //get last name textfield
  const [lastName, setLastName] = useState("");
  const lastNameChange = (event) => {
    setLastName(event.target.value);
  }
  //get address textfield
  const [address, setAddress] = useState("");
  const addressChange = (event) => {
    setAddress(event.target.value);
  }
  //get contact textfield
  const [contact, setContact] = useState("");
  const contactChange = (event) => {
    setContact(event.target.value);
  }
  //get type radio
  const [type, setType] = useState("");
  const typeChange = (event) => {
    setType(event.target.value);
  };
  //get position radio
  const [position, setPosition] = useState("");
  const positionChange = (event) => {
    setPosition(event.target.value);
  };
  /////////////////// fetch data ////////////////////
  //get employee types data
  const [employeeTypes, setEmployeeTypes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/types");
      setEmployeeTypes([...data.data]);
    };
    getData();
  }, []);
  //get employee length
  const [employeesLength, setEmployeeLength] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/employees");
      setEmployeeLength([...data.data].length);
    };
    getData();
  }, []);
  //get employee position data
  const [employeePositions, setEmployeePositions] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/positions");
      setEmployeePositions([...data.data]);
    };
    getData();
  }, []);
  ///////////////////// post data //////////////////////
  //post added employee data
  const postNewEmployee = (e) => {
    const id = employeesLength + 1;
    console.log(typeof(id));
    e.preventDefault();
    axios.post("https://my-json-server.typicode.com/iyabc/mockend/employees", {
      employeeId: id,
      employeeLastName: lastName,
      employeeFirstName: firstName,
      employeeContact: contact,
      employeeAddress: address,
      employeePosition: position,
      employeeType: type
    }).then(res => console.log("New Data", res)).catch(err => console.log(err.response.data));
  }

  return (
    <div className={styles.container}>
        <div className={styles.form_box}>
        <div className={styles.header}>Add an Employee</div>
        <div className={styles.row}>
          <TextField value={firstName} onChange={firstNameChange} label="First Name" variant="standard" fullWidth required />
          <TextField value={lastName} onChange={lastNameChange} label="Last Name" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField value={address} onChange={addressChange} label="Address" variant="standard" fullWidth required />
          <TextField value={contact} onChange={contactChange} label="Contact Number" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <FormControl fullWidth sx={{ minWidth:"fit-content" }}>
              <FormLabel>Employee Type</FormLabel>
                <RadioGroup value={type} onChange={typeChange} >
                  {employeeTypes.map((item) => {
                      return (
                        <FormControlLabel value={item.typeName} control={<Radio />} label={item.typeName} />
                      )
                  })}
                </RadioGroup>
              </FormControl>
            <FormControl fullWidth sx={{ minWidth:"fit-content" }}>
              <FormLabel>Employee Position</FormLabel>
                <RadioGroup value={position} onChange={positionChange}>
                  {employeePositions.map((item) => {
                    return (
                      <FormControlLabel value={item.positionName} control={<Radio />} label={item.positionName} />
                    )
                  })}
                </RadioGroup>
              </FormControl>
        </div>
        <div className={styles.row} onClick={postNewEmployee}>
          <BigButton label="SUBMIT" link="" />
        </div>
      </div>
    </div>
  )
}
