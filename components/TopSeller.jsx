import styles from "../styles/TopSeller.module.css"
import { SELLER_DATA } from "./data"
import Image from "next/image"


const TopSeller = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Top Sellers</h1>
            
            <div className={styles.sellerInfoContainer}>
                {SELLER_DATA.map((value) => (
                    <div key={value.id} className={styles.sellerInfo}>
                        <div>
                            <Image src={value.sellerImg} className={styles.sellerImg} />
                        </div>
                        <div className={styles.sellerContent}>
                            <h5>{value.sellerName}</h5>
                            <h5>{value.price}</h5>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default TopSeller