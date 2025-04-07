import React from 'react'
import styles from './Loader.module.scss'
const Loader = () => {
  return (
    <>
    <div className={styles.loader__box}>
    <span className={styles.loader}></span>
    </div>
    </>
  )
}

export default Loader