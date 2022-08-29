import Link from 'next/link';
import React from 'react';
import styles from './BigButton.module.scss';

function BigButton({link, label}) {
  return (
    <Link 
    href={link}>
        <div className={styles.container}>
            {label}
        </div>
    </Link>
  )
}

export default BigButton