import styles from "../styles/Header.module.css"
import { useRouter } from 'next/router'
import { connectWallet } from "./Blockchain"
import { useGlobalState, truncate } from "./GlobalState"
import BurgerMenu from "./BurgerMenu"

const Header = () => {

    // sing global state
    const [connectedAccount] = useGlobalState('connectedAccount')

    const router = useRouter()

    return (
        <header className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Solanart 2.0</h2>
                <div className={styles.navigator}>
                    <ul className={styles.ul}>
                        <li className={styles.li} onClick={() => router.push("/")}>Home</li>
                        <li className={styles.li} onClick={() => router.push("Market")}>Market </li>
                        <li className={styles.li} onClick={() => router.push("Create")}>Create</li>
                        <li className={styles.li} onClick={() => router.push("Contact")}>Contact</li>
                    </ul>

                    <button onClick={connectWallet} className={styles.button}> {connectedAccount === 'Connect Wallet' ? connectedAccount : truncate(connectedAccount, 4, 4, 13)} </button>
                    
                    <div className={styles.burger}>
                        <BurgerMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header