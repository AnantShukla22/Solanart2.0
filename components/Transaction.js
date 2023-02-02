import styles from "../styles/Transaction.module.css"
import TransCard from "./TransCard"


const Transaction = () => {
    return (
        <section className={styles.container} id="transactions">
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>
                    Latest Transactions
                </h1>
                <div className={styles.TransCardContainer}>
                    {Array(8).fill().map((tx, i) => (
                        <TransCard key={i} tx={i + 1} />
                    ))}
                </div>
            </div>
            <div className={styles.loadMoreBtnContainer}>
                <button className={styles.loadMoreBtn}>
                    Load More
                </button>
            </div>
        </section>

    )
}

export default Transaction