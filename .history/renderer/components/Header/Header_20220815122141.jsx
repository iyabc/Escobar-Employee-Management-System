import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'

const Header = ({page}) => {
  return (
    <div className={styles.section}>
        <div className={styles.container}>
            <Link href='../HomePage/HomePage'>
                <div className={styles.left}>
                    <div className={styles.upper}>
                        Escobar
                    </div>
                    <div className={styles.lower}>
                        Employee Management System
                    </div>
                    <div className={styles.page}>
                        - {page}
                    </div>
                </div>
            </Link>
            <Link href='../../home'>
                <div className={styles.right}>
                    <div className={styles.logout}>LOGOUT</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header