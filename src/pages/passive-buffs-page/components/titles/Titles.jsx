import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MAPPED_TITLES } from '@data';
import styles from './Titles.module.css';

export const Titles = () => {
  const [openList, setOpenList] = useState(false);

  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;

  return (
    <article className={styles.title}>
      <header className={styles.titleHeader}>
        <h3 className={styles.titleHeaderTitle}>Titles</h3>
        <p className={styles.titleHeaderDescription}>
          Titles are prestigious honors earned by completing difficult tasks or
          reaching milestones. Equipping a title provides significant passive
          stat boosts to your character.
        </p>
      </header>

      {/* Animated Grid Container */}
      <motion.div
        className={clsx(
          'grid grid-cols-1 md:grid-cols-2',
          styles.titleList
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
        {MAPPED_TITLES.map((t) => (
          <motion.div
            layout
            key={t.id}
            className={styles.titleItem}
          >
            <div className={styles.titleItemHeader}>
              <h5 className={styles.titleItemTitle}>{t.name}</h5>

              <span className={styles.titleRarity}>
                {t.availability ? `${t.availability.name} - ` : ''}
                {t.rarity ? t.rarity.name : ''}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Buffs */}
              <div className={styles.buffContainer}>
                <p className={styles.sectionLabel}>Buffs</p>

                <div className={styles.buffList}>
                  {Object.entries(t.stats).map(([key, value]) => (
                    <span key={key} className={styles.buffItem}>
                      <span className={styles.statLabel}>
                        {formatLabel(key)}:
                      </span>{' '}
                      {formatValue(value)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className={styles.requirementContainer}>
                <p className={styles.sectionLabel}>Requirements</p>

                <div className={styles.requirementList}>
                  {t.requirements.map((tr) => (
                    <span key={tr.name} className={styles.requirementItem}>
                      {tr.name}
                    </span>
                  ))}
                </div>
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