import React, { useState, useEffect } from 'react';
import styles from './InactivePositionsTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';

import Rest from "../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivePositionsTable() { 
    const rest = new Rest();
    // get data
    const [inactivePositions, setInactivePositions] = useState([]);
    const handleInactivePositions = (data) => {
      setInactivePositions(data);
    }
    const getInactivePositions = () => {
      rest.get(`${INITIAL_URL}/employee-position/inactive`, handleInactivePositions)
    }
    //columns
    const headCells = [
      { feild: 'employeePositionId', headerName: 'ID', flex: 1, align: 'right'},
      { feild: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'right'}
    ]

  return (
    <div className={styles.container}>
      <div className={styles.table}>
      </div>
    </div>
  )
}
