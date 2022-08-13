import Image from 'next/image';

import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introBackground}></div>
      <Image
        className={styles.introImg}
        src='/introImg/intro-1.jpeg'
        alt='turtle 1'
        layout='fill'
        objectFit='cover'
      />

      <Image
        className={styles.introImg}
        src='/introImg/intro-2.jpeg'
        alt='turtle 1'
        layout='fill'
        objectFit='cover'
      />

      <Image
        className={styles.introImg}
        src='/introImg/intro-3.jpeg'
        alt='turtle 1'
        layout='fill'
        objectFit='cover'
      />
      <div className={styles.introDialogs}>
        <div className={styles.dialogContainer}>
          <div id='0' className={styles.dialog}>
            <p>海龜是穿越時間的獸。</p>
            <p>兩億多年前，牠們與恐龍一起現身，</p>
            <p>倖存過白堊紀大滅絕，</p>
            <p>現今依舊徜徉於大海。</p>
          </div>
        </div>
        <div className={styles.dialogContainer}>
          <div id='1' className={styles.dialog}>
            <p>其中，革龜的外貌幾乎沿襲自遠古。</p>
            <p>牠那流線型、宛如淚珠的背甲，</p>
            <p>卻從天擇的勳章，淪為一道控訴——</p>
            <p>人類世的到來，成了海龜滅絕的起點。</p>
          </div>
        </div>
        <div className={styles.dialogContainer}>
          <div id='2' className={styles.dialog}>
            <p>海是一面鏡。</p>
            <p>龜途，即是人類的未來。</p>
          </div>
        </div>
        <div
          className={`${styles.dialogContainer} ${styles.dialogContainerLast}`}
        >
          <div>
            <div>.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
