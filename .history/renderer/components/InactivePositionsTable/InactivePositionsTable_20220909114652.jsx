import React, { useState, useEffect } from 'react';
import styles from './InactivePositionsTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';

import Rest from "../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivePositionsTable() { 
    //columns
    const headCells = [
      { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'right'},
      { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'right'}
    ];
    //
    const rest = new Rest();
    const [rows, setRows] = useState([]);
    // get data
    const [inactivePositions, setInactivePositions] = useState([]);
    const handleInactivePositions = (data) => {
      setInactivePositions(data);
    }
    const getInactivePositions = () => {
      rest.get(`${INITIAL_URL}/employee-position/inactive`, handleInactivePositions)
    }
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
    //show buttons
    function showButtons() {
      if(selected.length > 0 ){
        return (
          <>
          <Tooltip title="Activate Employee Position">
            <IconButton onClick={}>
              <MediumButton label="Activate" />
            </IconButton>
          </Tooltip>
          </>
        )
      }
    };

    useEffect(() => {
      getInactivePositions();
      setShownRows();
    }, [rows])

  return (
    <div className={styles.container}>
      {console.log(rows)}
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
