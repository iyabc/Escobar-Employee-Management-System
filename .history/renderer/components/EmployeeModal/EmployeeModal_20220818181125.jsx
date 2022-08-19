import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './EmployeeModal.module.scss'
import Employee from '../../data/employeeData.json';
import CloseIcon from '@mui/icons-material/Close';

const EmployeeModal = () => {

    return (
        <div className={styles.container}>
        {EmployeeData.employeeData.map((item, index) => {
            return (
            <div key={item.title}>
                <Button
                    className={styles.button}
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(index)}
                >
                {item.title}
                </Button>
                <Modal open={open[index]} onClose={() => handleClose(index)}>
                    <Box style={style}>
                        <div className={styles.close_btn} onClick={() => handleClose(index)}><CloseIcon /></div>
                        a
                    </Box>
                </Modal>
            </div>
            );
        })}
        </div>
    );
    };

export default EmployeeModal