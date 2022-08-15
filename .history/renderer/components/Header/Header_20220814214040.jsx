import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <Link href='../../home'>
                <div className={styles.left}>
                    <div className={styles.upper}>
                        Escobar
                    </div>
                    <div className={styles.lower}>
                        Employee Management System
                    </div>
                </div>
            </Link>
            <div className={styles.right}>
                <div className={styles.logout}>LOGOUT</div>
            </div>
        </div>
    </div>
  )
}

export default Header