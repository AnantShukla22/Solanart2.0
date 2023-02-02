import styles from "../styles/Market.module.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NFT_DATA } from "../components/data"
import NftCardDisplay from "../components/NftCardDisplay"
import { AiOutlineReload, AiOutlineArrowLeft } from 'react-icons/ai'
import TopSeller from "../components/TopSeller"

const Market = () => {

    return (
        <>
            <Header />
            <section className={styles.container}>

                <div className={styles.wrapper}>
                    <h1 className={styles.heading}>MarketPlace </h1>

                    <div className={styles.searchContainer}>
                        <AiOutlineReload className={styles.searchIcon} href="/Market" />
                        <input type="text" placeholder="Search A Collection" className={styles.searchInput} />
                        <span>
                            <AiOutlineArrowLeft /> Search Categories
                        </span>
                    </div>
                    <div className={styles.filterContainer}>
                        <div className={styles.filterLeft}>
                            <div className={styles.categoryFilter}>

                                <select>
                                    <option >All Categories</option>
                                    <option value="trending">Trending</option>
                                    <option value="art">Art</option>
                                    <option value="classic">Classic</option>
                                    <option value="virtual-world">Virtual World</option>
                                </select>
                            </div>
                            <div className={styles.itemFilter}>
                                <select>                            <option >All Items</option>
                                    <option value="single">Single Item</option>
                                    <option value="bundle">Bundle</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.filterRight}>
                            <select>
                                <option >Sort By</option>
                                <option value="high">Highest Floor</option>
                                <option value="moderate">Lowest Floor</option>
                                <option value="low">Recent Drops</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.nftDisplay}>

                        {NFT_DATA.map((value, i) => (
                            <NftCardDisplay value={value} key={i} />
                        ))}
                    </div>

                    <div>
                        <TopSeller />
                    </div>
                </div>
            </section>
<Footer/>
        </>

    )
}

export default Market