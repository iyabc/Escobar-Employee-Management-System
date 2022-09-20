import React, { useState, useEffect } from 'react';
import styles from './EditAccount.module.scss';
import Rest from '../../../rest/Rest.tsx';
import Account from '../../../model/Account.tsx'
import { TextField } from '@mui/material';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function EditAccount({ editSuccessAction, selectedValues }) {
  return (
    <div>EditAccount</div>
  )
}
