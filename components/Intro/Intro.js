import Image from 'next/image';

import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introBackground}></div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.introImg}
          src='/intro-img/intro-1.jpeg'
          alt='turtle 1'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {/* <div className='imgContainer'>
        <Image
          className={styles.introImg}
          src='/intro-img/intro-2.jpeg'
          alt='turtle 1'
          layout='fill'
          objectFit='cover'
        />
      </div> */}
      {/* <div className={styles.imgContainer}>
        <Image
          className={styles.introImg}
          src='/intro-img/intro-3.jpeg'
          alt='turtle 1'
          layout='fill'
          objectFit='cover'
        />
      </div> */}
    </div>
  );
};

export default Intro;
