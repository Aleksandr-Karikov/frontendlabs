import React from 'react'
import styles from './Checkbox.module.scss'
import accept from '../../../images/icons/free-icon-check-mark-64484.png'
import notAccept from '../../../images/icons/blank-square_icon-icons.com_72853.png'
const Checkbox = ({ disabled = false, checked, onChange, children }) => {
  return (

    <label className={styles.check}>
      <input type="checkbox" onChange={onChange} className={styles.check__input} disabled={disabled} checked={checked} />
      <img src={checked ? accept : notAccept} alt="test" className={styles.check__box}></img>
      <div className={styles.content}>
        {children}
      </div>

    </label>


  )
}
export default Checkbox