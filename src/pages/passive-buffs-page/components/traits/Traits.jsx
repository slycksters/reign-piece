import { motion } from 'framer-motion';
import { MAPPED_TRAITS } from '@data';
import { formatCamelCase, formatPercentageOrNumber } from '@utils';
import { CollapsibleSection } from '../collapsible-section';

const renderTraitItem = (t, styles) => (
  <motion.div key={t.id} layout className={styles.item}>
    <div className={styles.itemHeader}>
      <h5 className={styles.itemTitle}>{t.name}</h5>
      <span className={styles.itemRarity}>
        {t.availability ? `${t.availability.name} - ` : ''}
        {`${t.rarity.name} ${
          t.chance
            ? `(${(t.chance * 100).toFixed(t.chance < 0.01 ? 2 : 1)}%)`
            : ''
        }`}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        {t.name !== 'None' && <p className={styles.sectionLabel}>Buffs</p>}
        <div className={styles.buffList}>
          {t.name === 'None' ? (
            <span className={styles.itemDescription}>{t.description}</span>
          ) : (
            Object.entries(t.stats).map(([key, value]) => (
              <span key={key} className={styles.buffItem}>
                <span className={styles.statLabel}>{formatCamelCase(key)}:</span>{' '}
                {formatPercentageOrNumber(value)}
              </span>
            ))
          )}
        </div>
      </div>
      <div>
        <p className={styles.sectionLabel}>Obtainment</p>
        <p className={styles.obtainmentText}>{t.obtainment}</p>
      </div>
    </div>
  </motion.div>
);

export const Traits = () => (
  <CollapsibleSection
    title="Traits"
    description="Traits are powerful passives that can be rolled to further enhance your character's capabilities. Some traits are rarer than others and provide massive boosts."
    data={MAPPED_TRAITS}
    renderItem={renderTraitItem}
    animationDuration={0.6}
  />
);