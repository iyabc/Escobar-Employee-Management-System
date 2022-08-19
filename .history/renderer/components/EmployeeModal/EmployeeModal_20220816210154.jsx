import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './EmployeeModal.module.scss'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
  };

const CalendarModal = () => {
    const [open, setOpen] = useState(Calendar.events.map((item) => false));
    const handleOpen = (currentIndex) =>
        setOpen();
    const handleClose = (currentIndex) =>
        setOpen();

    return (
        <div className={styles.container}>
        {Calendar.events.map((item, index) => {
            return (
            <div key={item.title}>
                <Button
                    className={`${styles["button"]} ${styles[item.itemNum]}`}
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(index)}
                >
                {item.title}
                </Button>
                <Modal open={open[index]} onClose={() => handleClose(index)}>
                    <Box style={style}>
                        <div className={styles.close_btn} onClick={() => handleClose(index)}>X</div>
                    </Box>
                </Modal>
            </div>
            );
        })}
        </div>
    );
    };

export default CalendarModal