import clsx from 'clsx';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      {/* Content layer */}
      <div className={styles.header}>
        <h1 className={clsx(styles.headerText, styles.shiningText)}>Reign Piece</h1>
        <small className={styles.smallDescription}>
          Game Database & Guide
        </small>
      </div>

      <div className={styles.dividerContainer}>
        <div className={styles.dividerLine}></div>
      </div>

      <div className={'mb-10'}>
        <small className={styles.tagline}>
          Your Ultimate Hub for Roblox's Reign Piece &bull; Master the Grand Line!
        </small>
      </div>
    </section>
  );
};