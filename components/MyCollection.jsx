import styles from "../styles/MyCollection.module.css"
import NftCard from "./NftCard"

const MyCollection = () => {
    return (
        <section className={styles.container} id="artwork">
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>
                    Your Collections
                </h1>

                <div className={styles.cardContainer}>
                    {Array(4).fill().map((nft, i) => (
                        <NftCard key={i} nft={i + 1} />


                    ))}
                </div>
                <div className={styles.loadMoreBtnContainer}>
                    <button className={styles.loadMoreBtn}>
                        Load More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MyCollection