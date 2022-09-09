import { InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState, useEffect, Component } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AddEmployeeModal.module.scss';
import axios from 'axios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { render } from 'react-dom';

class AddEmployeeModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '', 
      address: '',
      contact: '',
      position: '',
      type: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  getFunctions = () => {
    const [employeePositions, setEmployeePositions] = useState([]);
    const getEmployeePositions = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/positions");
      setEmployeePositions([...data.data]);
    };
    //get types
    const [employeeTypes, setEmployeeTypes] = useState([]);
    const getEmployeeTypes = async () => {
      const data = await axios
      .get("https://my-json-server.typicode.com/iyabc/mockend/types");
      setEmployeeTypes([...data.data]);
    };
    getEmployeePositions();
    getEmployeeTypes();
  }

  render() {
    const { firstName, lastName, address, contact, position, type } = this.state;
    getFunctions();

    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
          <div className={styles.form_box}>
          <div className={styles.header}>Add an Employee</div>
          <div className={styles.row}>
            <TextField name="firstName" value={firstName} onChange={this.changeHandler} label="First Name" variant="standard" fullWidth required />
            <TextField name="lasttName" value={lastName} onChange={this.changeHandler} label="Last Name" variant="standard" fullWidth required />
          </div>
          <div className={styles.row}>
            <TextField name="address" value={address} onChange={this.changeHandler} label="Address" variant="standard" fullWidth required />
            <TextField name="contact" value={contact} onChange={this.changeHandler} label="Contact Number" variant="standard" fullWidth required />
          </div>
          <div className={styles.row}>
            <FormControl fullWidth sx={{ minWidth:"fit-content" }}>
                <FormLabel>Employee Type</FormLabel>
                  <RadioGroup name="type" value={type} onChange={this.changeHandler} >
                    {employeeTypes.map((item) => {
                        return (
                          <FormControlLabel value={item.typeName} control={<Radio />} label={item.typeName} />
                        )
                    })}
                  </RadioGroup>
            </FormControl>
            <FormControl fullWidth sx={{ minWidth:"fit-content" }}>
              <FormLabel>Employee Position</FormLabel>
                  <RadioGroup name="position" value={position} onChange={this.changeHandler}>
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
}

export default AddEmployeeModal;
