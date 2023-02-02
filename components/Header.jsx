import styles from "../styles/Header.module.css"
import { useRouter } from 'next/router'
import BurgerMenu from "./BurgerMenu"

const Header = () => {

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

                    <button className={styles.button}> Connect Wallet </button>
                    
                    <div className={styles.burger}>
                        <BurgerMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header