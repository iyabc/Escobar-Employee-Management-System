import React, { useState, useEffect } from 'react';
import styles from './AccountsContent.module.scss';
import SearchBar from 'material-ui-search-bar';
import Rest from "../../../rest/Rest.tsx";
import { IconButton, Modal, Tooltip } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import { DataGrid } from '@mui/x-data-grid';
import AddPositionForm from '../AddPositionForm/AddPositionForm';
import InactivePositionsTable from '../InactivePositionsTable/InactivePositionsTable';
import EditPositionModal from '../EditPositionModal/EditPositionModal';
import InactivatePositionModal from '../InactivatePositionModal/InactivatePositionModal';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function AccountsContent() {
  return (
    <div>AccountsContent</div>
  )
}
