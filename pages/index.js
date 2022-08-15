import Head from 'next/head';
import Intro from '../components/Intro/Intro';
import Nav from '../components/Nav/Nav';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Turtle Clone</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Intro />
      <Nav />

      <div className={styles.container}>Hello</div>
    </>
  );
}
