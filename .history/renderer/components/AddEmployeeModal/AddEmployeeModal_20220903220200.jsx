import { InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AddEmployeeModal.module.scss';
import axios from 'axios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

class AddEmployeeModal extends Component {
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
  const postNewEmployee = async () => {
    const emp_id = employeesLength + 1;
    emp_id = String(emp_id);
    const postData = await axios
    .post("https://my-json-server.typicode.com/iyabc/mockend/employees", {
      employeeId: emp_id,
      employeeLastName: lastName,
      employeeFirstName: firstName,
      employeeContact: contact,
      employeeAddress: address,
      employeePosition: position,
      employeeType: type
    }).then(console.log("New Data", postData)).catch(err => console.log(err.response));
  }

  ////////////// handler ////////////////////////
  const changeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  }

  const { firstName, lastName, address, contact } = this.state;

  return (
    <form className={styles.container} >
        <div className={styles.form_box}>
        <div className={styles.header}>Add an Employee</div>
        <div className={styles.row}>
          <TextField name="firstName" value={firstName} onChange={changeHandler} label="First Name" variant="standard" fullWidth required />
          <TextField name="lasttName" value={lastName} onChange={changeHandler} label="Last Name" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField name="address" value={address} onChange={changeHandler} label="Address" variant="standard" fullWidth required />
          <TextField name="contact" value={contact} onChange={changeHandler} label="Contact Number" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <FormControl fullWidth sx={{ minWidth:"fit-content" }}>
              <FormLabel>Employee Type</FormLabel>
                <RadioGroup name="type" value={type} onChange={typeChange} >
                  {employeeTypes.map((item) => {
                      return (
                        <FormControlLabel value={item.typeName} control={<Radio />} label={item.typeName} />
                      )
                  })}
                </RadioGroup>
          </FormControl>
          <FormControl fullWidth sx={{ minWidth:"fit-content" }}>
            <FormLabel>Employee Position</FormLabel>
                <RadioGroup name="position" value={position} onChange={positionChange}>
                  {employeePositions.map((item) => {
                    return (
                      <FormControlLabel value={item.positionName} control={<Radio />} label={item.positionName} />
                    )
                  })}
                </RadioGroup>
          </FormControl>
        </div>
        <button type="submit" className={styles.row}>
          <BigButton label="SUBMIT" link="" />
        </button>
      </div>
    </form>
  )
}

export default AddEmployeeModal;
