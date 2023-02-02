import styles from "../styles/MarketPopUp.module.css"
import { GiCrossMark } from 'react-icons/gi'
import Image from "next/image"
import {  useState } from "react"

const NftPopUp = ({  setClicked, id, title, desc, NftImg, creator, price }) => {

    const [activeDetails, setActiveDetails] = useState(false)
    const [activeDesc, setActiveDesc] = useState(false)

    return (
        <div className={styles.container} >
            <div className={styles.wrapper} >
                <div className={styles.info}>
                    <div className={styles.infoLeft}>
                        <Image src={NftImg} alt="" className={styles.infoImg} />
                    </div>
                    <div className={styles.infoRight}>
                        <div className={styles.Nftname}>
                            <Image src={NftImg} alt="" className={styles.detailsRightImg} />
                            <h4>{title} (33.33%)</h4>
                        </div>
                        <div className={styles.NftId}>
                            <h3>By - {creator}</h3>
                            <span>6ax...1a0</span>
                        </div>

                        {/* accordian for desc */}
                        <div onClick={activeDesc ? () => setActiveDesc(false) : () => setActiveDesc(true)} className={styles.NftAccordionDesc}
                        >
                            <div className={activeDesc ? styles.NftAccordionDescHeadingActive : styles.NftAccordionDescHeading}>
                                <h4>Description</h4>
                                <span>X</span>
                            </div>

                            <div className={activeDesc ? styles.AccordionDescContentActive : styles.AccordionDescContent}>
                                {desc}
                            </div>
                        </div>
                        {/* accordian for details */}

                        <div onClick={activeDetails ? () => setActiveDetails(false) : () => setActiveDetails(true)} className={styles.NftAccordionDetails}
                        >
                            <div className={activeDetails ? styles.NftAccordionDetailsHeadingActive : styles.NftAccordionDetailsHeading}>
                                <h4>Details</h4>
                                <span>X</span>
                            </div>

                            <div className={activeDetails ? styles.AccordionDetailsContentActive : styles.AccordionDetailsContent}>
                                <div className={styles.AccordianSpan}>
                                    <span>Token address</span>
                                    <span>HjneUD...uS2</span>
                                </div>
                                <div className={styles.AccordianSpan}>
                                    <span>Owner</span>
                                    <span>4dfKZ5...NWQ</span>
                                </div>
                                <div className={styles.AccordianSpan}>
                                    <span>Creator fees</span>
                                    <span>3.33%</span>
                                </div>
                                <div className={styles.AccordianSpan}>
                                    <span>Marketplace fees</span>
                                    <span>3%</span>
                                </div>
                                <div className={styles.AccordianSpan}>
                                    <span>Mutable</span>
                                    <span>yes</span>
                                </div>

                            </div>
                        </div>


                        <div className={styles.NftBuyContainer}>

                            <div className={styles.NftBuyDiv1}>
                                <span>Price</span>
                                <span>Offer</span>
                            </div>
                            <div className={styles.NftBuyDiv2}>
                                <span>{price} ETH</span>
                                <span>No Offer</span>
                            </div>


                            <button className={styles.NftBuyBtn}>Mint Now</button>
                        </div>
                    </div>

                </div>
                <GiCrossMark onClick={() => setClicked(false)} className={styles.cancel} />
            </div>
        </div>
    )
}

export default NftPopUp
