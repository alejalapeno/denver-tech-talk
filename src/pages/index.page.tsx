import Head from 'next/head'
import styles from './root.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Denver Tech Talk</title>
        <meta name="description" content="Denver Tech Talk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Denver Tech Talk<sup>*</sup></h1>
        <div className={styles.copy}>
          <p className={styles.description}>
            <sup>*</sup>You don&apos;t have to be in Denver. You don&apos;t have to know how to code.
          </p>
          <p>
            <span className={styles.blue}>C</span><span className={styles.pink}>o</span><span className={styles.clementine}>m</span><span className={styles.nectarine}>m</span><span className={styles.highlighter}>u</span><span className={styles.blue}>n</span><span className={styles.pink}>i</span><span className={styles.clementine}>t</span><span className={styles.nectarine}>y</span> <span className={styles.highlighter}>G</span><span className={styles.blue}>u</span><span className={styles.pink}>i</span><span className={styles.clementine}>d</span><span className={styles.nectarine}>e</span><span className={styles.highlighter}>l</span><span className={styles.blue}>i</span><span className={styles.pink}>n</span><span className={styles.clementine}>e</span><span className={styles.nectarine}>s</span><span className={styles.highlighter}>:</span> Nothing NSFW, illegal, or discriminatory. No spam. Be cool to each other.
          </p>
          <a href="https://denver-tech-talk.slack.com">https://denver-tech-talk.slack.com</a>
        </div>
      </main>
    </>
  )
}
