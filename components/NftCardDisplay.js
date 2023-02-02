import styles from "../styles/NftCardDisplay.module.css"
import Image from 'next/image'
import { useState } from "react";
import MarketPopUp from "../components/MarketPopUp"

const NftCardDisplay = ({ value }) => {
    const [clicked, setClicked] = useState(false)

    const { id, title, desc, NftImg, creator, price } = value;
    return (
        <>
            <div className={styles.card}>

                <Image src={NftImg} alt="" className={styles.cardImg} />
                <div className={styles.nftCreater}>
                    <h3 >{title}  #{id}</h3>
                    <h4>By - {creator}</h4>
                </div>

                <p className={styles.cardDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure consectetur aut accusamus
                </p>
                <div className={styles.cardPriceContainer}>
                    <div className={styles.cardPrice}>
                        <small>
                            Current Price
                        </small>
                        <p>{price} ETH</p>

                    </div>
                    <button onClick={() => setClicked(true)} className={styles.cardBtn}>
                        View Details
                    </button>
                </div>
            </div>

            {clicked && (
                <MarketPopUp
                    id={id}
                     title={title} 
                     desc={desc} 
                     NftImg={NftImg}
                      creator={creator}
                       price={price}
                    setClicked={setClicked} />
            )}
        </>
    )

}

export default NftCardDisplay