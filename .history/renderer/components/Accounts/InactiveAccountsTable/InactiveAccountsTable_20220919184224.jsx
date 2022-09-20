import React, { useState, useEffect } from 'react';

export default function IninactiveAccountsTable({ reload, ininactiveAccounts }) {
  //columns
  const headCells = [
    { field: 'accountUserName', headerName: 'Username', flex: 1, align: 'left'},
    { field: 'employeeName', headerName: 'Employee Name', flex: 1, align: 'left'}
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
