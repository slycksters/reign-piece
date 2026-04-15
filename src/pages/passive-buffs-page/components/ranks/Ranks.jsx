import { motion } from 'framer-motion';
import { MAPPED_RANKS } from '@data';
import { pluralizeText, formatCamelCase, formatPercentageOrNumber } from '@utils';
import { CollapsibleSection } from '../collapsible-section';

const renderRankItem = (r, styles) => (
  <motion.div layout key={r.id} className={styles.item}>
    <h5 className={styles.itemTitle} style={{ marginBottom: '12px' }}>
      {r.name}
    </h5>
    {r.name === 'None' ? (
      <span className={styles.itemDescription}>{r.description}</span>
    ) : (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className={styles.sectionLabel}>Buffs</p>
          <div className={styles.buffList}>
            {Object.entries(r.stats).map(([key, value]) => (
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
            {r.requirements.map((rr) => (
              <span
                key={`${rr.id}${rr.quantity}`}
                className={styles.requirementItem}
              >
                {rr.quantity} {pluralizeText(rr.name, rr.quantity)}
              </span>
            ))}
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

export const Ranks = () => (
  <CollapsibleSection
    title="Ranks"
    description="Ranks are the most important buff, as they provide the highest bonuses with no drawbacks. You can upgrade your rank by speaking with Leafa, who is located in West Mountain."
    data={MAPPED_RANKS}
    renderItem={renderRankItem}
  />
);