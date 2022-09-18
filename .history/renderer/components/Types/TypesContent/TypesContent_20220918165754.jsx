import React, { useState, useEffect } from 'react';
import styles from './TypesContent.module.scss';
import Toast from '../../Shared/Toast/Toast';
import Rest from '../../../rest/Rest.tsx';
import { Modal } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function TypesContent() {
    const rest =  new Rest();
    //get active types
    const [activeTypes, setActiveTypes] = useState([]);
    const handleActiveTypes = (data) => {
        setActiveTypes(data)
    }
    const getActiveTypes = () => {
        rest.get(`${INITIAL_URL}/employee-types/active`, handleActiveTypes)
    }
    //get inactive types
    const [inactiveTypes, setInactiveTypes] = useState([]);
    const handleInactiveTypes = (data) => {
        setInactiveTypes(data)
    }
    const getInactiveTypes = () => {
        rest.get(`${INITIAL_URL}/employee-types/inactive`, handleInactiveTypes)
    }

    useEffect(() => {
        getActiveTypes();
        getInactiveTypes();
    })

    return (
        <div className={styles.container}>
        <Toast />
        <div className={styles.content}>
            <div className={styles.header}>
            <button onClick={handleOpenAddModal}>
                <MediumButton label="Add Expense Category" />
            </button>
            </div>
            <div className={styles.tables}>
            <div className={styles.active_table}>
                <ActiveCategoryTable
                reload={reload}
                activeCategories={activeCategories}
                />
            </div>
            <div className={styles.inactive_table}>
                {/* <InactiveCategoryTable
                reload={reload}
                inactiveCategories={inactiveCategories}
                /> */}
            </div>
            </div>
        </div>
        <Modal open={openAddModal} onClose={handleCloseAddModal}>
            <div className={styles.modal}>
                {/* <AddExpenseCategory
                reload={reload}
                addSuccessAction={addSuccessAction}
                /> */}
            </div>
        </Modal>
        </div>
    )
}