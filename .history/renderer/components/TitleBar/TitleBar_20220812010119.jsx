import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import { motion } from "framer-motion";

const TitleBar = () => {

  const scaleButton = {
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
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button id='minimize' className={`${styles.button} ${styles.min_btn}`}>
          <motion.div className={styles.button}
                      variants={scaleTickets}
                      whileHover={{scale: 1.2}}
                      whileTap={{scale: 1}}
                      >
                        <MinimizeRoundedIcon fontSize='small'/>
                  </motion.div>
        </button>
        <button id='maximize' className={`${styles.button} ${styles.max_btn}`}>
          <CropSquareRoundedIcon fontSize='small'/>
        </button>
        <button id='exit' className={`${styles.button} ${styles.exit_btn}`}>
          <CloseRoundedIcon fontSize='small'/>
        </button>
      </div>
    </div>    
  )
}

export default TitleBar