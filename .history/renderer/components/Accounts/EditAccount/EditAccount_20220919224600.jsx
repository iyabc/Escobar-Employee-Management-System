import React, { useState, useEffect } from 'react';
import styles from './EditAccount.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Account from '../../../model/Account.tsx'
import { TextField } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

function capitalizeData(data){
    data = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
    return data;
}

export default function EditAccount({ editSuccessAction, selectedValues }) {
    console.log(selectedValues.map((item) => item.accountUsername[0]))
    const rest = new Rest();
    // const [newAccount, setNewAccount] = useState(
    //     new Account (
    //         accountId,
    //         employeeTypeName, 
    //         true
    //     )
    // )
    // const handleChange = (e) => {
    //     setNewAccount({...newAccount, [e.target.name]:capitalizeData(e.target.value)});
    // }
    // const handleSubmit = () => {
    //     rest.update(
    //         `${INITIAL_URL}/account/update/${newAccount.accountId}`,
    //         newAccount,
    //         editSuccessAction,
    //         `Successfully edited ${newAccount.accountId}`
    //     )
    // }

  return (
    <div className={styles.container}>
        {/* <div className={styles.form}>
        <div className={styles.header}>
            Editing account: <span style={{ fontWeight: 700, textTransform: "uppercase"}}>{employeeTypeName}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
              Position ID: {employeeTypeId}
            </div>
            <div className={styles.textfield}>
              <TextField onChange={handleChange} name="employeeTypeName" label="Employee Type Name" variant="standard" fullWidth />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            <MediumButton label="SUBMIT" />
          </button>
        </div>
      </div> */}
    </div>
  )
}
