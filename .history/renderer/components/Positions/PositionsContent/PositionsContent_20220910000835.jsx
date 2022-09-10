import React, { useState, useEffect } from 'react';
import styles from './PositionsContent.module.scss';
import SearchBar from 'material-ui-search-bar';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';
import AddPositionForm from '../AddPositionForm/AddPositionForm';
import InactivePositionsTable from '../InactivePositionsTable/InactivePositionsTable';
import EditPositionModal from '../EditPositionModal/EditPositionModal';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function PositionsContent() {
    const headCells = [
        { field: 'employeePositionId', headerName: 'ID', flex: 1, align: 'left' },
        { field: 'employeePositionName', headerName: 'Position Name', flex: 1, align: 'left' }
    ]
    const rest = new Rest();
    //get positions
    const [positions, setPositions] = useState([]);
    const handlePositionsData = (data) => {
        setPositions(data);
    }
    const getPositionsData = () => {
        rest.get(`${INITIAL_URL}/employee-position/active`, handlePositionsData);
    }
     //search
    const [rows, setRows] = useState([]);
    const [searched, setSearched] = useState("");
    const requestSearch = (searchValue) => {
    const filteredRows = fetchedData.filter((row) => {
      return String(row.employeeAttendanceJoinId).includes(searchValue) || row.employeeName.toLowerCase().includes(searchValue.toLowerCase()) || row.attendanceTime.includes(searchValue) || row.attendanceType.toLowerCase().includes(searchValue.toLowerCase);
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
      if(selected.length == 1){
        rows.map((item) => {
          if(item.employeePositionId == selected[0]){
            arr.push(item);
          }
        })
      }else if(selected.length > 1){
        for(let i=0; i < selected.length; i++){
          rows.map((item) => {
            if(item.employeePositionId == selected[i]){
              arr.push(item);
            }
          })
        }
      }
      setSelectedValues(arr);
    }

    //delete modal
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [arrDeleted, setArrDeleted] = useState([]);
    const handleOpenDeleteModal = () => { 
      setOpenDeleteModal(true);
      const arrDelete = [];
      for(let i=0; i < selected.length; i++){
        rows.forEach((item) => {
          if(item.employeeAttendanceJoinId == selected[i]){
            arrDelete.push(item)
          }
        })
      }
      setArrDeleted(arrDelete);
    };

    const [openEditModal, setOpenEditModal] = useState(false);
    const handleOpenEditModal = () => { 
      setOpenEditModal(true);
    };
    const handleCloseEditModal = () => { setOpenEditModal(false); };
    const editSuccessAction = () => {
      console.log("edit success")
      handleCloseEditModal();
      getPositionsData();
    }
    //inactivate
    //show buttons
    function showButtons() {
      if(selected.length == 1 ){
        return (
          <>
            <Tooltip title="Edit Employee Position">
              <IconButton onClick={handleOpenEditModal}>
                <MediumButton label="Edit" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Inactivate Employee Position/s">
              <IconButton onClick={handleOpenDeleteModal}>
                <MediumButton label="Inactivate" />
              </IconButton>
            </Tooltip>
          </>
        )
      }else if(selected.length > 1){
        return (
          <>
            <Tooltip title="Inactivate Employee Position/s">
              <IconButton onClick={handleOpenDeleteModal}>
                <MediumButton label="Inactivate" />
              </IconButton>
            </Tooltip>
          </>
        )
      }
    };
    //show rows
    const setShownRows = () => {
      if(rows.length == 0){
        setRows(positions);
      }
    };

    useEffect(() => {
      getPositionsData();
      setRows(positions);
      setShownRows();
    }, [positions]);

    useEffect(() => {
      handleSelectedValues();
    }, [selected])

    return (
        <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.left_content}>
                <div className={styles.add_form}>
                  <AddPositionForm positionsData={positions} />
                </div>
                <div className={styles.inactive_table}>
                  <InactivePositionsTable />
                </div>
              </div>
              <div className={styles.right_content}>
                <div className={styles.header}>
                    <div className={styles.left}>
                        <SearchBar 
                            placeholder="Search Position Table"
                            value={searched}
                            onChange={(searchValue) => requestSearch(searchValue)}
                            onCancelSearch={() => cancelSearch()}
                        />
                        <div className={styles.print_btn}>
                            <LocalPrintshopIcon />
                        </div>
                    </div>
                    <div className={styles.right}>
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
            </div>
            {/* {console.log(positions)} */}
            <Modal open={openEditModal} onClose={handleCloseEditModal} >
                <div className={styles.modal}>
                  <EditPositionModal
                    editSuccessAction={editSuccessAction}
                    employeePositionId={selectedValues.map((item) => item.employeePositionId)}
                    employeePositionName={selectedValues.map((item) => item.employeePositionName)}
                    positionActiveData={positions}
                  />
                </div>
            </Modal>
            {/* <Modal open={openInactivateModal} onClose={handleCloseInactivateModal} >
                <div className={styles.modal}>
                 
                </div>
            </Modal> */}
        </div>
      )
}
