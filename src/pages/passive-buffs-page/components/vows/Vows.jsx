import { motion } from 'framer-motion';
import { MAPPED_VOWS } from '@data';
import { formatCamelCase, formatPercentageOrNumber } from '@utils';
import { CollapsibleSection } from '../collapsible-section';

const renderVowItem = (v, styles) => (
  <motion.div key={v.id} layout className={styles.item}>
    <div className={styles.itemHeader}>
      <h5 className={styles.itemTitle}>{v.name}</h5>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div style={{ marginBottom: '12px' }}>
          <p className={styles.sectionLabel}>Buffs</p>
          <div className={styles.buffList}>
            {Object.keys(v.buffs || {}).length > 0 ? (
              Object.entries(v.buffs).map(([key, value]) => (
                <span key={key} className={styles.buffItem}>
                  <span className={styles.statLabel}>{formatCamelCase(key)}:</span>{' '}
                  {formatPercentageOrNumber(value)}
                </span>
              ))
            ) : (
              <span className={styles.buffItem}>
                <span className={styles.statLabel}>None</span>
              </span>
            )}
          </div>
        </div>

        {v.specialEffects?.length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <p className={styles.sectionLabel}>Special Effects</p>
            <div className={styles.buffList}>
              {v.specialEffects.map((effect, idx) => (
                <span key={idx} className={styles.specialItem}>
                  {effect}
                </span>
              ))}
            </div>
          </div>
        )}

        {Object.keys(v.debuffs || {}).length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <p className={styles.sectionLabel}>Debuffs</p>
            <div className={styles.buffList}>
              {Object.entries(v.debuffs).map(([key, value]) =>
                key === 'additionals' ? (
                  value.map((text, idx) => (
                    <span key={idx} className={styles.debuffItem}>
                      {text}
                    </span>
                  ))
                ) : (
                  <span key={key} className={styles.debuffItem}>
                    <span className={styles.statLabel}>
                      {formatCamelCase(key)}:
                    </span>{' '}
                    {formatPercentageOrNumber(value)}
                  </span>
                )
              )}
            </div>
          </div>
        )}
      </div>

      <div>
        <div style={{ marginBottom: '12px' }}>
          <p className={styles.sectionLabel}>Binding Method</p>
          <div className={styles.buffList}>
            {v.bindMethod.map((method, idx) => (
              <span key={idx} className={styles.methodItem}>
                {method}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.sectionLabel}>Unbinding Method</p>
          <div className={styles.buffList}>
            {v.unbindMethod.map((method, idx) => (
              <span key={idx} className={styles.methodItem}>
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Vows = () => (
  <CollapsibleSection
    title="Vows"
    description="Binding Vows are sacred contracts that grant immense power in exchange for significant restrictions or specific conditions. Once bound, a vow cannot be easily broken."
    data={MAPPED_VOWS}
    renderItem={renderVowItem}
    animationDuration={0.45}
  />
);