import React from 'react';
import Header from '../../components/Header/Header';
import MaroonButton from '../../components/MaroonButton/MaroonButton';
import TitleBar from '../../components/TitleBar/TitleBar';
import styles from './HomePage.module.scss';
import { motion } from "framer-motion";

const HomePage = () => {
  
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
    <div className={styles.section}>
      <TitleBar />
      <Header />
      <div className={styles.outer_container}>
        <div className={styles.inner_container}>
          <div className={styles.text_container}>
            <div className={styles.title}>Welcome, NAME.</div>
            <div className={styles.sub_text}>What would you like to do?</div>
          </div>
              <div className={styles.buttons_container}>
              <motion.div className={styles.btn_container}
                    variants={scaleTickets}
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 1}}
                    >
                      <MaroonButton label='SUBMIT' link='../HomePage/HomePage' />
                </motion.div>
                <MaroonButton label='Attendance' link='' />
                <MaroonButton label='Employee' link='' />
              </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage