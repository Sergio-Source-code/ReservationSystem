import Head from 'next/head';
import Image from 'next/image';
import img from '../public/img/Restaurant.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Royal Kitchen</title>
        <meta name="description" content="Best Thai food in Houston" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={img} alt='/' priority />

    </div>
  );
}
