import React, { useState } from 'react'
import styles from './LoginPage.module.scss'
import styled from 'styled-components'
import MaroonButton from '../../components/MaroonButton/MaroonButton';
import { motion } from "framer-motion";

const StyledInput = styled.input`
display: block;
margin: 0.5rem 0rem;
// border-bottom: 1px solid lightblue;
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
                    <motion.div className={styles.btn_container}
                    variants={scaleTickets}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 1}}
                    >
                        <MaroonButton label=''/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage