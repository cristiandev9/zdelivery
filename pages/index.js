import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Z-Delivery</title>
        <meta name="description" content="Delivery e cardápio para restaurantes em Colatina" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       teste
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{'GeraZ'}
        </a>
      </footer>
    </div>
  )
}
