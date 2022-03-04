import React from 'react'
import styles from './button.module.scss'
export const Button = (props) => {
  return (
    <button {...props} className={styles.btn}>{props.children}</button>
  )
}
