import React from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './InactivateAccountModal.module.scss';
import Rest from '../../../rest/Rest.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivateAccountModal() {
    const rest = new Rest();

    const handleSubmit = () => {
        rest.inactivate(
            `${INITIAL_URL}/employee/inactivate`,
            {'employeeListDto': selectedValues},
            inactivateSuccessAction,
            `Successfully inactivated ${selectedValues.length} employee/s`
        )
    }

  return (
    <div>InactivateAccountModal</div>
  )
}
