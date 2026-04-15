import { motion } from 'framer-motion';
import { MAPPED_PASSIVES } from '@data';
import { CollapsibleSection } from '../collapsible-section';

// The render logic for a single item. It receives the `styles` object from CollapsibleSection.
const renderEnhancementItem = (e, styles) => (
  <motion.div layout key={e.id} className={styles.item}>
    <div className={styles.itemHeader}>
      <h5 className={styles.itemTitle}>{e.name}</h5>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className={styles.sectionLabel}>Buffs</p>
        <div className={styles.buffList}>
          <span className={styles.buffItem}>
            <span className={styles.statLabel}>{e.description}</span>
          </span>
        </div>
      </div>
      <div>
        <p className={styles.sectionLabel}>Obtainment</p>
        {e.obtainment.map((eo) => (
          <p key={eo} className={styles.obtainmentText}>
            {eo}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

export const Enhancements = () => (
  <CollapsibleSection
    title="Enhancements"
    description="Enhancements provide passive upgrades that improve and modify your abilities"
    data={MAPPED_PASSIVES}
    renderItem={renderEnhancementItem}
  />
);