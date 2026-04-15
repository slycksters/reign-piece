import { CiImageOn } from 'react-icons/ci';
import { TIERS } from '@data';
import styles from './TierList.module.css';

export const TierList = ({ data }) => {
  // 1. Convert + sort tiers (SSS → D → ?)
  const tiers = Object.values(TIERS).sort((a, b) => {
    if (a.name === '?') return 1;
    if (b.name === '?') return -1;
    return b.id - a.id;
  });

  // 2. Normalize + group data
  const groupedMap = data.reduce((acc, item) => {
    const tierKey =
      typeof item.tier === 'string' ? item.tier : item.tier?.name;

    if (!tierKey) return acc;

    if (!acc[tierKey]) acc[tierKey] = [];
    acc[tierKey].push(item);

    return acc;
  }, {});

  return (
    <section className={styles.container}>
      <div className={styles.tierList}>
        {tiers
          .map((tier) => {
            const items = groupedMap[tier.name] || [];
            return { tier, items };
          })
          .filter(({ items }) => items.length > 0)
          .map(({ tier, items }) => (
            <div
              key={tier.id}
              className={styles.tierRow}
              style={{
                '--tier-color': tier.color,
                '--tier-color-glow': `${tier.textGlow}`,
              }}
            >
              {/* Tier Label */}
              <div
                className={styles.tierLabel}
                style={{
                  '--tier-color': tier.color,
                  '--tier-color-glow': `${tier.textGlow}`,
                }}
              >
                {tier.name}
              </div>

              {/* Items */}
              <div className={styles.tierItems}>
                {items.map((item) => (
                  <div key={item.id} className={styles.tierItem}>
                    <figure className={styles.itemImageWrapper}>
                      {item.image ? (
                        <img alt={item.name} src={item.image} />
                      ) : (
                        <CiImageOn
                          className="w-8 h-8 text-[var(--text-muted)]"
                        />
                      )}
                    </figure>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};