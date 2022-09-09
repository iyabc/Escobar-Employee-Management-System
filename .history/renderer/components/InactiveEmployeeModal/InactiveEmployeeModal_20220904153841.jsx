import React, { useEffect } from 'react';
import styles from './InactiveEmployeeModal.module.scss';

export default function InactiveEmployeeModal() {
  const [rows, setRows] = useState([]);
  const handleInactiveEmployees = (data) => {
    setRows(data);
  };
  const getAllInactiveEmployees = () => {
    rest.get(`${INITIAL_URL}/employee/inactive`, handleInactiveEmployees);
  };

  useEffect(() => {

  })
  return (
    <div className={styles.container}>
        <div className={styles.form_box}>
            <div className={styles.header}>Inactive Employees</div>
        </div>
    </div>
  )
}
