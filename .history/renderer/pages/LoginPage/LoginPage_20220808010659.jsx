import React, { useState } from 'react'
import styles from './LoginPage.module.scss'
import styled from 'styled-components'


const StyledInput = styled.input`
display: block;
margin: 20px 0px;
border: 1px solid lightblue;
`;

function useInput(defaultValue) {
const [value, setValue] = useState(defaultValue);
function onChange(e) {
  setValue(e.target.value);
}
return {
  value,
  onChange,
};
}   

const LoginPage = () => {
    const inputProps = useInput();   

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.upper}>Login</div>
                    <div className={styles.lower}>Escobar Employee Management System</div>
                </div>
                <div className={styles.content}>
                    <div className={`${styles['row']} ${styles['username']}}`}>
                        <StyledInput
                            {...inputProps}
                            placeholder="Type in here"
                        />
                        {/* <span>Value: {inputProps.value} </span> */}
                    </div>
                    <div className={`${styles['row']} ${styles['username']}}`}>
                        <StyledInput
                            {...inputProps}
                            placeholder="Type in here"
                        />
                        {/* <span>Value: {inputProps.value} </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage