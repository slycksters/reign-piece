import { motion } from 'framer-motion';
import { MAPPED_RACES } from '@data';
import { formatCamelCase, formatPercentageOrNumber } from '@utils';
import { CollapsibleSection } from '../collapsible-section';

const renderRaceItem = (r, styles) => (
  <motion.div layout key={r.id} className={styles.item}>
    <div className={styles.itemHeader}>
      <h5 className={styles.itemTitle}>{r.name}</h5>
      <span className={styles.itemRarity}>
        {`${r.rarity.name}${
          r.chance
            ? ` (${(r.chance * 100).toFixed(r.chance < 0.01 ? 2 : 1)}%)`
            : ''
        }`}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        {r.name !== 'Human' && <p className={styles.sectionLabel}>Buffs</p>}
        <div className={styles.buffList}>
          {r.name === 'Human' ? (
            <span className={styles.itemDescription}>{r.description}</span>
          ) : (
            Object.entries(r.stats).map(([key, value]) => (
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
        <p className={styles.obtainmentText}>{r.obtainment}</p>
      </div>
    </div>
  </motion.div>
);

export const Races = () => (
  <CollapsibleSection
    title="Races"
    description="Races provide unique passive buffs and visual changes. You can roll for a new race using Race Tokens or complete specific questlines to unlock Special races."
    data={MAPPED_RACES}
    renderItem={renderRaceItem}
  />
);