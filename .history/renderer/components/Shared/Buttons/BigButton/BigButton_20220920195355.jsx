import Link from 'next/link';
import React from 'react';
import styles from './BigButton.module.scss';

export default function BigButton({ label }) {
  return (
    <button className={styles.container}>
      {label}
    </button>
  )
}