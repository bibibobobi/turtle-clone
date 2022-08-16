import { useInView } from 'react-intersection-observer';

import styles from './Nav.module.css';

const Nav = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={inView ? `${styles.showNav}` : `${styles.navWrapper}`}
    >
      <h1 className={styles.title}>This is a slowly appearing Nav</h1>
    </div>
  );
};

export default Nav;
