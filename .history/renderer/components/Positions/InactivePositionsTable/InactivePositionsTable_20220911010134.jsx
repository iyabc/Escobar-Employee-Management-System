import React, { useState, useEffect } from 'react';
import styles from './InactivePositionsTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';

import Rest from "../../../rest/Rest.tsx";
import { Tooltip, IconButton } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivePositionsTable({ inactivePositions }) {
    const rest = new Rest();
    //columns
    const headCells = [
      { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'left'},
      { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'left'}
    ];
    const [rows, setRows] = useState([]);
    //  search
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
      const filteredRows = inactivePositions.filter((row) => {
        return String(row.employeePositionId).includes(searchValue) || row.employeePositionName.toLowerCase().includes(searchValue.toLowerCase());
        });
        setRows(filteredRows);
      };
    const cancelSearch = () => {
      setSearched("");
      requestSearch(searched);
    }
    //set shown rows
    const setShownRows = () => {
      if(rows == 0){
        setRows(inactivePositions);
      }
    }
     //selected rows
    const [selected, setSelected] = useState("");
    const handleSelect = (ids) => {
      setSelected(ids);
    }
    //selected values
    const [selectedValues, setSelectedValues] = useState([]);
    const handleSelectedValues = () => {
      const arr = []
      for(let i=0; i < selected.length; i++){
        inactivePositions.forEach((item) => {
          if(item.employeePositionId == selected[i]){
            arr.push(item)
          }
        })
      }
      setSelectedValues(arr);
    }
    //onclick activate
    const handleActivateOnClick = () => {
      handleSelectedValues();
      handleActivate();
    }
    const handleActivate = () => {
      // rest.activate(
      //   (`${INITIAL_URL}/employee-position/activate`),
      //   {'employeePositionListDto': selectedValues},
      //   activateSuccessAction,
      //   ''
      // )
    }
    //show buttons
    function showButtons() {
      if(selected.length > 0 ){
        return (
          <>
          <Tooltip title="Activate Employee Position">
            <IconButton onClick={handleActivateOnClick}>
              <MediumButton label="Activate" />
            </IconButton>
          </Tooltip>
          </>
        )
      }
    };

    useEffect(() => {
      setRows(inactivePositions);
    }, [inactivePositions]);

    // useEffect(() => {
    //   setShownRows();
    // }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search_bar}>
          <SearchBar 
            placeholder="Search Inactive Positions Table"
            value={searched}
            onChange={(searchValue) => requestSearch(searchValue)}
            onCancelSearch={() => cancelSearch()}
          />
        </div>
        <div className={styles.edit_button}>
          {showButtons()}
        </div>
      </div>
      <div className={styles.table}>
        <DataGrid
          getRowId={(row) => row.employeePositionId}
          rows={rows}
          columns={headCells}
          pageSize={20}
          onSelectionModelChange={handleSelect}
          checkboxSelection
        />
      </div>
    </div>
  )
}
