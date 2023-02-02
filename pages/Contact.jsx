import styles from "../styles/Contact.module.css"
import Header from "../components/Header"
import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Footer from "../components/Footer";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7l38nvr",
                "template_ptsxs1d",
                form.current,
                "WIQWBaw2sDJu7ATQD"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 className={styles.heading}>Get In Touch</h2>
                    <p className={styles.contactMsg}>
                        For Any Queries And Problems Please Contact From Here
                    </p>
                    <div className={styles.contact_info}>
                        <div className={styles.contact_options}>
                            <a href="mailto:kuhukanha@gamil.com" className={styles.contact_type}>
                                <AiOutlineMail size={26} className={styles.contact_type_icon} />
                                <span>kuhukanha@gamil.com</span>
                            </a>
                            <a href="https://github.com/AnantShukla22" className={styles.contact_type}>
                                <AiFillGithub size={27} className={styles.contact_type_icon} />
                                <span>Github</span>
                            </a>
                            <a href="#home" className={styles.contact_type}>
                                <AiFillLinkedin size={27} className={styles.contact_type_icon} />
                                <span>Linkedin</span>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=9425872022"
                                className={styles.contact_type}
                            >
                                <BsWhatsapp size={22} className={styles.contact_type_icon} />
                                <span>9425872022</span>
                            </a>
                        </div>
                        <div className={styles.formContainer}>

                            <form ref={form} onSubmit={sendEmail}>
                                <div className={styles.inputs}>
                                    <input
                                        type="text"
                                        name="name"
                                        className={styles.contact_form_input}
                                        placeholder="Your Name"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        className={styles.contact_form_input}
                                        placeholder="Your Email"
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        className={styles.contact_form_input}
                                        placeholder="Your Subject"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    id="c"
                                    cols="30"
                                    rows="10"
                                    placeholder="Your Message"
                                ></textarea>
                                <button type="submit" className={styles.contact_button}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Contact



