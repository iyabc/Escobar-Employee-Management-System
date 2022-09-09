import { InputLabel, TextField, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState, useEffect } from 'react';
import BigButton from '../BigButton/BigButton';
import styles from './AddEmployeeModal.module.scss';
import axios from 'axios';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/system';

export default function AddEmployeeModal() {
  //select
  const [currency, setCurrency] = useState("");
  const handleChange = () => {
    setCurrency(event.target.value);
  };
  //post added employee data
  const postNewEmployee = (e) => {
    const firstName = "";
    const lastName = "";
    employeeData.map((item) => {
      if(item.employeeId == selectData){
        firstName = item.employeeFirstName;
        lastName = item.employeeLastName;
      }
    })
    e.preventDefault();
    axios.post("https://my-json-server.typicode.com/iyabc/mockend/attendance", {
      employeeId: selectData,
      employeeFirstName: firstName,
      employeeLastName: lastName,
      employeeCheckIn: datetime
    }).then(res => console.log("New Data", res)).catch(err => console.log(err));
  }
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

  return (
    <div className={styles.container}>
        <div className={styles.form_box}>
        <div className={styles.header}>Add an Employee</div>
        <div className={styles.row}>
          <TextField id="last_name" label="Last Name" variant="standard" fullWidth required />
          <TextField id="first_name" label="First Name" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="employee_address" label="Address" variant="standard" fullWidth required />
        </div>
        <div className={styles.row}>
          <TextField id="employee_contact" label="Contact Number" variant="standard" fullWidth required />
          <TextField id="daily_wage" label="Daily Wage" variant="standard" fullWidth required />
          {/* <FormControl fullWidth sx={{ minWidth:"fit-content", textAlign:"center" }}>
            <FormLabel id="demo-radio-buttons-group-label">Employee Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              required
            >
              {employeeTypes.map((item) => {
                return (
                  <FormControlLabel value={item.typeName} control={<Radio />} label={item.typeName} />
                )
              })}
            </RadioGroup>
          </FormControl> */}
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
            id="outlined-select-currency-native"
            select
            label="Type"
            value={currency}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            // helperText="Please select your currency"
          >
            {/* {employeeTypes.map((item) => {
                return (
                  <MenuItem value={item.typeName}>
                    {item.typeName}
                  </MenuItem>
                )
              })} */}
          </TextField>
          </Box>
        </div>
        <div type="submit" className={styles.row}>
          <BigButton label="SUBMIT" link="" />
        </div>
      </div>
    </div>
  )
}
