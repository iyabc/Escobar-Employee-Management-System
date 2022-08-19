import React from 'react'

function EmployeeModal({id}) {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Editing {id} Information</div>
    </div>
  )
}

export default EmployeeModal