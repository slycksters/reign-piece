import styles from './Stats.module.css';
import {
  formatCamelCase,
  formatNumberWithCommas,
  formatPercentageOrNumber,
} from '@utils';

export const Stats = ({ stats = {} }) => {
  const buffs = [];
  const debuffs = [];
  const specialEffects = [];

  Object.entries(stats).forEach(([key, value]) => {
    if (typeof value === 'number') {
      if (value > 0) {
        buffs.push([key, value]);
      } else if (value < 0) {
        debuffs.push([key, value]);
      }
    } else if (typeof value === 'string') {
      specialEffects.push(value);
    }
  });

  return (
    <section className={styles.stats}>
      <span className={styles.statsTitle}>Stats</span>

      <div className={styles.statsDetails}>
        {/* BUFFS */}
        {buffs.length > 0 && (
          <div className={styles.statsGroup}>
            <span className={styles.statGroupTitle}>Buff</span>

            <div className={styles.buffList}>
              {buffs.map(([key, value]) => (
                <span key={key} className={styles.buffItem}>
                  <span className={styles.statLabel}>
                    {formatCamelCase(key)}:
                  </span>{' '}
                  {formatNumberWithCommas(formatPercentageOrNumber(value))}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* DEBUFFS */}
        {debuffs.length > 0 && (
          <div className={styles.statsGroup}>
            <span className={styles.statGroupTitle}>Debuff</span>

            <div className={styles.buffList}>
              {debuffs.map(([key, value]) => (
                <span key={key} className={styles.debuffItem}>
                  <span className={styles.statLabel}>
                    {formatCamelCase(key)}:
                  </span>{' '}
                  {formatNumberWithCommas(formatPercentageOrNumber(value))}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* SPECIAL EFFECTS */}
        {specialEffects.length > 0 && (
          <div className={styles.statsGroup}>
            <span className={styles.statGroupTitle}>Special Effect</span>

            <div className={styles.buffList}>
              {specialEffects.map((effect, idx) => (
                <span key={idx} className={styles.specialItem}>
                  {effect}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
