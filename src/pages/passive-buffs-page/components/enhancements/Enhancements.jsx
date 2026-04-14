import { useState } from 'react';
import clsx from 'clsx';
import { MAPPED_PASSIVES } from '@data';
import { BsChevronDoubleDown } from 'react-icons/bs';
import styles from './Enhancements.module.css';

export const Enhancements = () => {
  const [openList, setOpenList] = useState(false);

  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;

  return (
    <article className={styles.enhancement}>
      <header className={styles.enhancementHeader}>
        <h3 className={styles.enhancementHeaderTitle}>Enhancements</h3>
        <p className={styles.enhancementHeaderDescription}>
          Enhancements provide passive upgrades that improve and modify your
          abilities
        </p>
      </header>

      {/* Grid Container */}
      <div
        className={clsx(
          // 'grid grid-cols-1 md:grid-cols-2',
          'grid grid-cols-1 md:grid-cols-2',
          styles.enhancementList,
          openList ? styles.openedList : '',
        )}
      >
        {MAPPED_PASSIVES.map((e) => (
          <div key={e.id} className={styles.enhancementItem}>
            <div className={styles.enhancementItemHeader}>
              <h5 className={styles.enhancementItemTitle}>{e.name}</h5>
            </div>

            <div className={'grid grid-cols-2 gap-4'}>
              {/* Buffs */}
              <div className={styles.buffContainer}>
                <p className={styles.sectionLabel}>Buffs</p>
                <div className={styles.buffList}>
                  <span className={styles.buffItem}>
                    <span className={styles.statLabel}>{e.description}</span>
                  </span>
                </div>
              </div>

              {/* Obtainment */}
              <div className={styles.obtainmentContainer}>
                <p className={styles.sectionLabel}>Obtainment</p>
                {e.obtainment.map((eo) => (
                  <p key={eo} className={styles.obtainmentText}>
                    {eo}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className={styles.enhancementItemFiller}></div>
      </div>

      <button
        className={styles.openListButton}
        onClick={() => setOpenList(!openList)}
        type={'button'}
      >
        <BsChevronDoubleDown
          className={clsx(styles.normalArrow, { [styles.rotated]: openList })}
        />
      </button>
    </article>
  );
};
