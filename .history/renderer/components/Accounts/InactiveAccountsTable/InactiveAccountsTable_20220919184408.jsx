import React, { useState, useEffect } from 'react';
import styles from './IninactiveAccountsTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

export default function IninactiveAccountsTable({ reload, ininactiveAccounts }) {
  //columns
  const headCells = [
    { field: 'accountUsername', headerName: 'Username', flex: 1, align: 'left'},
    { field: 'employeeName', headerName: 'Employee Name', flex: 1, align: 'left'},
    { field: 'accessInventoryManagementSystem', headerName: 'IMS', flex: 1, align: 'left'},
    { field: 'accessEmployeeManagementSystem', headerName: 'EMS', flex: 1, align: 'left'},
    { field: 'accessIncomeAndExpenseSystem', headerName: 'IES', flex: 1, align: 'left'},
    { field: 'accessOrderingSystem', headerName: 'OS', flex: 1, align: 'left'}
  ];
  const [rows, setRows] = useState([]);
  //  search
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = inactiveAccounts.filter((row) => {
      return row.username.toLowerCase().includes(searchValue.toLowerCase()) || row.employeeTypeName.toLowerCase().includes(searchValue.toLowerCase());
      });
      setRows(filteredRows);
    };
  const cancelSearch = () => {
    setSearched("");
    setRows(inactiveAccounts);
  }
  //selected rows
  const [selected, setSelected] = useState("");
  const handleSelect = (ids) => {
    setSelected(ids);
  }
  const [selectedValues, setSelectedValues] = useState([]);
  const handleSelectedValues = () => {
    const arr = [];
    for(let i=0; i < selected.length; i++){
      rows.map((item) => {
        if(item.accountId == selected[i]){
          arr.push(item);
        }
      })
    }
    setSelectedValues(arr);
  }
  return (
    <div>IninactiveAccountsTable</div>
  )
}
