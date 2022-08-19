import React, { useState } from 'react'
import styles from './LoginPage.module.scss'
import styled from 'styled-components'
import { motion } from "framer-motion";
import { TextField } from '@mui/material';
import MaroonButton from '../../components/MaroonButton/MaroonButton';

const StyledInput = styled.input`
width: 28rem;
display: block;
margin: 0.5rem 0rem;
border-bottom: 1px solid lightblue;
border: none;
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

    const scaleTickets = {
        initial: {
          opacity: 0,
          y: "20px"
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 2
          }
        },
      }
      
    const inputProps = useInput();   

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.upper}>Login</div>
                    <div className={styles.lower}>Escobar Employee Management System</div>
                </div>
                <div className={styles.content}>
                  <TextField id="username" label="Username" variant="standard" disable fullWidth />
                  <TextField id="password" label="Password" variant="standard" fullWidth />
                        {/* <StyledInput
                            {...inputProps}
                            placeholder="Type in here"
                        /> */}
                        {/* <span>Value: {inputProps.value} </span> */}
                </div>
                <motion.div className={styles.btn_container}
                    variants={scaleTickets}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 1}}
                    >
                      <MaroonButton label='SUBMIT' link='../HomePage/HomePage' />
                </motion.div>
            </div>
        </div>
    )
}

export default LoginPage