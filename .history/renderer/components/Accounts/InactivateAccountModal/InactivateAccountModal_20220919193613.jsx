import React from 'react';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import styles from './InactivateAccountModal.module.scss';
import Rest from '../../../rest/Rest.tsx';

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivateAccountModal() {
    const rest = new Rest();

    const handleSubmit = () => {
        rest.inactivate(
            `${INITIAL_URL}/account/inactivate`,
            {'accountListDto': selectedValues},
            inactivateSuccessAction,
            `Successfully inactivated ${selectedValues.length} account/s`
        )
    }

  return (
    <div>InactivateAccountModal</div>
  )
}
