import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Multiplayer WebGL Game</title>
        <meta name="description" content="Multiplayer webgl game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         This is a work in progress
        </h1>
      </main>

      <footer className={styles.footer}>
       Made by OslavDev
      </footer>
    </div>
  )
}
