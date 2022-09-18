import React, { useState, useEffect } from 'react';
import styles from './ActiveTypesTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'

export default function ActiveTypesTable({ reload, activeTypes }) {
  const [rows, setRows] = useState([]);
  //  search
  const [searched, setSearched] = useState("");
  const requestSearch = (searchValue) => {
    const filteredRows = activeTypes.filter((row) => {
      return String(row.employeeTypeId).includes(searchValue) || row.employeeTypeName.toLowerCase().includes(searchValue.toLowerCase());
      });
      setRows(filteredRows);
    };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  }

  return (
    <div>ActiveTypesTable</div>
  )
}
