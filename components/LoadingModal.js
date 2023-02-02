import React from 'react'
import styles from "../styles/LoadingModal.module.css"

const LoadingModal = ({loadingMsg,setLoading}) => {
  return (
    <div className={styles.container} onClick={()=>setLoading(false)}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
          <p>Processing...</p>
        </div>
        <small>
          {loadingMsg}
        </small>
      </div>
    </div>
  )
}

export default LoadingModal