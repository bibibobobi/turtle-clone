import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './Intro.module.css';

const Intro = () => {
  // determined if page has scrolled and if the view is on mobile
  const [firstScene, setFirstScene] = useState(true);
  const [secondScene, setSecondScene] = useState(false);
  const [thirdScene, setThirdScene] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // change state on scroll
  useEffect(() => {
    const handleScenes = () => {
      console.log(window.scrollY);

      if (window.scrollY >= 0 && window.scrollY < 400) {
        setFirstScene(true);
        setSecondScene(false);
        setThirdScene(false);
      } else if (window.scrollY >= 400 && window.scrollY < 850) {
        setSecondScene(true);
        setFirstScene(false);
        setThirdScene(false);
      } else if (window.scrollY >= 850 && window.scrollY < 1650) {
        setThirdScene(true);
        setSecondScene(false);
        setFirstScene(false);
      } else if (window.scrollY >= 1650) {
        // setShowIntro(false);
      }
    };

    document.addEventListener('scroll', handleScenes, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScenes);
    };
  }, []);

  // useEffect(() => {
  //   window.history.scrollRestoration = 'manual';
  // }, []);

  return (
    <div className={showIntro ? '' : `${styles.introContainer}`}>
      <div className={styles.introBackground}></div>
      <div
        className={
          firstScene
            ? `${styles.introImg1} ${styles.activeImg}`
            : `
            ${styles.introImg1}`
        }
      />
      <div
        className={
          secondScene
            ? `${styles.introImg2} ${styles.activeImg}`
            : `
            ${styles.introImg2}`
        }
      ></div>
      <div
        className={
          thirdScene
            ? `${styles.introImg3} ${styles.activeImg}`
            : `
            ${styles.introImg3}`
        }
      ></div>

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
