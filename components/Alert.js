import React from 'react'
import styles from "../styles/LoadingModal.module.css"
import { RxCrossCircled} from 'react-icons/rx'
import { IoIosCheckmarkCircleOutline} from 'react-icons/io'

const Alert = ({loadingMsg,setAlert,mintInfo}) => {
  // console.log(mintInfo)
  return (
    <div className={styles.container} onClick={()=>setAlert(false)}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <div className={styles.loaderContainer}>
            {(mintInfo==="Pass")?<IoIosCheckmarkCircleOutline size={40} color={"lawngreen "}/>:<RxCrossCircled size={40} color={"red"}/>}  
         </div>
        </div>
        <small>
          Minting Failed
        </small>
      </div>
    </div>
  )
}

export default Alert