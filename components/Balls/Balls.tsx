import React from 'react'
import styles from './Balls.module.scss'

const Balls = () => {
  return (
    <div className={styles.backgroundAnimation}>
        <div className={styles.ballOne}></div>
        <div className={styles.ballTwo}></div>
        <div className={styles.ballThree}></div>
      </div>
  )
}

export default Balls