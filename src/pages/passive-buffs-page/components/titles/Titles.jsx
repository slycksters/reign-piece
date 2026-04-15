import { motion } from 'framer-motion';
import { MAPPED_TITLES } from '@data';
import { formatCamelCase, formatPercentageOrNumber } from '@utils';
import { CollapsibleSection } from '../collapsible-section';

const renderTitleItem = (t, styles) => (
  <motion.div layout key={t.id} className={styles.item}>
    <div className={styles.itemHeader}>
      <h5 className={styles.itemTitle}>{t.name}</h5>
      <span className={styles.itemRarity}>
        {t.availability ? `${t.availability.name} - ` : ''}
        {t.rarity ? t.rarity.name : ''}
      </span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className={styles.sectionLabel}>Buffs</p>
        <div className={styles.buffList}>
          {Object.entries(t.stats).map(([key, value]) => (
            <span key={key} className={styles.buffItem}>
              <span className={styles.statLabel}>{formatCamelCase(key)}:</span>{' '}
              {formatPercentageOrNumber(value)}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className={styles.sectionLabel}>Requirements</p>
        <div className={styles.requirementList}>
          {t.requirements.map((tr) => (
            <span key={tr.name} className={styles.requirementItem}>
              {tr.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const Titles = () => (
  <CollapsibleSection
    title="Titles"
    description="Titles are prestigious honors earned by completing difficult tasks or reaching milestones. Equipping a title provides significant passive stat boosts to your character."
    data={MAPPED_TITLES}
    renderItem={renderTitleItem}
  />
);