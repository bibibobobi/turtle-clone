import Head from 'next/head';
import Image from 'next/image';

import Intro from '../components/Intro/Intro';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Turtle Clone</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Intro />
      <div className={styles.container}>Hello</div>
    </>
  );
}
