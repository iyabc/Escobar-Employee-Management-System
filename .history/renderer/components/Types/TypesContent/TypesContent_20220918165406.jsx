import React, { useState, useEffect } from 'react';
import styles from './TypesContent.module.scss';
import Toast from '../../Shared/Toast/Toast';
import Rest from '../../../rest/Rest.tsx';
import { Modal } from '@mui/material';
import MediumButton from '../../Shared/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function TypesContent() {
    const rest =  new Rest();

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