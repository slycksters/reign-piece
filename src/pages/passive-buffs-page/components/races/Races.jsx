import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MAPPED_RACES } from '@data';
import styles from './Races.module.css';

export const Races = () => {
  const [openList, setOpenList] = useState(false);

  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;

  return (
    <article className={styles.race}>
      <header className={styles.raceHeader}>
        <h3 className={styles.raceHeaderTitle}>Races</h3>
        <p className={styles.raceHeaderDescription}>
          Races provide unique passive buffs and visual changes. You can roll
          for a new race using Race Tokens or complete specific questlines to
          unlock Special races.
        </p>
      </header>

      {/* Animated container */}
      <motion.div
        className={clsx(
          'grid grid-cols-1 md:grid-cols-2',
          styles.raceList
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
        {MAPPED_RACES.map((r) => (
          <motion.div
            layout
            key={r.id}
            className={styles.raceItem}
          >
            <div className={styles.raceItemHeader}>
              <h5 className={styles.raceItemTitle}>{r.name}</h5>

              <span className={styles.raceRarity}>
                {`${r.rarity.name}${
                  r.chance
                    ? ` (${(r.chance * 100).toFixed(
                        r.chance < 0.01 ? 2 : 1
                      )}%)`
                    : ''
                }`}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Buffs */}
              <div className={styles.buffContainer}>
                {r.name !== 'Human' && (
                  <p className={styles.sectionLabel}>Buffs</p>
                )}

                <div className={styles.buffList}>
                  {r.name === 'Human' ? (
                    <span className={styles.raceItemDescription}>
                      {r.description}
                    </span>
                  ) : (
                    Object.entries(r.stats).map(([key, value]) => (
                      <span key={key} className={styles.buffItem}>
                        <span className={styles.statLabel}>
                          {formatLabel(key)}:
                        </span>{' '}
                        {formatValue(value)}
                      </span>
                    ))
                  )}
                </div>
              </div>

              {/* Obtainment */}
              <div className={styles.obtainmentContainer}>
                <p className={styles.sectionLabel}>Obtainment</p>
                <p className={styles.obtainmentText}>{r.obtainment}</p>
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