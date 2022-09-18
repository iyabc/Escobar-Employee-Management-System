import React from 'react';

export default function EditTypes({ editSuccessAction, employeeTypeId, employeeTypeName }) {
  return (
    <div className={styles.container}>
        <div className={styles.form}>
        <div className={styles.header}>
            Editing employee type: <span style={{ fontWeight: 700, textTransform: "uppercase"}}>{employeeTypeName}</span>
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
              Position ID: {employeeTypeId}
            </div>
            <div className={styles.textfield}>
              <TextField onChange={handleChange} name="employeeTypeName" label="Employee Type Name" variant="standard" fullWidth />
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={handleSubmit}>
            <MediumButton label="SUBMIT" />
          </button>
        </div>
      </div>
    </div>
  )
}
