import { MAPPED_RACES } from '@data';
import styles from './Races.module.css';

export const Races = () => {
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

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {MAPPED_RACES.map((r) => (
          <div key={r.id} className={styles.raceItem}>
            <div className={styles.raceItemHeader}>
              <h5 className={styles.raceItemTitle}>{r.name}</h5>
              <span className={styles.raceRarity}>
                {`${r.rarity.name} ${r.chance ? '(' + (r.chance * 100).toFixed(r.chance < 0.01 ? 2 : 1) + '%)' : ''}`}
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
          </div>
        ))}
      </div>
    </article>
  );
};
