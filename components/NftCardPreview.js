import styles from "../styles/NftPreview.module.css"
import Image from 'next/image'

const NftCard = ({ title,description,price,imgBase64 }) => {
    return (
        <div className={styles.card}>
            <Image src={imgBase64}  className={styles.cardImg} width={1000} height={1000}/>
                <h4 className={styles.cardHeading}>{title}</h4>
            <p className={styles.cardDesc}>
               {description}
            </p>
            <div className={styles.cardPriceContainer}>
                <div className={styles.cardPrice}>
                    <small>
                         Price
                    </small>
                    <p>{price} ETH</p>
                </div>
                <button className={styles.cardBtn}>
                    View Details
                </button>
            </div>
        </div>
    )
}



export default NftCard