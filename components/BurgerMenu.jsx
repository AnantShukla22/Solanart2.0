import React from 'react'
import { GiCrossMark } from "react-icons/gi"
import { RxCrosshair2 } from "react-icons/rx"
import styles from "../styles/Header.module.css"
import { useRouter } from 'next/router'
import { useState } from "react"

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    const router = useRouter()

    return (
        <div className={styles.burgerMenu} >

            {open?<GiCrossMark size={27} className={styles.burgerIconClose} onClick={() => setOpen(!open)}/>:<RxCrosshair2 size={28} className={styles.burgerIconOpen} onClick={() => setOpen(!open)}/>}
            {open &&
                <ul className={styles.burgerULActive}>
                    <li className={styles.burgerLI} onClick={() => router.push("/")}>Home</li>
                    <li className={styles.burgerLI} onClick={() => router.push("Market")}>Market </li>
                    <li className={styles.burgerLI} onClick={() => router.push("Create")}>Create</li>
                    <li className={styles.burgerLI} onClick={() => router.push("Contact")}>Contact</li>
                </ul>}
        </div>
    )
}

export default BurgerMenu