import React from 'react'
import styles from './TitleBar.module.scss'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import Head from 'next/head';

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
    <React.Fragment>
       <Head>
        <script src='main/titleFunctions.js'></script>
        <title>Escobar Employee Management System</title>
      </Head> 
    </React.Fragment>
  )
}

export default TitleBar