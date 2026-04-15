import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { MAPPED_VOWS } from '@data';
import styles from './Vows.module.css';

export const Vows = () => {
  const [openList, setOpenList] = useState(false);

  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10, -0.2 -> -20%
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;

  return (
    <article className={styles.vow}>
      <header className={styles.vowHeader}>
        <h3 className={styles.vowHeaderTitle}>Vows</h3>
        <p className={styles.vowHeaderDescription}>
          Binding Vows are sacred contracts that grant immense power in exchange
          for significant restrictions or specific conditions. Once bound, a vow
          cannot be easily broken.
        </p>
      </header>

      {/* Animated container */}
      <motion.div
        className={clsx('grid grid-cols-1 md:grid-cols-2', styles.vowList)}
        initial={false}
        animate={{
          height: openList ? 'auto' : 0,
          opacity: openList ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: 'easeInOut',
        }}
        style={{ overflow: 'hidden' }}
      >
        {MAPPED_VOWS.map((v) => (
          <motion.div
            key={v.id}
            layout
            className={styles.vowItem}
          >
            <div className={styles.vowItemHeader}>
              <h5 className={styles.vowItemTitle}>{v.name}</h5>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Left Column */}
              <div className={styles.leftColumn}>
                {/* Buffs */}
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Buffs</p>
                  <div className={styles.list}>
                    {Object.keys(v.buffs || {}).length > 0 ? (
                      Object.entries(v.buffs).map(([key, value]) => (
                        <span key={key} className={styles.buffItem}>
                          <span className={styles.statLabel}>
                            {formatLabel(key)}:
                          </span>{' '}
                          {formatValue(value)}
                        </span>
                      ))
                    ) : (
                      <span className={styles.buffItem}>
                        <span className={styles.statLabel}>None</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Special Effects */}
                {v.specialEffects?.length > 0 && (
                  <div className={styles.section}>
                    <p className={styles.sectionLabel}>Special Effects</p>
                    <div className={styles.list}>
                      {v.specialEffects.map((effect, idx) => (
                        <span key={idx} className={styles.specialItem}>
                          {effect}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Debuffs */}
                {Object.keys(v.debuffs || {}).length > 0 && (
                  <div className={styles.section}>
                    <p className={styles.sectionLabel}>Debuffs</p>
                    <div className={styles.list}>
                      {Object.entries(v.debuffs).map(([key, value]) => {
                        if (key === 'additionals') {
                          return value.map((text, idx) => (
                            <span key={idx} className={styles.debuffItem}>
                              {text}
                            </span>
                          ));
                        }

                        return (
                          <span key={key} className={styles.debuffItem}>
                            <span className={styles.statLabel}>
                              {formatLabel(key)}:
                            </span>{' '}
                            {formatValue(value)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className={styles.rightColumn}>
                {/* Binding Method */}
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Binding Method</p>
                  <div className={styles.list}>
                    {v.bindMethod.map((method, idx) => (
                      <span key={idx} className={styles.methodItem}>
                        {method}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Unbinding Method */}
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Unbinding Method</p>
                  <div className={styles.list}>
                    {v.unbindMethod.map((method, idx) => (
                      <span key={idx} className={styles.methodItem}>
                        {method}
                      </span>
                    ))}
                  </div>
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