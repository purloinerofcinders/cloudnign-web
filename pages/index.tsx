import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cloudnigh</title>
        <meta name="description" content="Cloudnigh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='text-center w-full flex h-screen'>
          <div className='m-auto'>
            <h1 className="text-neutral-800 font-bold text-5xl sm:text-8xl animate-pulse">
              Coming soon.
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}
