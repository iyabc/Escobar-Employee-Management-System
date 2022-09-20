import React, { useState, useEffect } from 'react';
import styles from './AccountsContent.module.scss';
import SearchBar from 'material-ui-search-bar';
import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';
import Toast from '../../Shared/Toast/Toast.jsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AccountsContent() {
    const headCells = [
        { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'left' },
        { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'left' }
    ]
    const rest = new Rest();
    //get active employees
    const [employees, setEmployees] = useState([]);
    const handleEmployeesData = (data) => {
        setPositions(data);
    }
    const getPositionsData = () => {
        rest.get(`${INITIAL_URL}/employee/active`, handlePositionsData);
    }

  return (
    <div>AccountsContent</div>
  )
}
