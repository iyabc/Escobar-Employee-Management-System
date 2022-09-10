import React, { useState, useEffect } from 'react';
import styles from './InactivePositionsTable.module.scss';
import { DataGrid } from '@mui/x-data-grid';
import SearchBar from 'material-ui-search-bar';

import Rest from "../../rest/Rest.tsx";
import { Modal } from '@mui/material';
import MediumButton from '../MediumButton/MediumButton';

export default function InactivePositionsTable() {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        
      </div>
    </div>
  )
}
