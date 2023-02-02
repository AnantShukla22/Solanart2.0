import styles from "../styles/Transaction.module.css"
import { BiTransfer } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'

const TransCard = ({tx}) => {
    return (
        <section className={styles.transCard}>

            <div >
                <BiTransfer className={styles.transCardIcon}/>
            </div>
            <div className={styles.transCardId}>
                <h4 >
                    #{tx} Fund Transfered
                </h4>
                <small>
                    <span>Received by</span>
                    <a href="#" target="_blank">  0x21...786a</a>
                    <MdOpenInNew/>
                </small>
                
            </div>

            <p className={styles.transCardValue}>0.32 ETH</p>
        </section>
    )
}

export default TransCard