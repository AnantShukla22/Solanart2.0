import styles from "../styles/MyCollection.module.css"
import NftImg from "../images/b.png"
import Image from 'next/image'
import { useState } from "react";
import ChangePriceModal from "./ChangePriceModal"


const NftCard = ({ nft }) => {
    const [clicked, setClicked] = useState(false)

    return (
        <>
            <div className={styles.card}>
                <Image src={NftImg} alt="" className={styles.cardImg} />
                <div className={styles.cardOwnerDiv}>
                    <h4 className={styles.cardHeading}>title #{nft}</h4>

                    <h6>Owner - 0x21...786a</h6>
                </div>

                <p className={styles.cardDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore odio harum soluta sunt totam repudiandae a et pariatur, vero, atque laudantium quasi maxime error? Nemo saepe expedita obcaecati officia.
                </p>
                <div className={styles.cardPriceContainer}>
                    <div className={styles.cardPrice}>
                        <small>
                            Current Price
                        </small>
                        <p>0.34 ETH</p>
                    </div>
                    <button className={styles.cardBtn} onClick={() => setClicked(true)}>
                        Change Price
                    </button>
                </div>
            </div>

            {clicked && (
                <ChangePriceModal
                    setClicked={setClicked} />
            )}
        </>

    )
}



export default NftCard