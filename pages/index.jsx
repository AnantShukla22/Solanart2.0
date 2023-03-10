import Head from 'next/head'
import Header from '../components/Header'
import styles from "../styles/Home.module.css"
import Banner from '../components/Banner'
import MyCollection from '../components/MyCollection'
import Transaction from '../components/Transaction'
import Footer from '../components/Footer'


export default function Home() {

  return (
    <>
      <Head>
        <title>Solanart 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Header/>
        <Banner />
        <MyCollection />
        <Transaction />
        <Footer />
      </main>
    </>
  )
}

