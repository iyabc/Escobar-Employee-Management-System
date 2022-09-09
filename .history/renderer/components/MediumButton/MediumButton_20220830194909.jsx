import Link from 'next/link';
import React from 'react';
import styles from './MediumButton.module.scss';

export default function MediumButton({label}) {
  return (
    <div className={styles.container}>
        {label}
    </div>
  )
}