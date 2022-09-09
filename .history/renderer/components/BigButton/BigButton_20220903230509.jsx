import Link from 'next/link';
import React from 'react';
import styles from './BigButton.module.scss';

export default function BigButton({link, label , type }) {
 if(type == "submit"){
  return (
    <button type={type}>

    </button>
  )
 }else{
  return (
    <div>
      <Link 
      href={link}>
          <div className={styles.container}>
              {label}
          </div>
      </Link>
    </div>
  )
 }
}