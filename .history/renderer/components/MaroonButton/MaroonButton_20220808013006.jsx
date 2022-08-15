import React from 'react'
import styles from './MaroonButton.module.scss'

const MaroonButton = ({label}) => {

    return (
        <div className={styles.button}>
            {label}
        </div>
    )
}

export default MaroonButton