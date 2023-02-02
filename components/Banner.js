import styles from "../styles/Banner.module.css"
import { useRouter } from 'next/router'
import Image from 'next/image'
import HomeImg from "../images/d.png"
import { BsPersonFill } from 'react-icons/bs';

const Banner = () => {

    const router = useRouter()
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.leftPart}>
                    <div >
                        <h1 className={styles.heading}>Buy And Sell <br />
                            Digital Arts,
                            <br />
                            <span className={styles.nftSpan}>NFTs</span> Collections
                        </h1>
                        <p className={styles.para}>Mint And Collect The Hottest Nfts Around</p>
                    </div>

                    <div className={styles.btnContainer} >
                        <button className={styles.btn1} onClick={() => router.push("/Create")}>
                            Create Nft
                        </button>
                        <button className={styles.btn2} onClick={() => router.push("/Market")}>
                            See Market
                        </button>
                    </div>

                    <div className={styles.users}>
                        <div className={styles.usersContainer}>
                            <span >143k</span>
                            <p >Users</p>
                        </div>
                        <div className={styles.usersContainer}>
                            <span >82k</span>
                            <p >Artworks</p>
                        </div><div className={styles.usersContainer}>
                            <span >20k</span>
                            <p >Artists</p>
                        </div>

                    </div>
                </div>

                <div className={styles.rightPart}>
                    <Image src={HomeImg} width={400} height={330} className={styles.rightPartImg} />

                    <div className={styles.rightPartIconCon}>
                        <BsPersonFill size={33} className={styles.rightPartIcon} />
                        <p>0x21...786a</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Banner