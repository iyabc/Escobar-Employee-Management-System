import React from 'react'
import styles from './MaroonButton.module.scss'
import { motion } from "framer-motion";

const MaroonButton = ({label}) => {
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

  return (
    <div className={styles.button}>
        {label}
    </div>
  )
}

export default MaroonButton