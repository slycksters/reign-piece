import { MAPPED_RANKS } from '@data';
import { pluralizeText } from '@utils';
import styles from './Ranks.module.css';

export const Ranks = () => {
  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;


  console.log(MAPPED_RANKS)
  return (
    <article className={styles.rank}>
      <header className={styles.rankHeader}>
        <h3 className={styles.rankHeaderTitle}>Ranks</h3>
        <p className={styles.rankHeaderDescription}>
          Ranks are the most important buff, as they provide the highest bonuses
          with no drawbacks. You can upgrade your rank by speaking with Leafa,
          who is located in West Mountain.
        </p>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {MAPPED_RANKS.map((r) => (
          <div
            key={r.id}
            className={styles.rankItem}
            style={{ borderColor: 'var(--border-default)' }}
          >
            <h5 className={styles.rankItemTitle}>{r.name}</h5>

            {r.name === 'None' ? (
              <span className={styles.rankItemDescription}>
                {r.description}
              </span>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {/* Buffs */}
                <div className={styles.buffContainer}>
                  <p className={styles.sectionLabel}>Buffs</p>
                  <div className={styles.buffList}>
                    {Object.entries(r.stats).map(([key, value]) => (
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
                    {r.requirements.map((rr) => (
                      <span key={rr.id} className={styles.requirementItem}>
                        {rr.quantity} {pluralizeText(rr.name, rr.quantity)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
