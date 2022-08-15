import React from 'react'
import styles from './MaroonButton.module.scss'
import { motion } from "framer-motion";

const MaroonButton = ({label}) => {
  return (
    <div className={styles.button}>
        {label}
    </div>
  )
}

export default MaroonButton