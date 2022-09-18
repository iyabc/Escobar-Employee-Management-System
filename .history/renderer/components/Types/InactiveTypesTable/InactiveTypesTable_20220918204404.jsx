import React, { useState, useEffect } from 'react';
import styles from './InactiveTypesTable.module.scss';
import { IconButton, Modal, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'
import SearchBar from 'material-ui-search-bar'
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

export default function InactiveTypes({ reload, inactiveTypes }) {
  //columns
  const headCells = [
    { field: 'employeeTypeId', headerName: 'ID', flex: 1, align: 'left'},
    { field: 'employeeTypeName', headerName: 'Type Name', flex: 1, align: 'left'}
  ];
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
        if(item.employeeTypeId == selected[i]){
          arr.push(item);
        }
      })
    }
    setSelectedValues(arr);
  }

  return (
    <div>InactiveTypes</div>
  )
}
