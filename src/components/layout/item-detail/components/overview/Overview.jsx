import clsx from 'clsx';
import styles from './Overview.module.css';

export const Overview = (props) => {
  const { type, rarity, tier, bestFor, stackLimit, tradeable, part } = props;

  return (
    <section className={styles.overview}>
      <span className={styles.overviewTitle}>Overview</span>

      <div className={styles.overviewDetails}>
        {/* Type */}
        <div className={styles.detailGroup}>
          <span className={styles.label}>Type</span>
          <span className={styles.value}>
            {type.name}
            {part ? ` ( ${part.name} )` : ''}
          </span>
        </div>

        {/* Rarity */}
        <div className={styles.detailGroup}>
          <span className={styles.label}>Rarity</span>
          <span
            className={clsx(styles.value, styles.rarityValue)}
            style={{ '--color': rarity.color }}
          >
            {rarity.name}
          </span>
        </div>

        {/* Tier */}
        {tier && (
          <div className={styles.detailGroup}>
            <span className={styles.label}>Tier</span>
            <span className={styles.value} style={{ color: tier.color }}>
              {tier.name}
            </span>
          </div>
        )}

        {/* Best For */}
        {/* <div className={styles.detailGroup}>
          <span className={styles.label}>Best For</span>
          <span className={styles.value}>{bestFor}</span>
        </div> */}

        {/* Stack Limit */}
        <div className={styles.detailGroup}>
          <span className={styles.label}>Stack Limit</span>
          <span className={styles.value}>{stackLimit ?? 1}</span>
        </div>

        {/* Tradeable */}
        <div className={styles.detailGroup}>
          <span className={styles.label}>Tradeable</span>
          <span className={styles.value}>{tradeable ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </section>
  );
};
