import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { MAPPED_HAKIS } from '@data';
import { BsChevronDoubleDown } from 'react-icons/bs';
import styles from './Haki.module.css';

export const Haki = () => {
  const [openList, setOpenList] = useState(false);

  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;

  return (
    <article className={styles.haki}>
      <header className={styles.hakiHeader}>
        <h3 className={styles.hakiHeaderTitle}>Haki</h3>
        <p className={styles.hakiHeaderDescription}>
          Haki provides offensive and defensive buffs, primarily boosting sword
          and melee stats. Press [H] on PC to activate Haki, or tap the Haki
          button on other platforms
        </p>
      </header>

      {/* Animated container */}
      <motion.div
        className={clsx(
          'grid grid-cols-1 md:grid-cols-2',
          styles.hakiList
        )}
        initial={false}
        animate={{
          height: openList ? 'auto' : 0,
          opacity: openList ? 1 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeInOut',
        }}
        style={{ overflow: 'hidden' }}
      >
        {MAPPED_HAKIS.map((h) => (
          <motion.div
            layout
            key={h.id}
            className={styles.hakiItem}
          >
            <div className={styles.hakiItemHeader}>
              <h5 className={styles.hakiItemTitle}>{h.name}</h5>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Buffs */}
              <div className={styles.buffContainer}>
                <p className={styles.sectionLabel}>Buffs</p>

                <div className={styles.buffList}>
                  {Object.entries(h.stats).map(([key, value]) => (
                    <span key={key} className={styles.buffItem}>
                      <span className={styles.statLabel}>
                        {formatLabel(key)}:
                      </span>{' '}
                      {formatValue(value)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Obtainment */}
              <div className={styles.obtainmentContainer}>
                <p className={styles.sectionLabel}>Obtainment</p>

                {h.obtainment.map((ho) => (
                  <p key={ho} className={styles.obtainmentText}>
                    {ho}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <button
        className={styles.openListButton}
        onClick={() => setOpenList((v) => !v)}
        type="button"
      >
        <BsChevronDoubleDown
          className={clsx(styles.normalArrow, {
            [styles.rotated]: openList,
          })}
        />
      </button>
    </article>
  );
};