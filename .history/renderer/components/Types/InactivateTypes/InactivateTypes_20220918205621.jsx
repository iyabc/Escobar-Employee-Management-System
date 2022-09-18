import React from 'react';
import styles from './InactivateTypes.module.scss';
import MediumButton from '../../Shared/Buttons/MediumButton/MediumButton';
import Rest from "../../../rest/Rest.tsx";

const INITIAL_URL = "http://localhost:8080/api/v1";

export default function InactivateTypes({ reload, selectedValues }) {
    const rest = new Rest();
    const handleSubmit = () => {
        rest.inactivate(
            `${INITIAL_URL}/employee-type/inactivate`,
            { 'employeeTypeListDto':selectedValues},
            inactivateSuccessAction,
            `Successfully inactivated ${selectedValues.length} expense category.`
        )
    }

  return (
    <div>InactivateTypes</div>
  )
}
