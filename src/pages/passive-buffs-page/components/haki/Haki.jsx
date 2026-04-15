import { motion } from 'framer-motion';
import { MAPPED_HAKIS } from '@data';
import { formatCamelCase, formatPercentageOrNumber } from '@utils';
import { CollapsibleSection } from '../collapsible-section';

const renderHakiItem = (h, styles) => (
  <motion.div layout key={h.id} className={styles.item}>
    <div className={styles.itemHeader}>
      <h5 className={styles.itemTitle}>{h.name}</h5>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className={styles.sectionLabel}>Buffs</p>
        <div className={styles.buffList}>
          {Object.entries(h.stats).map(([key, value]) => (
            <span key={key} className={styles.buffItem}>
              <span className={styles.statLabel}>{formatCamelCase(key)}:</span>{' '}
              {formatPercentageOrNumber(value)}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.sectionLabel}>Obtainment</p>
        {h.obtainment.map((ho) => (
          <p key={ho} className={styles.obtainmentText}>
            {ho}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Haki = () => (
  <CollapsibleSection
    title="Haki"
    description="Haki provides offensive and defensive buffs, primarily boosting sword and melee stats. Press [H] on PC to activate Haki, or tap the Haki button on other platforms"
    data={MAPPED_HAKIS}
    renderItem={renderHakiItem}
  />
);