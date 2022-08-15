import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <div className={styles.left}>
                <Link href='../HomePage/HomePage'>
                    <div className={styles.upper}>
                        Escobar
                    </div>
                    <div className={styles.lower}>
                        Employee Management System
                    </div>
                </Link>
            </div>
            <div className={styles.right}>
                <div className={styles.logout}>LOGOUT</div>
            </div>
        </div>
    </div>
  )
}

export default Header