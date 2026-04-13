import { MAPPED_TRAITS } from '@data';
import styles from './Traits.module.css';

export const Traits = () => {
  // Helper: overallDamage -> Overall Damage
  const formatLabel = (key) =>
    key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

  // Helper: 0.25 -> 25%, 10 -> 10
  const formatValue = (val) =>
    val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;

  return (
    <article className={styles.trait}>
      <header className={styles.traitHeader}>
        <h3 className={styles.traitHeaderTitle}>Traits</h3>
        <p className={styles.traitHeaderDescription}>
          Traits are powerful passives that can be rolled to further enhance your
          character's capabilities. Some traits are rarer than others and provide
          massive boosts.
        </p>
      </header>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {MAPPED_TRAITS.map((t) => (
          <div key={t.id} className={styles.traitItem}>
            <div className={styles.traitItemHeader}>
              <h5 className={styles.traitItemTitle}>{t.name}</h5>
              <span className={styles.traitRarity}>
                {t.availability ?  t.availability.name + ' - ' : ''}
                {`${t.rarity.name} ${t.chance ? '(' + (t.chance * 100).toFixed(t.chance < 0.01 ? 2 : 1) + '%)' : ''}`}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Buffs */}
              <div className={styles.buffContainer}>
                {t.name !== 'None' && (
                  <p className={styles.sectionLabel}>Buffs</p>
                )}
                <div className={styles.buffList}>
                  {t.name === 'None' ? (
                    <span className={styles.traitItemDescription}>
                      {t.description}
                    </span>
                  ) : (
                    Object.entries(t.stats).map(([key, value]) => (
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
                <p className={styles.obtainmentText}>{t.obtainment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};