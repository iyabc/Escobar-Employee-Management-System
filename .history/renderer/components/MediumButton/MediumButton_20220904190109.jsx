import Link from 'next/link';
import React from 'react';
import styles from './MediumButton.module.scss';

export default function MediumButton({ label, type }) {
  if(type = "inactivate"){

  }else{
    return (
      <div className={styles.container}>
          {label}
      </div>
    )
  }
}