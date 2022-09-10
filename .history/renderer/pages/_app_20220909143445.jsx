import React from "react";
import Head from "next/head";
import '../styles/globals.css';
import TitleBar from "../components/TitleBar/TitleBar";
import styles from './_app.module.scss';
import { ToastContainer } from "react-toastify";

export default function (props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.title_bar}>
          <TitleBar />
        </div>
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
      </div>  
      <ToastContainer 
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </React.Fragment>
  );
}
