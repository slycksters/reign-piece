import React from 'react';
import { MAPPED_VOWS } from '@data';
import styles from './Vows.module.css';

export const Vows = () => {
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

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {MAPPED_VOWS.map((v) => (
          <div key={v.id} className={styles.vowItem}>
            <div className={styles.vowItemHeader}>
              <h5 className={styles.vowItemTitle}>{v.name}</h5>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Left Column: Buffs, Special Effects, Debuffs */}
              <div className={styles.leftColumn}>
                {/* Buffs */}
                <div className={styles.section}>
                    <p className={styles.sectionLabel}>Buffs</p>
                    <div className={styles.list}>
                      {Object.keys(v.buffs || {}).length > 0 ? Object.entries(v.buffs).map(([key, value]) => (
                        <span key={key} className={styles.buffItem}>
                          <span className={styles.statLabel}>{formatLabel(key)}:</span> {formatValue(value)}
                        </span>
                      )) : (
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
                        <span key={idx} className={styles.specialItem}>{effect}</span>
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
                            <span key={idx} className={styles.debuffItem}>{text}</span>
                          ));
                        }
                        return (
                          <span key={key} className={styles.debuffItem}>
                            <span className={styles.statLabel}>{formatLabel(key)}:</span> {formatValue(value)}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Methods */}
              <div className={styles.rightColumn}>
                {/* Bind Method */}
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Binding Method</p>
                  <div className={styles.list}>
                    {v.bindMethod.map((method, idx) => (
                      <span key={idx} className={styles.methodItem}>{method}</span>
                    ))}
                  </div>
                </div>

                {/* Unbind Method */}
                <div className={styles.section}>
                  <p className={styles.sectionLabel}>Unbinding Method</p>
                  <div className={styles.list}>
                    {v.unbindMethod.map((method, idx) => (
                      <span key={idx} className={styles.methodItem}>{method}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};