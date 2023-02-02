import styles from "../styles/Footer.module.css"
import { AiFillInstagram, AiFillGithub, AiFillLinkedin, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { MdOpenInNew } from 'react-icons/md'


const Footer = () => {
    return (
        <footer className={styles.container}>
            <hr />
            <div className={styles.wrapper}>
                <a href="#home" className={styles.footer_logo}>Anant Shukla</a>

                <ul className={styles.all_links}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Collections</a></li>
                    <li><a href="#exprience">Create</a></li>
                    <li><a href="#project">Contact</a></li>
                    <li>
                        Inspired by - <a href="https://solanart.io/" target="_blank"> <span>
                            Solanart.io</span>  </a></li>
                </ul>

                <div className={styles.footer_socials}>


                    <a href="#home"><FaTwitter size={26} /></a>
                    <a href="#home"><RxDiscordLogo size={29} /></a> <a href="https://github.com/AnantShukla22"><AiFillGithub size={28} /></a><a href="#home"><AiFillLinkedin size={28} /></a>
                    <a href="#home"><AiFillInstagram size={29} /></a>
                </div>
            </div>

            {/* <hr className={styles.hr}   /> */}

            <div className={styles.TermsConditions}>

                <span>
                    All rights reserved 2021-2022 <AiOutlineCopyrightCircle />
                </span>

                <div className={styles.policy}>
                    <span>Terms & Conditions                     <MdOpenInNew className={styles.policyIcon}/>
                    </span>
                    <span>Privacy policy                     <MdOpenInNew className={styles.policyIcon}/>
                    </span>
                    <span>Cookie policy                     <MdOpenInNew className={styles.policyIcon}/>
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer