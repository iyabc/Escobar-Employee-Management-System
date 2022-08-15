import Link from 'next/link'
import React from 'react'
import styles from './MaroonButton.module.scss'

const MaroonButton = ({label, link}) => {

    return (
       <Link href={link}>
       <div className={styles.button}>
        {label}
        </div>
        </ Link>
    )
}

export default MaroonButton